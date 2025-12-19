"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* Mobile: Stack layout, Desktop: Grid */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">

          {/* ================= MAIN CONTENT ================= */}
          <section className="order-1 text-center lg:text-left space-y-6">
            
            {/* DLIMS Logo */}
            <div className="flex justify-center lg:justify-center">
              <Image
                src="/dlims-logo.png"
                alt="DLIMS"
                width={160}
                height={80}
                className="w-28 sm:w-36 lg:w-40"
                quality={100}
                priority
              />
            </div>

            {/* Government License Related Line */}
            <p className="text-sm sm:text-base text-gray-700 font-medium">
              Official Government Driving License Portal – Punjab
            </p>

            {/* CM Punjab & Government Punjab Logos (CENTERED) */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <div className="bg-white p-2 rounded-full shadow-md">
                <Image
                  src="/govt-logo.png"
                  alt="Government of Punjab"
                  width={80}
                  height={80}
                  className="w-14 sm:w-16"
                  quality={100}
                />
              </div>
              <div className="bg-white p-2 rounded-full shadow-md">
                <Image
                  src="/maryam.png"
                  alt="Chief Minister Punjab"
                  width={80}
                  height={80}
                  className="w-14 sm:w-16"
                  quality={100}
                />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Driving Licence Information Management System
            </h1>

            {/* Urdu Description */}
            <div className="bg-green-50 rounded-2xl p-5 sm:p-6 shadow-sm border border-green-100">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium" dir="rtl">
                گھر بیٹھے ڈرائیونگ لائسنس اپلائی کریں، بس فارم فل کریں اور باقی کام ہمارا نمائندہ کرے گا۔
              </p>
            </div>

            {/* Apply Button */}
            <Link href="/apply" className="block">
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-5 sm:py-6 rounded-full text-lg sm:text-xl lg:text-2xl font-bold shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 active:scale-95 transition-all duration-300">
                Apply Driving License Now
              </button>
            </Link>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="bg-white rounded-xl p-3 shadow-md text-center">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-xs text-gray-600" dir="rtl">دستیاب</div>
              </div>
              <div className="bg-white rounded-xl p-3 shadow-md text-center">
                <div className="text-2xl font-bold text-green-600">Fast</div>
                <div className="text-xs text-gray-600" dir="rtl">تیز</div>
              </div>
              <div className="bg-white rounded-xl p-3 shadow-md text-center">
                <div className="text-2xl font-bold text-green-600">Safe</div>
                <div className="text-xs text-gray-600" dir="rtl">محفوظ</div>
              </div>
            </div>

          </section>

          {/* ================= IMAGES SECTION ================= */}
          <section className="order-2 space-y-6">
            
            {/* Main Umbrella Image */}
            <div className="flex justify-center">
              <Image
                src="/umbrella.png"
                alt="DLIMS Services"
                width={450}
                height={600}
                className="w-72 sm:w-80 lg:w-96 drop-shadow-xl"
                quality={100}
                priority
              />
            </div>

            {/* Powered by Dastak */}
            <div className="text-center space-y-2">
              <div className="bg-green-700 text-white text-sm px-5 py-1.5 rounded-full inline-block">
                Powered by
              </div>
              <Image
                src="/dastak-logo.png"
                alt="Dastak"
                width={180}
                height={85}
                className="w-36 sm:w-40 mx-auto"
                quality={100}
              />
              <p className="text-sm text-gray-600">Doorstep Delivery of Services</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-10 lg:mt-12 space-y-2">
          <p className="text-sm text-gray-500">Copyright 2025 © Punjab Government</p>
          <Link href="/admin">
            <span className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer">Admin</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
