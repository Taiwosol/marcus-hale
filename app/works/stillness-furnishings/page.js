import Nav from "@/components/Nav";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function StillnessFurnishings() {
  return (
    <div className="flex flex-col">
      <Nav variant="dark" />

      {/* Hero section - Main image with title */}
      <section className="bg-white py-6 px-6 md:px-12">
        <div className="flex justify-between items-end mb-6">
          <h1 className="text-4xl md:text-7xl font-black uppercase">
            The Solace Chair
          </h1>
          <span className="text-xl md:text-3xl font-black">/2025</span>
        </div>
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src="/stillness-furnishings.png"
            alt="The Solace Chair"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Text section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <p className="text-xl md:text-3xl lg:text-4xl font-bold mb-12 max-w-3xl">
          The Solace Chair from Stillness Furnishings is an invitation to pause
          and find comfort. Its minimalist silhouette, crafted from premium
          materials, provides an elegant yet understated presence in any room.
        </p>
        <div className="flex flex-col gap-4 text-xl md:text-2xl font-medium">
          <p>The Solace Chair</p>
          <p>2025</p>
          <p>Branding</p>
          <p>Director</p>
        </div>
      </section>

      {/* Gallery section - images 01-04 */}
      <section className="bg-white py-6 px-6 md:px-12">
        <div className="aspect-[16/9] relative overflow-hidden mb-6">
          <Image
            src="/stillness-furnishings-01.jpg"
            alt="Stillness Furnishings 01"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src="/stillness-furnishings-02.jpg"
              alt="Stillness Furnishings 02"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src="/stillness-furnishings-03.jpg"
              alt="Stillness Furnishings 03"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="aspect-[16/9] relative overflow-hidden mt-6">
          <Image
            src="/stillness-furnishings-04.jpg"
            alt="Stillness Furnishings 04"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
