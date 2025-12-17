"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ApplyForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    idCard: "",
    district: "",
    address: "",
    frontPhoto: null,
    backPhoto: null,
    livePhoto: null,
    licenseCategory: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.idCard || !formData.district) {
      alert("براہ کرم تمام ضروری فیلڈز بھریں");
      return;
    }

    console.log("Form Data:", formData);
    
    const fee = formData.licenseCategory.split('–')[1]?.trim() || '5000';
    const categoryName = formData.licenseCategory.split('–')[0]?.trim() || 'Motor Cycle';
    
    router.push(`/confirmation?name=${encodeURIComponent(formData.name)}&category=${encodeURIComponent(categoryName)}&fee=${fee}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white py-6 sm:py-10 px-3 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header with Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 items-center mb-4">
            <Image
              src="/dastak-logo.png"
              alt="Dastak Logo"
              width={120}
              height={60}
              className="object-contain w-24 sm:w-28 lg:w-32"
            />
            <Image
              src="/dlims-logo.png"
              alt="DLIMS Logo"
              width={100}
              height={50}
              className="object-contain w-20 sm:w-24 lg:w-28"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2" dir="rtl">
            ڈرائیونگ لائسنس درخواست فارم
          </h1>
          <p className="text-sm sm:text-base text-gray-600">Driving License Application Form</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          
          {/* Name */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-2 text-sm sm:text-base" dir="rtl">
              نام:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="اپنا نام لکھیں"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-right text-sm sm:text-base"
              dir="rtl"
              required
            />
          </div>

          {/* ID Card Number */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-2 text-sm sm:text-base" dir="rtl">
              شناختی کارڈ نمبر:
            </label>
            <input
              type="text"
              name="idCard"
              value={formData.idCard}
              onChange={handleInputChange}
              placeholder="بغیر ڈیش کے لکھیں"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-right text-sm sm:text-base"
              dir="rtl"
              required
            />
          </div>

          {/* District */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-2 text-sm sm:text-base" dir="rtl">
              ضلع (District):
            </label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              placeholder="ضلع کا نام"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-right text-sm sm:text-base"
              dir="rtl"
              required
            />
          </div>

          {/* Complete Address */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-2 text-sm sm:text-base" dir="rtl">
              مکمل پتہ:
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="موجودہ رہائشی پتہ"
              rows="3"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-right text-sm sm:text-base"
              dir="rtl"
              required
            />
          </div>

          {/* Front Photo */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-2 text-sm sm:text-base" dir="rtl">
              شناختی کارڈ فرنٹ:
            </label>
            <input
              type="file"
              name="frontPhoto"
              onChange={handleFileChange}
              accept="image/*"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              required
            />
            {formData.frontPhoto && (
              <p className="text-xs sm:text-sm text-green-600 mt-2">✓ {formData.frontPhoto.name}</p>
            )}
          </div>

          {/* Back Photo */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-2 text-sm sm:text-base" dir="rtl">
              شناختی کارڈ بیک:
            </label>
            <input
              type="file"
              name="backPhoto"
              onChange={handleFileChange}
              accept="image/*"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              required
            />
            {formData.backPhoto && (
              <p className="text-xs sm:text-sm text-green-600 mt-2">✓ {formData.backPhoto.name}</p>
            )}
          </div>

          {/* Live Photo */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-2 text-sm sm:text-base" dir="rtl">
              لائیو فوٹو:
            </label>
            <input
              type="file"
              name="livePhoto"
              onChange={handleFileChange}
              accept="image/*"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              required
            />
            {formData.livePhoto && (
              <p className="text-xs sm:text-sm text-green-600 mt-2">✓ {formData.livePhoto.name}</p>
            )}
          </div>

          {/* License Category */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-2 text-sm sm:text-base" dir="rtl">
              لائسنس کی کیٹگری منتخب کریں:
            </label>
            <select
              name="licenseCategory"
              value={formData.licenseCategory}
              onChange={handleInputChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-right text-sm sm:text-base"
              dir="rtl"
              required
            >
              <option value="">کیٹگری منتخب کریں</option>
              <option value="Motor Cycle – 5000">Motor Cycle – 5000</option>
              <option value="Car/Motorcycle – 7500">Car/Motorcycle – 7500</option>
              <option value="LTV – 10500">LTV – 10500</option>
              <option value="HTV – 15000">HTV – 15000</option>
              <option value="PSO – 22500">PSO – 22500</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            Next
          </button>

        </form>

        {/* Back Button */}
        <div className="text-center mt-4 sm:mt-6">
          <button
            onClick={() => router.push('/')}
            className="text-green-600 hover:text-green-700 font-semibold text-sm sm:text-lg"
          >
            ← واپس جائیں
          </button>
        </div>

      </div>
    </main>
  );
}