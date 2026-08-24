const stats = [
  { value: "12K+", label: "Happy travelers" },
  { value: "250+", label: "Curated travel packages" },
  { value: "40+", label: "Popular destinations" },
  { value: "24/7", label: "Customer support" },
];

export default function AboutStats() {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.5rem] bg-white p-6 text-center shadow-sm ring-1 ring-gray-100"
          >
            <h3 className="text-3xl font-bold text-blue-700">{stat.value}</h3>
            <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}