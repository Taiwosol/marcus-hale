import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function FormaDecor() {
  return (
    <div className="flex flex-col">
      <Nav variant="dark" />

      {/* Hero section - Main image with title */}
      <section className="bg-white py-6 px-6 md:px-12">
        <div className="flex justify-between items-end mb-6">
          <h1 className="text-4xl md:text-7xl font-black uppercase">
            The Aura Vase
          </h1>
          <span className="text-xl md:text-3xl font-black">/2025</span>
        </div>
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src="/forma-decor.png"
            alt="The Aura Vase"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Text section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <p className="text-xl md:text-3xl lg:text-4xl font-bold mb-12 max-w-3xl">
          The Aura Vase from Forma Decor represents a fusion of organic
          simplicity and refined craftsmanship. Designed to bring a touch of
          serene elegance to any space, its matte finish and subtle form invite
          quiet contemplation.
        </p>
        <div className="flex flex-col gap-4 text-xl md:text-2xl font-medium">
          <p>The Aura Vase</p>
          <p>2025</p>
          <p>Development</p>
          <p>CTO</p>
        </div>
      </section>

      {/* Gallery section - images 01-04 */}
      <section className="bg-white py-6 px-6 md:px-12">
        <div className="aspect-[16/9] relative overflow-hidden mb-6">
          <Image
            src="/forma-decor-01.jpg"
            alt="Forma Decor 01"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src="/forma-decor-02.jpg"
              alt="Forma Decor 02"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src="/forma-decor-03.jpg"
              alt="Forma Decor 03"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="aspect-[16/9] relative overflow-hidden mt-6">
          <Image
            src="/forma-decor-04.jpg"
            alt="Forma Decor 04"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Next Project section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-normal mb-8">Next Project</h2>
        <Link href="/works/effortless-goods" className="group">
          <div className="aspect-[16/9] relative overflow-hidden mb-4">
            <Image
              src="/effortless-goods.png"
              alt="The Voyager Tote"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">THE VOYAGER TOTE</p>
            <p className="text-xl font-medium">/2024</p>
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
