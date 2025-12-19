"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";

function ConfirmationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "";
  const cnic = searchParams.get("cnic") || "";
  const mobile = searchParams.get("mobile") || "";
  const district = searchParams.get("district") || "";
  const address = searchParams.get("address") || "";
  const category = searchParams.get("category") || "Motor Cycle";
  const fee = searchParams.get("fee") || "5000";

  const confirmationCode = useMemo(
    () => Math.floor(100000 + Math.random() * 900000),
    []
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-3 sm:p-6">
      <div className="max-w-2xl w-full">

        {/* Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-gray-900" dir="rtl">
              {name} معزز
            </h1>

            <p className="text-green-600 font-semibold mt-1" dir="rtl">
              آپ کی درخواست کامیابی سے جمع ہو گئی
            </p>
          </div>

          {/* Applicant Details */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6" dir="rtl">
            <h3 className="font-bold text-gray-900 mb-3 text-right">
              درخواست گزار کی تفصیلات:
            </h3>

            <div className="space-y-2 text-sm sm:text-base">

              <Detail label="شناختی کارڈ" value={cnic} />
              <Detail label="موبائل نمبر" value={mobile} />
              <Detail label="ضلع" value={district} />
              <Detail label="پتہ" value={address} isAddress />

            </div>
          </div>

          {/* License Details */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6" dir="rtl">
            <h3 className="font-bold text-gray-900 mb-3 text-right">
              لائسنس کی تفصیلات:
            </h3>

            <div className="space-y-2 text-sm sm:text-base">
              <Row label="قسم" value={category} />
              <Row label="فیس" value={`${fee} روپے`} bold />
              <Row label="مدت" value="5 سال" />
            </div>
          </div>

          {/* Token */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-5 text-center mb-6">
            <p className="text-white text-sm font-semibold mb-2" dir="rtl">
              آپ کا ٹوکن نمبر
            </p>

            <div className="bg-white text-gray-900 font-black text-4xl tracking-widest rounded-xl py-3 border-4 border-green-800">
              {confirmationCode}
            </div>

            <p className="text-white text-xs mt-2" dir="rtl">
              ⚠️ براہ کرم ٹوکن نمبر محفوظ رکھیں
            </p>
          </div>

          {/* Warning */}
          <div className="bg-yellow-50 border-r-4 border-yellow-400 p-3 mb-6" dir="rtl">
            <p className="text-yellow-800 font-semibold text-sm">
              ⚠️ اگلے مرحلے میں فیس ادا کریں
            </p>
          </div>

          {/* Buttons */}
          <button
            onClick={() =>
              router.push(
                `/payment?name=${encodeURIComponent(name)}&category=${encodeURIComponent(
                  category
                )}&fee=${fee}`
              )
            }
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-bold text-lg mb-3 transition"
          >
            فیس ادا کریں
          </button>

          <button
            onClick={() => router.push("/")}
            className="w-full text-gray-500 hover:text-gray-700 text-sm font-semibold"
          >
            واپس ہوم پیج پر جائیں
          </button>

        </div>
      </div>
    </main>
  );
}

/* ===== Reusable Components ===== */

function Detail({ label, value, isAddress }) {
  return (
    <div className="grid grid-cols-3 gap-2 border-b pb-2 last:border-b-0">
      <span className="text-gray-600 font-semibold text-right">
        {label}:
      </span>
      <span
        className={`col-span-2 text-left font-semibold text-gray-900 ${
          isAddress ? "break-words" : "break-all"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className="grid grid-cols-3 gap-2 border-b border-blue-200 pb-2 last:border-b-0">
      <span className="text-gray-700 font-semibold text-right">
        {label}:
      </span>
      <span className={`col-span-2 text-left ${bold ? "font-bold text-lg" : "font-semibold"}`}>
        {value}
      </span>
    </div>
  );
}

/* ===== Page Wrapper ===== */

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-b-2 border-green-600 rounded-full"></div>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}
