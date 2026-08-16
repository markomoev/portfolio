"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export type ServiceKind = "site" | "landing" | "shop";

const NAVY = 0x0b1f3a;
const INDIGO = 0x1f5fd6;
const YELLOW = 0xffd400;
const LIGHT = 0xdce9f7;
const WHITE = 0xffffff;
const GREY = 0xc4d5e8;
const DARK = 0x050d1a;
const SW = 360;
const SH = 760;
const PW = 1.88;
const PH = 4.02;
const KX = PW / SW;
const KY = PH / SH;
/** Inner screen radius: body 0.32 minus the ~0.11 bezel, so the glass follows the phone. */
const SCREEN_R = 0.24;
const SCREEN_R_PX = SCREEN_R / KX;

type RectMesh = THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>;
type ScreenUI = { group: THREE.Group; tick: (t: number) => void };

function roundedGeom(w: number, h: number, r: number) {
  const s = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  r = Math.min(r, w / 2, h / 2);
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return new THREE.ShapeGeometry(s, 10);
}

function extrudeGeom(w: number, h: number, r: number, d: number) {
  const s = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  const g = new THREE.ExtrudeGeometry(s, {
    depth: d,
    bevelEnabled: true,
    bevelSize: 0.035,
    bevelThickness: 0.035,
    bevelSegments: 3,
    curveSegments: 12,
  });
  g.center();
  return g;
}

/**
 * The screen is a flat stack of coplanar rectangles only 0.004 world units
 * apart, ~8.2 units from the camera. On a depth buffer with less headroom than
 * 24 bits — which is what `powerPreference: "low-power"` can hand you on an
 * integrated GPU — neighbouring layers round to the same depth value and
 * z-fight, which shows up as diagonal hatching across the phone screen.
 *
 * Nothing about this stack needs the depth buffer: it is a 2D UI painted back
 * to front. So the rectangles never write depth, and an explicit renderOrder
 * fixes the paint sequence instead (three.js sorts on renderOrder before
 * distance, so equal-distance quads can no longer be reordered arbitrarily).
 */
let paintSeq = 0;

function screenMask() {
  const mesh = new THREE.Mesh(
    roundedGeom(PW, PH, SCREEN_R),
    new THREE.MeshBasicMaterial({
      colorWrite: false,
      depthWrite: false,
      stencilWrite: true,
      stencilRef: 1,
      stencilFunc: THREE.AlwaysStencilFunc,
      stencilFail: THREE.KeepStencilOp,
      stencilZFail: THREE.KeepStencilOp,
      stencilZPass: THREE.ReplaceStencilOp,
    })
  );
  mesh.renderOrder = 1;
  mesh.userData.screenMask = true;
  return mesh;
}

function clipToScreen(root: THREE.Object3D) {
  root.traverse((child) => {
    if (!(child instanceof THREE.Mesh) || child.userData.screenMask) return;
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.forEach((material) => {
      material.stencilWrite = false;
      material.stencilRef = 1;
      material.stencilFunc = THREE.EqualStencilFunc;
      material.stencilFail = THREE.KeepStencilOp;
      material.stencilZFail = THREE.KeepStencilOp;
      material.stencilZPass = THREE.KeepStencilOp;
    });
  });
}

function makeRect(
  x: number,
  y: number,
  w: number,
  h: number,
  color: number,
  r = 0,
  layer = 1
): RectMesh {
  const ww = w * KX;
  const hh = h * KY;
  const rr = r * KX;
  const geom = rr > 0.001 ? roundedGeom(ww, hh, rr) : new THREE.PlaneGeometry(ww, hh);
  const mesh = new THREE.Mesh(
    geom,
    new THREE.MeshBasicMaterial({ color, transparent: true, depthWrite: false })
  );
  mesh.position.set(-PW / 2 + (x + w / 2) * KX, PH / 2 - (y + h / 2) * KY, 0.004 * layer);
  mesh.renderOrder = layer * 1000 + paintSeq++;
  return mesh;
}

function navBar(group: THREE.Group) {
  group.add(makeRect(0, 0, SW, 74, NAVY, 0, 2));
  group.add(makeRect(24, 32, 74, 12, WHITE, 6, 3));
  for (let i = 0; i < 3; i++) group.add(makeRect(210 + i * 42, 36, 26, 6, 0x6d87ad, 3, 3));
}

