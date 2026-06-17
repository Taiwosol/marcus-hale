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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
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
          A forward-thinking agency that places a strong emphasis on strategic
          planning and execution, ensuring that every decision is aligned with
          our clients' long-term goals and objectives.
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

      {/* Services list section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <div className="space-y-12">
          {/* Branding */}
          <Link
            href="/services/branding"
            className="block cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-start relative z-20 p-4 -m-4">
              <div className="space-y-4 h-[60vh] flex flex-col justify-between">
                <div className="flex-1 w-full relative overflow-hidden">
                  <Image
                    src="/branding-07.jpg"
                    alt="Branding"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-500 opacity-100 group-hover:opacity-0"
                  />
                  <Image
                    src="/branding-06.png"
                    alt="Branding Hover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-500 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase transition-colors duration-500 group-hover:text-white">
                  Branding
                </h2>
              </div>
              <div className="flex flex-col justify-between h-auto md:h-[60vh]">
                <p className="text-xl md:text-2xl font-normal text-gray-500 transition-colors duration-500 group-hover:text-white mb-4 md:mb-0">
                  {`{Description}`}
                </p>
                <p className="text-xl md:text-2xl font-normal transition-colors duration-500 group-hover:text-white">
                  Meet Nova Brand Solutions—a cutting-edge branding agency that
                  redefines your business identity. Our creative strategies and
                  skilled professionals craft distinctive brand experiences that
                  connect with your audience. From new ventures to seasoned
                  enterprises, we customize our offerings to boost your brand's
                  presence and influence.
                </p>
              </div>
            </div>
          </Link>

          {/* Development */}
          <Link
            href="/services/development"
            className="block cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-start relative z-20 p-4 -m-4">
              <div className="space-y-4 h-[60vh] flex flex-col justify-between">
                <div className="flex-1 w-full relative overflow-hidden">
                  <Image
                    src="/development-07.png"
                    alt="Development"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-500 opacity-100 group-hover:opacity-0"
                  />
                  <Image
                    src="/development-06.png"
                    alt="Development Hover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-500 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase transition-colors duration-500 group-hover:text-white">
                  Development
                </h2>
              </div>
              <div className="flex flex-col justify-between h-auto md:h-[60vh]">
                <p className="text-xl md:text-2xl font-normal text-gray-500 transition-colors duration-500 group-hover:text-white mb-4 md:mb-0">
                  {`{Description}`}
                </p>
                <p className="text-xl md:text-2xl font-normal transition-colors duration-500 group-hover:text-white">
                  Meet Marcus Hale—a groundbreaking branding service that
                  redefines your business identity. Our creative methods and
                  skilled team develop distinctive brand strategies that connect
                  with your audience.
                </p>
              </div>
            </div>
          </Link>

          {/* Product Design */}
          <Link
            href="/services/product-design"
            className="block cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-start relative z-20 p-4 -m-4">
              <div className="space-y-4 h-[60vh] flex flex-col justify-between">
                <div className="flex-1 w-full relative overflow-hidden">
                  <Image
                    src="/product-design-07.png"
                    alt="Product Design"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-500 opacity-100 group-hover:opacity-0"
                  />
                  <Image
                    src="/product-design-06.png"
                    alt="Product Design Hover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-500 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase transition-colors duration-500 group-hover:text-white">
                  Product Design
                </h2>
              </div>
              <div className="flex flex-col justify-between h-auto md:h-[60vh]">
                <p className="text-xl md:text-2xl font-normal text-gray-500 transition-colors duration-500 group-hover:text-white mb-4 md:mb-0">
                  {`{Description}`}
                </p>
                <p className="text-xl md:text-2xl font-normal transition-colors duration-500 group-hover:text-white">
                  Meet MarcusHale — a revolutionary service that transforms your
                  product's identity. Our creative approach and skilled team
                  craft distinctive design strategies tailored to connect with
                  your audience. Whether you're debuting a new product or
                  refining an existing one, we personalize our offerings to
                  boost your product's attractiveness and functionality.
                </p>
              </div>
            </div>
          </Link>

          {/* Framer */}
          <Link
            href="/services/framer"
            className="block cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-start relative z-20 p-4 -m-4">
              <div className="space-y-4 h-[60vh] flex flex-col justify-between">
                <div className="flex-1 w-full relative overflow-hidden">
                  <Image
                    src="/framer-07.png"
                    alt="Framer"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-500 opacity-100 group-hover:opacity-0"
                  />
                  <Image
                    src="/framer-06.png"
                    alt="Framer Hover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-500 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase transition-colors duration-500 group-hover:text-white">
                  Framer
                </h2>
              </div>
              <div className="flex flex-col justify-between h-auto md:h-[60vh]">
                <p className="text-xl md:text-2xl font-normal text-gray-500 transition-colors duration-500 group-hover:text-white mb-4 md:mb-0">
                  {`{Description}`}
                </p>
                <p className="text-xl md:text-2xl font-normal transition-colors duration-500 group-hover:text-white">
                  Meet Framer Innovations—a state-of-the-art development agency
                  that transforms your online identity. Our creative solutions
                  and expert developers create tailored web experiences that
                  resonate with your users. From startups to established brands,
                  we adapt our services to enhance your digital footprint and
                  effectiveness.
                </p>
              </div>
            </div>
          </Link>
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
