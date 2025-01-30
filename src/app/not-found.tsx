import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="relative bg-white dark:bg-black-tag h-screen flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: 'url(/assets/notfound.svg)',
        }}
      ></div>

      <div className="relative max-w-lg bg-opacity-70 p-8 rounded-lg shadow-lg text-center md:text-left">
        <h1 className="mb-4 text-7xl font-extrabold lg:text-9xl text-primary-600 dark:text-old-rose">
          404
        </h1>
        <p className="mb-4 text-3xl font-bold text-pearl-white md:text-4xl dark:text-cyan-neon">
          Something is missing.
        </p>
        <p className="mb-4 text-lg font-light text-pearl-white dark:text-gray-400">
          Sorry, we can't find that page. You will find lots to explore on the
          homepage.
        </p>

        <Link
          href="/"
          className="inline-block bg-old-rose text-pearl-white font-bold w-72 px-4 py-2 rounded-md hover:bg-black-tag transition-all"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