function buildSite(): ScreenUI {
  const g = new THREE.Group();
  const pages: THREE.Group[] = [];
  g.add(makeRect(0, 0, SW, SH, WHITE, SCREEN_R_PX, 1));

  const a = new THREE.Group();
  a.add(makeRect(24, 104, 312, 190, LIGHT, 10, 2));
  a.add(makeRect(24, 316, 220, 20, NAVY, 10, 2));
  for (let i = 0; i < 3; i++) a.add(makeRect(24, 356 + i * 20, i === 2 ? 190 : 312, 8, GREY, 4, 2));
  a.add(makeRect(24, 430, 150, 44, INDIGO, 22, 2));
  a.add(makeRect(24, 502, 312, 120, LIGHT, 10, 2));
  pages.push(a);

  const b = new THREE.Group();
  b.add(makeRect(24, 104, 180, 20, NAVY, 10, 2));
  for (let i = 0; i < 4; i++) {
    b.add(makeRect(24 + (i % 2) * 164, 148 + Math.floor(i / 2) * 172, 148, 152, LIGHT, 10, 2));
  }
  for (let i = 0; i < 3; i++) b.add(makeRect(24, 512 + i * 20, i === 2 ? 190 : 312, 8, GREY, 4, 2));
  pages.push(b);

  const c = new THREE.Group();
  c.add(makeRect(24, 104, 312, 120, LIGHT, 10, 2));
  c.add(makeRect(24, 250, 150, 20, NAVY, 10, 2));
  for (let i = 0; i < 3; i++) c.add(makeRect(24, 294 + i * 62, 312, 46, LIGHT, 8, 2));
  c.add(makeRect(24, 496, 312, 48, YELLOW, 24, 2));
  pages.push(c);

  pages.forEach((p) => g.add(p));
  navBar(g);

  const dots: RectMesh[] = [];
  for (let i = 0; i < 6; i++) {
    const d = makeRect(SW / 2 - 62 + i * 22, SH - 62, 12, 12, GREY, 6, 3);
    dots.push(d);
    g.add(d);
  }

  let shown = -1;
  return {
    group: g,
    tick(t) {
      const period = 2.4;
      const idx = ((Math.floor(t / period) % 3) + 3) % 3;
      const p = (t % period) / period;
      const fade = p < 0.16 ? p / 0.16 : 1;
      if (idx !== shown) {
        shown = idx;
        pages.forEach((pg, i) => {
          pg.visible = i === idx;
        });
        dots.forEach((d, i) => {
          const on = i === idx || i === idx + 3;
          d.material.color.setHex(on ? INDIGO : GREY);
          d.scale.setScalar(on ? 1.15 : 1);
        });
      }
      const pg = pages[idx];
      pg.position.y = (1 - fade) * -0.06;
      pg.children.forEach((m) => {
        if (m instanceof THREE.Mesh && m.material instanceof THREE.MeshBasicMaterial) {
          m.material.opacity = fade;
        }
      });
    },
  };
}

