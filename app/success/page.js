"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const name = searchParams.get('name') || '';
    const cnic = searchParams.get('cnic') || '';
    const amount = searchParams.get('amount') || '5000';
    const tid = searchParams.get('tid') || 'N/A';

    // Countdown timer
    const countdownTimer = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    // Redirect after 5 seconds
    const redirectTimer = setTimeout(() => {
      router.push(
        `/final-sucess?name=${encodeURIComponent(name)}&cnic=${encodeURIComponent(cnic)}&amount=${encodeURIComponent(amount)}&tid=${encodeURIComponent(tid)}`
      );
    }, 5000);

    return () => {
      clearInterval(countdownTimer);
      clearTimeout(redirectTimer);
    };
  }, [router, searchParams]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-3 sm:p-6">
      <div className="max-w-md w-full text-center px-4">
        
        {/* Loading Spinner */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-green-500 rounded-full border-t-transparent animate-spin"></div>
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mb-4">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4" dir="rtl">
            براہ مہربانی انتظار کریں...
          </h1>
          
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" dir="rtl">
            آپ کی معلومات اور آپ کی رقم کی تصدیق کی جا رہی ہے۔
          </p>

          {/* Countdown Indicator */}
          <p className="text-green-600 font-bold mt-4" dir="rtl">
            اگلے صفحے پر ری ڈائریکٹ میں: {countdown} سیکنڈ
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
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
