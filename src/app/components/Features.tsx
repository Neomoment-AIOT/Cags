// app/components/Features.tsx

// In a real app, this data would come from your database or an external API.
// We are creating an async function to simulate a network request.
async function getFeatures() {
  // Simulate a network delay of 1 second to show server-side loading in action.
  await new Promise(resolve => setTimeout(resolve, 1000));

  const featuresData = [
    {
      id: 1,
      title: "Server-Side Rendering (SSR)",
      description: "Pages are rendered on the server, providing better performance and making your app SEO-friendly right out of the box."
    },
    {
      id: 2,
      title: "Static Site Generation (SSG)",
      description: "Pre-render pages at build time for instant loading. Perfect for blogs, portfolios, and marketing sites."
    },
    {
      id: 3,
      title: "File-based Routing",
      description: "Simply create files and folders within the 'app' directory to define your application's routes intuitively."
    }
  ];

  return featuresData;
}


// This is a Server Component, so we can make the function async and await data.
export default async function Features() {
  const features = await getFeatures();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Explore Our Awesome <span className="text-blue-500">Features</span>
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
          Discover the powerful capabilities that make Next.js the preferred framework for building modern, high-performance web applications.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.id} className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl hover:shadow-xl transition-shadow">
              {/* You can add an icon here if you'd like */}
              <h3 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}