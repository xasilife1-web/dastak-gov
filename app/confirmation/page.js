"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ConfirmationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const name = searchParams.get('name') || 'ffffff';
  const category = searchParams.get('category') || 'Motor Cycle';
  const fee = searchParams.get('fee') || '5000';
  
  const confirmationCode = Math.floor(100000 + Math.random() * 900000);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-3 sm:p-6">
      <div className="max-w-md w-full">
        
        {/* Confirmation Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 text-center">
          
          {/* Name Display */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8" dir="rtl">
            {name} معزز
          </h1>

          {/* License Details */}
          <div className="space-y-3 mb-6 text-right" dir="rtl">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-semibold text-gray-700 text-sm sm:text-base">لائسنس ٹائپ:</span>
              <span className="text-gray-900 font-bold text-sm sm:text-base">{category}</span>
            </div>
            
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-semibold text-gray-700 text-sm sm:text-base">فیس:</span>
              <span className="text-gray-900 font-bold text-sm sm:text-base">{fee} روپے</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700 text-sm sm:text-base">مدت:</span>
              <span className="text-gray-900 font-bold text-sm sm:text-base">5 سال</span>
            </div>
          </div>

          {/* Confirmation Code Section */}
          <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 mb-6">
            <p className="text-gray-600 text-xs sm:text-sm mb-2" dir="rtl">
              آپ کا ٹوکن نمبر:
            </p>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-600 tracking-wider">
              {confirmationCode}
            </div>
          </div>

          {/* Pay Fee Button */}
          <button 
            onClick={() => router.push(`/payment?category=${encodeURIComponent(category)}&fee=${fee}`)}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 mb-4"
          >
            Pay Fee
          </button>

          {/* Back to Home */}
          <button
            onClick={() => router.push('/')}
            className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm font-semibold"
          >
            واپس ہوم پیج پر جائیں
          </button>

        </div>

        {/* Info Text */}
        <p className="text-center text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6" dir="rtl">
          براہ کرم اپنا ٹوکن نمبر محفوظ رکھیں
        </p>

      </div>
    </main>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}