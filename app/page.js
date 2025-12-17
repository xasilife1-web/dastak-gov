import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center">
      
      {/* Responsive Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
        
        {/* Grid Layout - Mobile: Stack, Tablet/Laptop/Desktop: Side by side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-16 items-center">

          {/* ================= LEFT SECTION ================= */}
          <section className="flex flex-col items-center gap-4 lg:gap-6 order-2 md:order-1">
            {/* Powered By Badge */}
            <div className="bg-green-700 text-white text-xs sm:text-sm px-5 py-2 rounded-full shadow-lg">
              Powered by
            </div>

            {/* Dastak Logo */}
            <div className="transform hover:scale-110 transition-transform duration-300">
              <Image
                src="/dastak-logo.png"
                alt="Dastak Logo"
                width={180}
                height={80}
                className="object-contain w-40 sm:w-44 lg:w-48"
                priority
              />
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-gray-600 text-center font-medium mt-2">
              Doorstep Delivery of Services
            </p>
          </section>

          {/* ================= CENTER SECTION ================= */}
          <section className="flex justify-center items-center order-1 md:order-2 relative py-6 md:py-0">
            {/* Top Gradient Fade */}
            <div className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-b from-green-50 via-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Umbrella Image */}
            <div className="relative transform hover:scale-105 transition-transform duration-500 ease-out">
              <Image
                src="/umbrella.png"
                alt="Services Illustration"
                width={300}
                height={400}
                className="object-contain drop-shadow-2xl w-64 sm:w-72 md:w-80 lg:w-96"
                priority
              />
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-green-50 via-white to-transparent z-10 pointer-events-none"></div>
          </section>

          {/* ================= RIGHT SECTION ================= */}
          <section className="flex flex-col gap-4 lg:gap-6 text-center md:text-left order-3 px-2 sm:px-4 md:px-0">
            
            {/* DLIMS Logo */}
            <div className="flex justify-center md:justify-start mb-2">
              <Image
                src="/dlims-logo.png"
                alt="DLIMS Logo"
                width={140}
                height={70}
                className="object-contain w-32 sm:w-36 lg:w-40"
                priority
              />
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Driving Licence Information Management System
            </h1>

            {/* Urdu Description */}
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700" dir="rtl">
              گھر بیٹھے ڈرائیونگ لائسنس اپلائی کریں، بس فارم فل کریں اور باقی کام ہمارا نمائندہ کرے گا۔
            </p>

            {/* CTA Button with Smooth Animation */}
            <Link href="/apply" className="block mt-2">
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 lg:py-5 rounded-full text-base sm:text-lg lg:text-xl font-bold transition-all duration-300 ease-out shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95">
                Apply Driving License Now
              </button>
            </Link>

            {/* Footer */}
            <div className="mt-4 space-y-2">
              <span className="text-xs sm:text-sm text-gray-500 block">
                Copyright 2025 ©
              </span>

              {/* Admin Link */}
              <Link href="/admin">
                <span className="text-xs text-gray-400 hover:text-gray-600 transition-colors cursor-pointer inline-block">
                  Admin Panel
                </span>
              </Link>
            </div>
          </section>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-20 -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-40 h-40 bg-green-300 rounded-full blur-3xl opacity-20 -z-10 pointer-events-none"></div>

    </main>
  );
}