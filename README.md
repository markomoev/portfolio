# Marko Moev — Portfolio

A modern, high-performance personal portfolio website built with Next.js 16 (App Router), TypeScript, and Tailwind CSS. Featuring smooth animations with Framer Motion and full internationalization (English/Bulgarian).

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Internationalization**: 
  - `next-i18n-router` (Middleware based routing)
  - `react-i18next` (Translation hook)
  - `i18nexus` (Translation management & API)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- An API Key from [i18nexus](https://i18nexus.com/) (Free tier)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/markomoev/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory and add your i18nexus API key:
   ```env
   I18NEXUS_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   
   This command automatically pulls the latest translations from i18nexus before starting the server. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🌍 Internationalization (i18n)

This project uses a hybrid approach for translations:
- **API**: Translations are managed on i18nexus.com.
- **Build Time**: Translations are pulled as JSON files into `locales/{lang}/default.json` during build/dev.
- **Routing**: `middleware.ts` handles locale routing (e.g., `/en/about`, `/bg/about`).

To add new keys:
1. Add them to your code using `t('new_key')`.
2. Push them to i18nexus or add them manually on the dashboard.
3. Run `npm run dev` or `npm run build` to pull the latest updates.

## 📦 Deployment

This project is optimized for deployment on **Vercel**.

1. Push your code to GitHub.
2. Import the project in Vercel.
3. **Critical**: Add the `I18NEXUS_API_KEY` to your Vercel Environment Variables.
4. Deploy!

The build command is configured as:
```bash
i18nexus pull -k $I18NEXUS_API_KEY && next build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