function buildLanding(): ScreenUI {
  const g = new THREE.Group();
  g.add(makeRect(0, 0, SW, SH, WHITE, SCREEN_R_PX, 1));
  g.add(makeRect(24, 104, 260, 26, NAVY, 13, 2));
  g.add(makeRect(24, 146, 190, 26, NAVY, 13, 2));
  for (let i = 0; i < 3; i++) g.add(makeRect(24, 198 + i * 20, i === 2 ? 200 : 312, 8, GREY, 4, 2));
  g.add(makeRect(24, 260, 312, 150, LIGHT, 10, 2));
  for (let i = 0; i < 3; i++) {
    g.add(makeRect(24, 436 + i * 40, 12, 12, INDIGO, 6, 2));
    // x=48 leaves room for the bullet; at 24 the bar sat on top of its own dot.
    g.add(makeRect(48, 438 + i * 40, 220 - i * 30, 8, GREY, 4, 2));
  }
  const cta = makeRect(24, 574, 312, 56, YELLOW, 28, 2);
  const ctaLabel = makeRect(SW / 2 - 62, 596, 124, 12, NAVY, 6, 3);
  g.add(cta);
  g.add(ctaLabel);
  for (let i = 0; i < 2; i++) g.add(makeRect(24, 668 + i * 20, i ? 190 : 312, 8, 0xe1e9f2, 4, 2));

  // The cursor and its tap ring are not makeRect meshes, so they need the same
  // treatment explicitly: no depth writes (an opacity-0 ring must not punch a
  // hole in the UI behind it) and a renderOrder above every screen layer.
  const cursor = new THREE.Mesh(
    new THREE.CircleGeometry(0.055, 24),
    new THREE.MeshBasicMaterial({ color: INDIGO, transparent: true, depthWrite: false })
  );
  cursor.position.z = 0.05;
  cursor.renderOrder = 9001;
  g.add(cursor);
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.06, 0.075, 28),
    new THREE.MeshBasicMaterial({ color: INDIGO, transparent: true, opacity: 0, depthWrite: false })
  );
  ring.position.z = 0.048;
  ring.renderOrder = 9000;
  g.add(ring);

  const pos = (x: number, y: number): [number, number] => [-PW / 2 + x * KX, PH / 2 - y * KY];
  const from = pos(300, 300);
  const to = pos(SW / 2, 602);

  return {
    group: g,
    tick(t) {
      const cycle = 3.6;
      const p = (t % cycle) / cycle;
      const travel = Math.min(1, p / 0.5);
      const e = travel < 0.5 ? 2 * travel * travel : 1 - Math.pow(-2 * travel + 2, 2) / 2;
      cursor.position.x = from[0] + (to[0] - from[0]) * e;
      cursor.position.y = from[1] + (to[1] - from[1]) * e;
      const tap = p > 0.5 && p < 0.78 ? (p - 0.5) / 0.28 : -1;
      if (tap >= 0) {
        ring.position.copy(cursor.position);
        ring.position.z = 0.048;
        ring.scale.setScalar(1 + tap * 2.4);
        ring.material.opacity = 0.7 * (1 - tap);
        cursor.scale.setScalar(1 - 0.25 * Math.sin(tap * Math.PI));
      } else {
        ring.material.opacity = 0;
        cursor.scale.setScalar(1);
      }
      const pulse = tap >= 0 ? 0.97 : 1 + Math.sin(t * 4) * 0.015;
      cta.scale.set(pulse, pulse, 1);
      cursor.material.opacity = p > 0.9 ? 1 - (p - 0.9) / 0.1 : 1;
    },
  };
}

function buildShop(): ScreenUI {
  const g = new THREE.Group();
  g.add(makeRect(0, 0, SW, SH, WHITE, SCREEN_R_PX, 1));
  g.add(makeRect(24, 104, 170, 22, NAVY, 11, 2));
  for (let i = 0; i < 7; i++) g.add(makeRect(24 + i * 45, 146, 26, 7, GREY, 4, 2));

  const days: RectMesh[] = [];
  for (let i = 0; i < 28; i++) {
    const d = makeRect(24 + (i % 7) * 45, 172 + Math.floor(i / 7) * 46, 38, 38, LIGHT, 8, 2);
    days.push(d);
    g.add(d);
  }
  g.add(makeRect(24, 390, 120, 8, GREY, 4, 2));

  const chips: RectMesh[] = [];
  const chipBars: RectMesh[] = [];
  for (let i = 0; i < 3; i++) {
    const chip = makeRect(24 + i * 108, 416, 96, 44, LIGHT, 22, 2);
    const bar = makeRect(24 + i * 108 + 26, 436, 44, 8, GREY, 4, 3);
    chips.push(chip);
    chipBars.push(bar);
    g.add(chip);
    g.add(bar);
  }

  const sheet = new THREE.Group();
  sheet.add(makeRect(16, 596, 328, 140, NAVY, 14, 4));
  sheet.add(makeRect(40, 626, 14, 14, YELLOW, 7, 5));
  sheet.add(makeRect(66, 628, 150, 10, WHITE, 5, 5));
  sheet.add(makeRect(40, 656, 210, 8, 0x6d87ad, 4, 5));
  sheet.add(makeRect(40, 688, 150, 36, WHITE, 18, 5));
  g.add(sheet);

  let lastPick = -1;
  return {
    group: g,
    tick(t) {
      const cycle = 5.2;
      const p = t % cycle;
      const pick = ((Math.floor(t / cycle) % 12) + 12) % 12 + 8;
      if (pick !== lastPick) {
        lastPick = pick;
        days.forEach((d, i) => d.material.color.setHex(i === pick ? INDIGO : LIGHT));
      }
      const chosen = p > 1.1;
      days.forEach((d, i) => {
        if (i === pick) d.material.opacity = chosen ? 1 : 0.35 + 0.65 * (p / 1.1);
      });
      const slot = p > 2.3;
      chips.forEach((c, i) => {
        const on = slot && i === 1;
        c.material.color.setHex(on ? YELLOW : LIGHT);
        chipBars[i].material.color.setHex(on ? NAVY : GREY);
      });
      const up = p > 3.4 ? Math.min(1, (p - 3.4) / 0.5) : 0;
      sheet.visible = up > 0;
      if (up > 0) {
        const ease = 1 - Math.pow(1 - up, 3);
        sheet.position.y = (1 - ease) * -0.55;
        sheet.children.forEach((m) => {
          if (m instanceof THREE.Mesh && m.material instanceof THREE.MeshBasicMaterial) {
            m.material.opacity = ease;
          }
        });
      }
    },
  };
}

