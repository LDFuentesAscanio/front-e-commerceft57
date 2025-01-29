import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="relative bg-white dark:bg-black-tag h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url(/assets/notfound.svg)',
        }}
      ></div>
      <div className="relative h-full flex items-center justify-start p-8">
        <div className="max-w-lg bg-opacity-70 p-8 rounded-lg shadow-lg text-left">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-old-rose">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-pearl-white md:text-4xl dark:text-cyan-neon">
            Something is missing.
          </p>
          <p className="mb-4 text-lg font-light text-pearl-white dark:text-gray-400 bg-blue-deep">
            Sorry, we can not find that page. You will find lots to explore on
            the home page.
          </p>
          <button className="bg-old-rose text-pearl-white font-bold w-72 px-4 py-2 rounded-md hover:bg-black-tag">
            <Link href="/">Back to Homepage</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
