"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-3 sm:p-6">
      <div className="max-w-md w-full text-center px-4">
        
        {/* Loading Spinner */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-green-500 rounded-full border-t-transparent animate-spin"></div>
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4" dir="rtl">
            براہ مہربانی انتظار کریں...
          </h1>
          
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" dir="rtl">
            آپ کی معلومات اور آپ کی رقم کی تصدیق کی جا رہی ہے۔
          </p>

          {/* Progress Indicator */}
          <div className="mt-6 sm:mt-8">
            <div className="flex justify-center gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
            </div>
          </div>
        </div>

        {/* Info Text */}
        <p className="text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6" dir="rtl">
          آپ خودکار طور پر ہوم پیج پر منتقل ہو جائیں گے
        </p>

      </div>
    </main>
  );
}