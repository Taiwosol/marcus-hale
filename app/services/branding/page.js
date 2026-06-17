import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";

export default function Branding() {
  return (
    <div className="flex flex-col">
      <Nav variant="dark" />

      {/* Hero text section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <h1 className="text-4xl md:text-7xl font-black uppercase mb-6">
          Branding
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl font-normal max-w-3xl">
          Introducing MarcusHale—a revolutionary branding service that
          transforms your business identity.
        </p>
      </section>

      {/* Gallery section - images 01-07 */}
      <section className="bg-white px-6 md:px-12">
        {/* Image 01 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/branding-01.png"
            alt="Branding 01"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 02 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/branding-02.png"
            alt="Branding 02"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 03 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/branding-03.png"
            alt="Branding 03"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 04 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/branding-04.png"
            alt="Branding 04"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 05 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/branding-05.png"
            alt="Branding 05"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 06 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/branding-06.png"
            alt="Branding 06"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Text before 7th image - right-aligned, bolder, smaller */}
        <section className="bg-white py-12">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium max-w-4xl ml-auto">
            Meet Nova Brand Solutions—a cutting-edge branding agency that redefines your business identity. Our creative strategies and skilled professionals craft distinctive brand experiences that connect with your audience. From new ventures to seasoned enterprises, we customize our offerings to boost your brand's presence and influence.
          </p>
        </section>
        {/* Image 07 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/branding-07.jpg"
            alt="Branding 07"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Next Services section - text bold, image full 75% width */}
      <section className="bg-white py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
          <h2 className="text-2xl md:text-3xl font-bold">Next Services</h2>
          <div className="w-full">
            <Link href="/services/development" className="group">
              <div className="w-full h-[70vh] relative overflow-hidden">
                <Image
                  src="/development-07.png"
                  alt="Development"
                  fill
                  sizes="(max-width: 768px) 100vw, 75vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
