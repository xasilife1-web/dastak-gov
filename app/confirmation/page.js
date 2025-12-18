"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ConfirmationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const name = searchParams.get('name') || '';
  const cnic = searchParams.get('cnic') || '';
  const mobile = searchParams.get('mobile') || '';
  const district = searchParams.get('district') || '';
  const address = searchParams.get('address') || '';
  const category = searchParams.get('category') || 'Motor Cycle';
  const fee = searchParams.get('fee') || '5000';
  
  const confirmationCode = Math.floor(100000 + Math.random() * 900000);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-3 sm:p-6">
      <div className="max-w-2xl w-full">
        
        {/* Confirmation Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8">
          
          {/* Success Icon */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mb-3">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 break-words px-2" dir="rtl">
              {name} معزز
            </h1>
            <p className="text-sm sm:text-base text-green-600 font-semibold" dir="rtl">
              آپ کی درخواست کامیابی سے جمع ہو گئی
            </p>
          </div>

          {/* Applicant Details */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 text-right" dir="rtl">
              درخواست گزار کی تفصیلات:
            </h3>
            <div className="space-y-2 text-sm sm:text-base">
              <div className="flex justify-between items-center border-b pb-2 gap-2">
                <span className="text-gray-600 flex-shrink-0">CNIC:</span>
                <span className="font-semibold text-gray-900 break-all text-right">{cnic}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2 gap-2">
                <span className="text-gray-600 flex-shrink-0">Mobile:</span>
                <span className="font-semibold text-gray-900 break-all text-right">{mobile}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2 gap-2">
                <span className="text-gray-600 flex-shrink-0" dir="rtl">ضلع:</span>
                <span className="font-semibold text-gray-900 break-words text-right" dir="rtl">{district}</span>
              </div>
              <div className="flex justify-between items-start gap-2">
                <span className="text-gray-600 flex-shrink-0 pt-1" dir="rtl">پتہ:</span>
                <span className="font-semibold text-gray-900 text-right break-words" dir="rtl">{address}</span>
              </div>
            </div>
          </div>

          {/* License Details */}
          <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 text-right" dir="rtl">
              لائسنس کی تفصیلات:
            </h3>
            <div className="space-y-2 text-sm sm:text-base">
              <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                <span className="text-gray-700 font-semibold" dir="rtl">قسم:</span>
                <span className="text-gray-900 font-bold">{category}</span>
              </div>
              <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                <span className="text-gray-700 font-semibold" dir="rtl">فیس:</span>
                <span className="text-gray-900 font-bold text-lg sm:text-xl">{fee} روپے</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold" dir="rtl">مدت:</span>
                <span className="text-gray-900 font-bold">5 سال</span>
              </div>
            </div>
          </div>

          {/* Confirmation Code Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 text-center relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-transparent"></div>
            </div>
            
            <p className="relative text-white text-xs sm:text-sm mb-3 font-semibold uppercase tracking-wide" dir="rtl">
              آپ کا ٹوکن نمبر
            </p>
            <div className="relative text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-widest bg-white rounded-xl py-3 sm:py-4 mb-3 shadow-2xl border-4 border-green-800">
              {confirmationCode}
            </div>
            <p className="relative text-white text-xs sm:text-sm font-medium" dir="rtl">
              ⚠️ براہ کرم اپنا ٹوکن نمبر محفوظ رکھیں
            </p>
          </div>

          {/* Important Note */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm text-yellow-800 font-semibold" dir="rtl">
              ⚠️ اہم: اگلے مرحلے میں فیس ادا کریں
            </p>
          </div>

          {/* Pay Fee Button */}
          <button 
            onClick={() => router.push(`/payment?category=${encodeURIComponent(category)}&fee=${fee}`)}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 mb-3"
          >
            Pay Fee
          </button>

          {/* Back to Home */}
          <button
            onClick={() => router.push('/')}
            className="w-full text-gray-500 hover:text-gray-700 text-xs sm:text-sm font-semibold transition-colors"
          >
            واپس ہوم پیج پر جائیں
          </button>

        </div>

      </div>
    </main>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}