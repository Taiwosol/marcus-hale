import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="flex flex-col">
      <Nav variant="dark" />

      {/* Hero section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="text-2xl md:text-3xl font-normal">— Services</div>
          <div className="flex-1 max-w-4xl">
            <p className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight">
              Services That Make an
              <br />
              Impact Beyond Expectations.
            </p>
          </div>
          </div>
      </section>

      {/* Services introduction */}
      <section className="bg-white py-12 px-6 md:px-12">
        <p className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-4xl">
          A forward-thinking agency that places a strong emphasis on strategic planning and execution, ensuring that every decision is aligned with our clients' long-term goals and objectives.
        </p>
      </section>

      {/* Services image section */}
      <section className="bg-white px-6 md:px-12">
        <div className="w-full h-[70vh] md:h-[85vh] relative">
          <Image
            src="/services-img.jpg"
            alt="Services"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Logos section */}
      <section className="bg-white py-12 px-6 md:px-12">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-normal">
            Reliable design collaborator
            <br />
            for top-tier brands
          </h2>
        </div>

        {/* Logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-gray-200">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
            <div
              key={num}
              className="border border-gray-200 p-8 flex items-center justify-center"
            >
              <Image
                src={`/logo-ipsum-${num.toString().padStart(2, "0")}.png`}
                alt={`Client logo ${num}`}
                width={160}
                height={80}
                className="object-contain opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
