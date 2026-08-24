const points = [
  {
    title: "Curated travel choices",
    text: "We focus on experiences, routes, and stays that offer both value and quality.",
  },
  {
    title: "Clear and simple planning",
    text: "Our platform is designed to make discovery and decision-making faster and easier.",
  },
  {
    title: "Support you can trust",
    text: "We aim to provide dependable service that helps travelers feel confident at every step.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mt-10">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Why choose us
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">
          Travel made more personal, practical, and inspiring
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {points.map((point) => (
          <article
            key={point.title}
            className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-900">{point.title}</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">{point.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}