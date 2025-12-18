"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function PaymentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "Motor Cycle";
  const fee = searchParams.get("fee") || "5000";

  const [timeLeft, setTimeLeft] = useState(29 * 60 + 25);
  const [tidNumber, setTidNumber] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [accountName, setAccountName] = useState("Jazzcash – SHAMEEM");
  const [accountNumber, setAccountNumber] = useState("03259125102");
  const [loading, setLoading] = useState(false);

  // Load account details from localStorage
  useEffect(() => {
    const name = localStorage.getItem("jazzcashName") || "Jazzcash – SHAMEEM";
    const number = localStorage.getItem("jazzcashNumber") || "03259125102";
    setAccountName(name);
    setAccountNumber(number);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setScreenshot(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tidNumber) return alert("براہ کرم TID نمبر درج کریں");
    if (!screenshot) return alert("براہ کرم اسکرین شاٹ اپلوڈ کریں");

    setLoading(true);
    setTimeout(() => {
      router.push("/success");
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-4 sm:py-8 px-3 sm:px-6 relative">
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
          <div className="text-green-600 text-xl sm:text-2xl font-bold">
            Processing Payment...
          </div>
        </div>
      )}

      <div className="max-w-2xl mx-auto">
        {/* Timer */}
        <div className="bg-pink-50 border-2 border-pink-400 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 text-center">
          <p className="text-gray-700 text-xs sm:text-sm mb-1" dir="rtl">
            ٹوکن کینسل ہونے کا وقت
          </p>
          <div className="text-3xl sm:text-4xl font-bold text-pink-600 bg-white rounded-lg py-2 shadow-inner">
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Payment Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
            فیس کی ادائیگی
          </h2>

          {/* Bank Details */}
          <div className="bg-pink-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 text-center">
            <p className="text-gray-700 font-semibold text-sm sm:text-base break-words">
              {accountName}
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-pink-600 break-all">
              {accountNumber}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1" dir="rtl">
              اکاؤنٹ نمبر کاپی کریں
            </p>
          </div>

          {/* Amount */}
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-gray-700 mb-2 text-sm sm:text-base" dir="rtl">
              کل واجب الادا رقم ({category}):
            </p>
            <div className="text-4xl sm:text-5xl font-bold text-red-600">
              {fee}
              <span className="text-xl sm:text-2xl mr-2" dir="rtl">
                روپے
              </span>
            </div>
          </div>

          {/* TID Input */}
          <div className="mb-3 sm:mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base"
              dir="rtl"
            >
              TID (ٹرانزیکشن آئی ڈی):
            </label>
            <input
              type="text"
              value={tidNumber}
              onChange={(e) =>
                setTidNumber(e.target.value.replace(/\D/g, "").slice(0, 12))
              }
              placeholder="e.g. 123456789012"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-green-400 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          {/* Screenshot Upload */}
          <div className="mb-4 sm:mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2 text-right text-sm sm:text-base"
              dir="rtl"
            >
              اپلوڈ پیمنٹ اسکرین شاٹ:
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
            />
            {screenshot && (
              <p className="text-xs sm:text-sm text-green-600 mt-2">
                ✓ {screenshot.name}
              </p>
            )}
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 rounded-full text-base sm:text-xl font-bold transition shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            Confirm
          </button>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => router.back()}
            className="text-gray-500 hover:text-gray-700 font-semibold text-sm sm:text-base"
          >
            ← واپس جائیں
          </button>
        </div>
      </div>
    </main>
  );
}
