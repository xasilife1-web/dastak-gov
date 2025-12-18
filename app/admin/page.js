"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadSettings();
    }
  }, []);

  const loadSettings = () => {
    const name = localStorage.getItem('jazzcashName') || 'Jazzcash – SHAMEEM';
    const number = localStorage.getItem('jazzcashNumber') || '03259125102';
    setAccountName(name);
    setAccountNumber(number);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'Waseemadmin1515') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
      loadSettings();
    } else {
      alert('Wrong Password!');
    }
  };

  const handleSave = () => {
    localStorage.setItem('jazzcashName', accountName);
    localStorage.setItem('jazzcashNumber', accountNumber);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-3 sm:p-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full">
          <div className="text-center mb-6 sm:mb-8">
            <div className="bg-green-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-2xl sm:text-3xl text-white">🔐</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Enter password to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-bold transition shadow-lg transform hover:scale-105 active:scale-95"
            >
              Login
            </button>
          </form>

          <div className="mt-4 sm:mt-6 text-center">
            <button
              onClick={() => router.push('/')}
              className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-6 sm:py-10 px-3 sm:px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-gray-600 mt-1 text-xs sm:text-base">Manage JazzCash Account Settings</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 rounded-full font-semibold transition text-sm sm:text-base"
            >
              Logout
            </button>
          </div>

          {/* Settings Form */}
          <div className="space-y-4 sm:space-y-6">
            
            {/* Account Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                Account Name
              </label>
              <input
                type="text"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                placeholder="e.g. Jazzcash – SHAMEEM"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Account Number */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                JazzCash Number
              </label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                placeholder="e.g. 03259125102"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                maxLength="11"
              />
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Format: 03XXXXXXXXX (11 digits)
              </p>
            </div>

            {/* Preview */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <p className="text-xs sm:text-sm text-gray-600 mb-3 font-semibold">Preview:</p>
              <div className="text-center">
                <p className="text-gray-700 font-semibold text-sm sm:text-base">{accountName || 'Account Name'}</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-600 mt-2">
                  {accountNumber || '03XXXXXXXXX'}
                </p>
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              {saved ? '✓ Saved Successfully!' : 'Save Changes'}
            </button>

          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">📝 Instructions</h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">1.</span>
              <span>Enter the new JazzCash account name and number</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">2.</span>
              <span>Check the preview to make sure everything looks correct</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">3.</span>
              <span>Click "Save Changes" button</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">4.</span>
              <span>Changes will be applied immediately on the payment page</span>
            </li>
          </ul>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-4 sm:mt-6">
          <button
            onClick={() => router.push('/')}
            className="text-gray-500 hover:text-gray-700 font-semibold text-sm sm:text-base"
          >
            ← Back to Home
          </button>
        </div>

      </div>
    </main>
  );
}
