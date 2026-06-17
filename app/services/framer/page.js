import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";

export default function Framer() {
  return (
    <div className="flex flex-col">
      <Nav variant="dark" />

      {/* Hero text section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <h1 className="text-4xl md:text-7xl font-black uppercase mb-6">
          Framer
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl font-normal max-w-3xl">
          Introducing Framer Development Services—a groundbreaking solution that
          elevates your digital presence.
        </p>
      </section>

      {/* Gallery section - images 01-07 */}
      <section className="bg-white px-6 md:px-12">
        {/* Image 01 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/framer-01.png"
            alt="Framer 01"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 02 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/framer-02.png"
            alt="Framer 02"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 03 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/framer-03.png"
            alt="Framer 03"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 04 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/framer-04.png"
            alt="Framer 04"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 05 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/framer-05.png"
            alt="Framer 05"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 06 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/framer-06.png"
            alt="Framer 06"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Text before 7th image - right-aligned, bolder, smaller */}
        <section className="bg-white py-12">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium max-w-4xl ml-auto">
            Meet Framer Innovations—a state-of-the-art development agency that
            transforms your online identity. Our creative solutions and expert
            developers create tailored web experiences that resonate with your
            users. From startups to established brands, we adapt our services to
            enhance your digital footprint and effectiveness.
          </p>
        </section>
        {/* Image 07 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/framer-07.png"
            alt="Framer 07"
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
            <Link href="/services/branding" className="group">
              <div className="w-full h-[70vh] relative overflow-hidden">
                <Image
                  src="/branding-07.jpg"
                  alt="Branding"
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
