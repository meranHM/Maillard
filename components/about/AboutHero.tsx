


const AboutHero = () => {
  return (
    <section className="widthLimit relative flex min-h-[80vh] items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Optional background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-indigo-100" />
      
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Your Headline Here
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
          Supporting text that explains your value proposition
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            Get Started
          </button>
          <button className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutHero