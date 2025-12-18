"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ApplyForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    idCard: "",
    mobileNumber: "",
    district: "",
    address: "",
    frontPhoto: null,
    backPhoto: null,
    livePhoto: null,
    licenseCategory: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleCnicChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 13) return;
    setFormData(prev => ({ ...prev, idCard: value }));
    setErrors(prev => ({ ...prev, idCard: "" }));
  };

  const handleMobileChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) return;
    setFormData(prev => ({ ...prev, mobileNumber: value }));
    setErrors(prev => ({ ...prev, mobileNumber: "" }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name) newErrors.name = "نام درج کرنا ضروری ہے";
    if (!formData.idCard || formData.idCard.length !== 13)
      newErrors.idCard = "شناختی کارڈ نمبر مکمل کریں (13 ہندسے)";
    if (!formData.mobileNumber || formData.mobileNumber.length !== 11)
      newErrors.mobileNumber = "درست موبائل نمبر درج کریں (11 ہندسے)";
    if (!formData.district) newErrors.district = "ضلع درج کریں";
    if (!formData.address) newErrors.address = "مکمل پتہ درج کریں";
    if (!formData.frontPhoto) newErrors.frontPhoto = "فرنٹ تصویر اپلوڈ کریں";
    if (!formData.backPhoto) newErrors.backPhoto = "بیک تصویر اپلوڈ کریں";
    if (!formData.livePhoto) newErrors.livePhoto = "لائیو تصویر اپلوڈ کریں";
    if (!formData.licenseCategory)
      newErrors.licenseCategory = "لائسنس کی کیٹگری منتخب کریں";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const categoryName = formData.licenseCategory.split("–")[0].trim();
    const fee = formData.licenseCategory.split("–")[1].trim();

    router.push(
      `/confirmation?name=${encodeURIComponent(formData.name)}&cnic=${formData.idCard}&mobile=${formData.mobileNumber}&district=${encodeURIComponent(formData.district)}&address=${encodeURIComponent(formData.address)}&category=${encodeURIComponent(categoryName)}&fee=${fee}`
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white py-4 sm:py-6 lg:py-10 px-3 sm:px-4 lg:px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header with Logos */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8 relative">
          {/* Background Decoration */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-20 -z-10"></div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 items-center mb-3 sm:mb-4">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <Image
                src="/dastak-logo.png"
                alt="Dastak Logo"
                width={200}
                height={95}
                className="object-contain w-24 sm:w-28 lg:w-36 drop-shadow-xl"
                quality={100}
                priority
              />
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <Image
                src="/dlims-logo.png"
                alt="DLIMS Logo"
                width={180}
                height={90}
                className="object-contain w-20 sm:w-24 lg:w-32 drop-shadow-xl"
                quality={100}
                priority
              />
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-green-800 mb-2" dir="rtl">
            ڈرائیونگ لائسنس درخواست فارم
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Driving License Application Form</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5 lg:space-y-6 border border-green-100"
        >

          {/* Name */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base" dir="rtl">
              نام: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="مثال: محمد علی"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-right text-sm sm:text-base`}
              dir="rtl"
            />
            {errors.name && <p className="text-red-600 text-xs sm:text-sm text-right mt-1" dir="rtl">{errors.name}</p>}
          </div>

          {/* CNIC */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base" dir="rtl">
              شناختی کارڈ نمبر: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.idCard}
              onChange={handleCnicChange}
              placeholder="مثال: 3520212345671"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${errors.idCard ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-right text-sm sm:text-base`}
              dir="rtl"
            />
            <p className="text-xs text-gray-500 text-right mt-1" dir="rtl">13 ہندسے، بغیر ڈیش کے</p>
            {errors.idCard && <p className="text-red-600 text-xs sm:text-sm text-right mt-1" dir="rtl">{errors.idCard}</p>}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base" dir="rtl">
              موبائل نمبر: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.mobileNumber}
              onChange={handleMobileChange}
              placeholder="مثال: 03012345678"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-right text-sm sm:text-base`}
              dir="rtl"
            />
            <p className="text-xs text-gray-500 text-right mt-1" dir="rtl">11 ہندسے، 03 سے شروع</p>
            {errors.mobileNumber && (
              <p className="text-red-600 text-xs sm:text-sm text-right mt-1" dir="rtl">{errors.mobileNumber}</p>
            )}
          </div>

          {/* District */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base" dir="rtl">
              ضلع: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              placeholder="مثال: لاہور"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${errors.district ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-right text-sm sm:text-base`}
              dir="rtl"
            />
            {errors.district && <p className="text-red-600 text-xs sm:text-sm text-right mt-1" dir="rtl">{errors.district}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base" dir="rtl">
              مکمل پتہ: <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="مثال: مکان نمبر 12، گلی نمبر 5، ماڈل ٹاؤن"
              rows="3"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-right text-sm sm:text-base`}
              dir="rtl"
            />
            {errors.address && <p className="text-red-600 text-xs sm:text-sm text-right mt-1" dir="rtl">{errors.address}</p>}
          </div>

          {/* Front Photo */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base" dir="rtl">
              شناختی کارڈ فرنٹ: <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="frontPhoto"
              onChange={handleFileChange}
              accept="image/*"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${errors.frontPhoto ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 text-sm sm:text-base`}
            />
            {formData.frontPhoto && (
              <p className="text-xs sm:text-sm text-green-600 mt-1">✓ {formData.frontPhoto.name}</p>
            )}
            {errors.frontPhoto && <p className="text-red-600 text-xs sm:text-sm text-right mt-1" dir="rtl">{errors.frontPhoto}</p>}
          </div>

          {/* Back Photo */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base" dir="rtl">
              شناختی کارڈ بیک: <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="backPhoto"
              onChange={handleFileChange}
              accept="image/*"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${errors.backPhoto ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 text-sm sm:text-base`}
            />
            {formData.backPhoto && (
              <p className="text-xs sm:text-sm text-green-600 mt-1">✓ {formData.backPhoto.name}</p>
            )}
            {errors.backPhoto && <p className="text-red-600 text-xs sm:text-sm text-right mt-1" dir="rtl">{errors.backPhoto}</p>}
          </div>

          {/* Live Photo */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base" dir="rtl">
              لائیو فوٹو: <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="livePhoto"
              onChange={handleFileChange}
              accept="image/*"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${errors.livePhoto ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 text-sm sm:text-base`}
            />
            {formData.livePhoto && (
              <p className="text-xs sm:text-sm text-green-600 mt-1">✓ {formData.livePhoto.name}</p>
            )}
            {errors.livePhoto && <p className="text-red-600 text-xs sm:text-sm text-right mt-1" dir="rtl">{errors.livePhoto}</p>}
          </div>

          {/* License Category */}
          <div>
            <label className="block text-right text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base" dir="rtl">
              لائسنس کی کیٹگری منتخب کریں: <span className="text-red-500">*</span>
            </label>
            <select
              name="licenseCategory"
              value={formData.licenseCategory}
              onChange={handleInputChange}
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${errors.licenseCategory ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-right text-sm sm:text-base`}
              dir="rtl"
            >
              <option value="">کیٹگری منتخب کریں</option>
              <option value="Motor Cycle – 5000">Motor Cycle – 5000</option>
              <option value="Car/Motorcycle – 7500">Car/Motorcycle – 7500</option>
              <option value="LTV – 10500">LTV – 10500</option>
              <option value="HTV – 15000">HTV – 15000</option>
              <option value="PSO – 22500">PSO – 22500</option>
            </select>
            {errors.licenseCategory && (
              <p className="text-red-600 text-xs sm:text-sm text-right mt-1" dir="rtl">{errors.licenseCategory}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group relative w-full bg-gradient-to-r from-green-600 via-green-700 to-green-600 hover:from-green-700 hover:via-green-800 hover:to-green-700 text-white py-4 sm:py-5 lg:py-6 rounded-full text-base sm:text-lg lg:text-xl font-bold transition-all duration-500 shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 active:scale-95 mt-6 overflow-hidden"
          >
            {/* Shine Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            
            {/* Button Text */}
            <span className="relative flex items-center justify-center gap-2">
              Next
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

        </form>

        {/* Back Button */}
        <div className="text-center mt-4 sm:mt-5 lg:mt-6">
          <button
            onClick={() => router.push('/')}
            className="text-green-600 hover:text-green-700 font-semibold text-sm sm:text-base lg:text-lg transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            واپس جائیں
          </button>
        </div>

      </div>
    </main>
  );
}