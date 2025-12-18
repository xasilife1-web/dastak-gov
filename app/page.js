"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white relative overflow-hidden">
      
      {/* Animated Background Decorations */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-green-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72 bg-emerald-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 lg:w-[32rem] h-64 sm:h-96 lg:h-[32rem] bg-green-200 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center py-6 sm:py-10 lg:py-16 px-3 sm:px-6 lg:px-12">
        
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Grid Layout - Mobile: Stack, Desktop: 3 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-16 items-center">

            {/* ================= LEFT SECTION ================= */}
            <section className="flex flex-col items-center gap-3 sm:gap-5 order-2 lg:order-1">
              
              {/* Powered By Badge with Animation */}
              <div className="bg-gradient-to-r from-green-700 to-green-800 text-white text-xs sm:text-sm px-5 sm:px-6 py-2 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-default">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-ping"></span>
                  Powered by
                </span>
              </div>

              {/* Dastak Logo with Glow Effect */}
              <div className="relative group">
                <div className="absolute inset-0 bg-green-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative transform hover:scale-110 transition-transform duration-500">
                  <Image
                    src="/dastak-logo.png"
                    alt="Dastak Logo"
                    width={280}
                    height={130}
                    className="object-contain w-36 sm:w-44 lg:w-52 drop-shadow-2xl"
                    quality={100}
                    priority
                  />
                </div>
              </div>

              {/* Tagline */}
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 text-center font-semibold tracking-wide">
                Doorstep Delivery of Services
              </p>

              {/* Government Logos with Hover Effect */}
              <div className="flex items-center gap-4 sm:gap-5 mt-3">
                {/* Punjab Government Logo */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative transform hover:scale-125 transition-all duration-300 bg-white p-2 rounded-full shadow-lg">
                    <Image
                      src="/govt-logo.png"
                      alt="Punjab Government"
                      width={120}
                      height={120}
                      className="object-contain w-14 sm:w-18 lg:w-22"
                      quality={100}
                      priority
                    />
                  </div>
                </div>
                
                {/* Maryam Nawaz Logo */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative transform hover:scale-125 transition-all duration-300 bg-white p-2 rounded-full shadow-lg">
                    <Image
                      src="/maryam.png"
                      alt="Chief Minister Maryam Nawaz"
                      width={120}
                      height={120}
                      className="object-contain w-14 sm:w-18 lg:w-22"
                      quality={100}
                      priority
                    />
                  </div>
                </div>
              </div>
              
            </section>

            {/* ================= CENTER SECTION ================= */}
            <section className="flex justify-center items-center order-1 lg:order-2 relative py-6 sm:py-8">
              
              {/* Top Gradient Fade */}
              <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-b from-green-50 via-emerald-50 to-transparent z-10 pointer-events-none"></div>
              
              {/* Umbrella Image with Enhanced Shadow */}
              <div className="relative">
                {/* Glow Effect Behind Umbrella */}
                <div className="absolute inset-0 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full blur-3xl opacity-20 scale-75"></div>
                
                {/* Main Image */}
                <div className="relative transform hover:scale-105 hover:rotate-2 transition-all duration-700 ease-out">
                  <Image
                    src="/umbrella.png"
                    alt="DLIMS Services"
                    width={500}
                    height={700}
                    className="object-contain drop-shadow-2xl w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem]"
                    quality={100}
                    priority
                  />
                </div>
                
                {/* Floating Animation Dots */}
                <div className="absolute top-10 left-10 w-4 h-4 bg-green-500 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute bottom-20 right-10 w-3 h-3 bg-emerald-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
              </div>

              {/* Bottom Gradient Fade */}
              <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-white via-emerald-50 to-transparent z-10 pointer-events-none"></div>
              
            </section>

            {/* ================= RIGHT SECTION ================= */}
            <section className="flex flex-col gap-4 sm:gap-5 lg:gap-7 text-center lg:text-left order-3 px-2 sm:px-4 lg:px-0">
              
              {/* DLIMS Logo */}
              <div className="flex justify-center lg:justify-start mb-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-green-500 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <Image
                    src="/dlims-logo.png"
                    alt="DLIMS Logo"
                    width={220}
                    height={110}
                    className="object-contain w-32 sm:w-36 lg:w-44 xl:w-48 drop-shadow-xl"
                    quality={100}
                    priority
                  />
                </div>
              </div>

              {/* Title with Gradient */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 leading-tight">
                Driving Licence Information Management System
              </h1>

              {/* Urdu Description with Enhanced Style */}
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-lg border border-green-100">
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-800 font-medium" dir="rtl">
                  گھر بیٹھے ڈرائیونگ لائسنس اپلائی کریں، بس فارم فل کریں اور باقی کام ہمارا نمائندہ کرے گا۔
                </p>
              </div>

              {/* Stats/Features Cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-2">
                <div className="bg-white rounded-xl p-2 sm:p-3 shadow-md text-center border border-green-100">
                  <div className="text-lg sm:text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-xs text-gray-600" dir="rtl">دستیاب</div>
                </div>
                <div className="bg-white rounded-xl p-2 sm:p-3 shadow-md text-center border border-green-100">
                  <div className="text-lg sm:text-2xl font-bold text-green-600">100%</div>
                  <div className="text-xs text-gray-600" dir="rtl">محفوظ</div>
                </div>
                <div className="bg-white rounded-xl p-2 sm:p-3 shadow-md text-center border border-green-100">
                  <div className="text-lg sm:text-2xl font-bold text-green-600">Fast</div>
                  <div className="text-xs text-gray-600" dir="rtl">تیز</div>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/apply" className="block mt-2">
                <button className="group relative w-full bg-gradient-to-r from-green-600 via-green-700 to-green-600 hover:from-green-700 hover:via-green-800 hover:to-green-700 text-white px-6 sm:px-8 py-4 sm:py-5 lg:py-6 rounded-full text-base sm:text-lg lg:text-xl xl:text-2xl font-bold transition-all duration-500 shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 active:scale-95 overflow-hidden">
                  {/* Shine Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  
                  {/* Button Text */}
                  <span className="relative flex items-center justify-center gap-2">
                    Apply Driving License Now
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>

              {/* Footer */}
              <div className="mt-3 space-y-2 text-center lg:text-left">
                <span className="text-xs sm:text-sm text-gray-500 block">
                  Copyright 2025 © Punjab Government
                </span>

                {/* Admin Link */}
                <Link href="/admin">
                  <span className="text-xs text-gray-400 hover:text-gray-600 transition-colors cursor-pointer inline-block opacity-50 hover:opacity-100">
                    Admin
                  </span>
                </Link>
              </div>
              
            </section>

          </div>
        </div>

      </div>

    </main>
  );
}
