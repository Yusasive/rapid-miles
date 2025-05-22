
const services = [
  {
    icon: "📋",
    title: "Pick-up",
    description:
      "Reliable and timely collection of your packages from any location. Our professional team ensures safe handling and secure pickup of your items with real-time confirmation.",
  },
  {
    icon: "🚚",
    title: "Delivery",
    description:
      "Fast and secure delivery services to get your packages to their destination safely. We offer flexible delivery options with tracking and confirmation updates.",
  },
  {
    icon: "🏠",
    title: "Last Mile Delivery",
    description:
      "Door-to-door delivery service ensuring your packages reach the final destination. We specialize in residential and business deliveries with customer satisfaction guarantee.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#f5f9ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-[#007f8c] mt-2">
            From first mile to last mile, we&apos;ve got your supply chain
            covered
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-10 rounded-2xl text-center border border-[#f5f9ff] hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-2xl bg-gradient-to-br from-blue-600 to-blue-800">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-[#007f8c] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
