# AI Product Listing Health Check

AI Product Listing Health Check is a Next.js MVP foundation for an e-commerce product listing audit tool. The future product will help teams evaluate whether product pages are ready for search engines, AI discovery surfaces, and shoppers.

## Current Status

Foundation only. This first commit includes the app shell, placeholder homepage, initial folder structure, and no-op audit and analytics modules.

Not included yet:

- Audit logic
- Scraping
- AI analysis
- Scoring
- Analytics implementation
- Database
- Authentication
- External API integrations

## Future Phases

1. Add URL submission and validation.
2. Add mocked audit results for SEO, AI visibility, and product visuals.
3. Build the rules engine and scoring model.
4. Add optional scraping or page extraction behind `lib/audit`.
5. Add AI-assisted recommendations behind provider-agnostic interfaces.
6. Add analytics events when the product flow is ready.
7. Prepare production deployment and monitoring.

## Local Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Deploy To Vercel

1. Push this repository to GitHub.
2. Import the GitHub repository in Vercel.
3. Keep the framework preset as Next.js.
4. Add environment variables later only when future AI, scraping, or analytics integrations exist.
5. Deploy.
