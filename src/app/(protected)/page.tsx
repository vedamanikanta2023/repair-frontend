import React from "react";

export default function HomePage(){
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Reliable Motor Repairs You Can Trust
          </h1>
          <p className="text-lg mb-6">
            Professional motor repair and maintenance services to keep your
            vehicle running smoothly.
          </p>
          <button className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition">
            Book a Service
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose SpeedFix Motors?</h2>
          <p className="text-gray-600 mb-10">
            At SpeedFix Motors, we combine technical expertise with genuine
            customer care. Our certified technicians ensure your motor gets the
            attention it deserves — quickly, efficiently, and affordably.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="font-semibold text-xl mb-2">Expert Technicians</h3>
              <p className="text-gray-600">
                Our team is trained to handle all types of motor and engine
                issues with precision and care.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="font-semibold text-xl mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">
                We value your time — that’s why we ensure quick service without
                compromising quality.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-semibold text-xl mb-2">Guaranteed Service</h3>
              <p className="text-gray-600">
                Every repair is backed by our satisfaction guarantee for peace
                of mind and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Engine Diagnostics",
                desc: "Advanced tools to detect and resolve engine issues efficiently.",
              },
              {
                title: "Electrical Repairs",
                desc: "From wiring to lighting, we fix all kinds of electrical problems.",
              },
              {
                title: "Oil & Filter Change",
                desc: "Regular oil changes that enhance your vehicle’s performance.",
              },
              {
                title: "Brake & Clutch Service",
                desc: "Ensure safety with our top-notch brake and clutch maintenance.",
              },
              {
                title: "Motor Rewinding",
                desc: "Reliable rewinding solutions to extend motor life.",
              },
              {
                title: "Preventive Maintenance",
                desc: "Scheduled checkups to prevent future breakdowns.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2 text-blue-700">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-700 text-white py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-gray-200">
            Need a quick fix or want to schedule a maintenance check? We’re just
            a call away.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href="tel:+918790785047"
              className="flex items-center gap-2 bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
            >
              ☎️ +91 8790785047
            </a>
            <a
              href="mailto:vedamanikanta.dali@gmail.com"
              className="flex items-center gap-2 border-2 border-white py-3 px-6 rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              📧 Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} SpeedFix Motors. All Rights Reserved.
      </footer>
    </div>
  );
};

