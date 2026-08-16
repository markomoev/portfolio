"use client";

import { useEffect, useRef, useState, type ReactNode, type Ref } from "react";
import { cn } from "@/lib/utils";

type RevealTag = "div" | "section" | "article" | "li";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds, matching the design's data-delay values. */
  delay?: number;
  className?: string;
  as?: RevealTag;
};

/**
 * Scroll-in reveal (the `data-reveal` behaviour from the v2 design file).
 *
 * Deliberately progressive: the server-rendered markup is fully visible, and
 * the hidden state is only applied on the client, only for elements that are
 * still below the fold, and only when motion is welcome. That way the content
 * is never invisible to a visitor without JavaScript, to a crawler that does
 * not run it, or to someone who prefers reduced motion.
 */
export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.85) return;

    setArmed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          window.setTimeout(() => setRevealed(true), delay);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const hidden = armed && !revealed;

  return (
    <Tag
      ref={ref as Ref<never>}
      className={cn(
        "transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0,0,.58,1)] motion-reduce:transition-none",
        className
      )}
      style={hidden ? { opacity: 0, transform: "translateY(24px)" } : undefined}
    >
      {children}
    </Tag>
  );
}
