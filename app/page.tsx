export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f7f4] px-6 py-16 text-slate-950">
      <section className="w-full max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Product listing audit MVP
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Check if your product listing is ready for Search, AI and shoppers
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Paste a product URL and get a quick audit of your SEO, AI visibility
          and product visuals.
        </p>

        <form className="mt-10 flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:flex-row">
          <input
            className="min-h-12 flex-1 rounded-md border border-slate-200 bg-slate-50 px-4 text-base text-slate-500"
            type="url"
            placeholder="https://example.com/product"
            disabled
          />
          <button
            className="min-h-12 rounded-md bg-emerald-700 px-5 text-base font-semibold text-white opacity-70"
            type="button"
            disabled
          >
            Start Health Check
          </button>
        </form>
      </section>
    </main>
  );
}