const BUILD: Record<ServiceKind, () => ScreenUI> = {
  site: buildSite,
  landing: buildLanding,
  shop: buildShop,
};

export default function ServicePhone({ kind }: { kind: ServiceKind }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      stencil: true,
      powerPreference: "low-power",
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.cssText = "display:block;width:100%;height:100%";
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    // The phone sits ~8.2 units away and is ~4.3 tall, so a tight frustum is
    // plenty. Near/far of 0.1/100 spent almost all the depth range on empty
    // space in front of the subject; 5/14 keeps precision where the model is.
    const camera = new THREE.PerspectiveCamera(32, 1, 5, 14);
    camera.position.set(0, 0, 8.4);

    scene.add(new THREE.HemisphereLight(0xffffff, 0xcfe6f8, 1.05));
    const key = new THREE.DirectionalLight(0xffffff, 2.1);
    key.position.set(3.5, 5, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x9dc4ff, 1.0);
    rim.position.set(-5, -1, 2.5);
    scene.add(rim);

    const phone = new THREE.Group();
    const body = new THREE.Mesh(
      extrudeGeom(2.1, 4.25, 0.32, 0.24),
      new THREE.MeshStandardMaterial({ color: NAVY, roughness: 0.34, metalness: 0.32 })
    );
    phone.add(body);

    // Paint order is per-screen, so restart the counter for each phone.
    paintSeq = 0;
    const ui = (BUILD[kind] || buildSite)();
    ui.group.add(screenMask());
    clipToScreen(ui.group);
    ui.group.position.z = 0.175;
    phone.add(ui.group);

    const notch = new THREE.Mesh(
      extrudeGeom(0.62, 0.15, 0.075, 0.02),
      new THREE.MeshStandardMaterial({ color: DARK, roughness: 0.5 })
    );
    notch.position.set(0, 1.86, 0.21);
    phone.add(notch);

    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(3.6, 1.1),
      new THREE.MeshBasicMaterial({ color: INDIGO, transparent: true, opacity: 0.16 })
    );
    glow.position.set(0, -2.5, -0.6);
    scene.add(glow);

    phone.rotation.set(-0.06, -0.3, 0.02);
    scene.add(phone);

    const size = () => {
      const r = el.getBoundingClientRect();
      const w = Math.max(1, r.width);
      const h = Math.max(1, r.height);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(el);

    let visible = true;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible = entry.isIntersecting;
        });
      },
      { rootMargin: "160px" }
    );
    io.observe(el);

    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;
    const host = el.closest("[data-tilt-host]") ?? el;
    const onMove = (e: Event) => {
      const pe = e as PointerEvent;
      const r = host.getBoundingClientRect();
      tx = ((pe.clientX - r.left) / r.width - 0.5) * 0.7;
      ty = ((pe.clientY - r.top) / r.height - 0.5) * 0.38;
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };
    if (!reduced) {
      host.addEventListener("pointermove", onMove);
      host.addEventListener("pointerleave", onLeave);
    }

    const start = performance.now();
    let raf = 0;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      const t = Math.max(0, (now - start) / 1000);
      px += (tx - px) * 0.07;
      py += (ty - py) * 0.07;
      phone.rotation.y = -0.3 + Math.sin(t * 0.3) * 0.13 + px;
      phone.rotation.x = -0.06 + Math.sin(t * 0.22) * 0.05 + py;
      phone.position.y = Math.sin(t * 0.55) * 0.07;
      ui.tick(t);
      renderer.render(scene, camera);
    };

    if (reduced) {
      ui.tick(1.6);
      renderer.render(scene, camera);
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [kind]);

  return <div ref={hostRef} className="absolute inset-0" aria-hidden="true" />;
}
