"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
      loadSettings();
    }
  }, []);

  const loadSettings = () => {
    setAccountName(localStorage.getItem("jazzcashName") || "JazzCash / EasyPaisa – SHAMEEM");
    setAccountNumber(localStorage.getItem("jazzcashNumber") || "03259125102");
    setWhatsappNumber(localStorage.getItem("whatsappNumber") || "923020164923");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "Waseemadmin1515") {
      localStorage.setItem("adminAuth", "true");
      setIsAuthenticated(true);
      loadSettings();
    } else {
      alert("Wrong Password!");
    }
  };

  const handleSave = () => {
    localStorage.setItem("jazzcashName", accountName);
    localStorage.setItem("jazzcashNumber", accountNumber);
    localStorage.setItem("whatsappNumber", whatsappNumber);

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
    setPassword("");
  };

  /* ================= LOGIN ================= */
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-green-50 flex items-center justify-center p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-xl shadow w-full max-w-sm"
        >
          <h1 className="text-xl font-bold text-center mb-4">Admin Login</h1>

          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            required
          />

          <button className="w-full bg-green-600 text-white py-3 rounded font-bold">
            Login
          </button>
        </form>
      </main>
    );
  }

  /* ================= ADMIN PANEL ================= */
  return (
    <main className="min-h-screen bg-green-50 p-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-5">

        <h1 className="text-2xl font-bold text-center">Admin Panel</h1>

        {/* Account Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Account Name (JazzCash / EasyPaisa)
          </label>
          <input
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            placeholder="e.g. JazzCash – SHAMEEM"
            className="w-full border p-3 rounded"
          />
        </div>

        {/* JazzCash / EasyPaisa Number */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            JazzCash / EasyPaisa Number
          </label>
          <input
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="03XXXXXXXXX"
            className="w-full border p-3 rounded"
            maxLength={11}
          />
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            WhatsApp Number
          </label>
          <input
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            placeholder="923XXXXXXXXX (without +)"
            className="w-full border p-3 rounded"
          />
        </div>

        {/* Preview */}
        <div className="bg-green-50 border rounded-lg p-4 text-sm">
          <p className="font-semibold text-gray-700 mb-1">Preview:</p>
          <p><strong>Name:</strong> {accountName}</p>
          <p><strong>Payment No:</strong> {accountNumber}</p>
          <p><strong>WhatsApp:</strong> {whatsappNumber}</p>
        </div>

        {/* Save */}
        <button
          onClick={handleSave}
          className="w-full bg-green-600 text-white py-3 rounded font-bold"
        >
          {saved ? "✓ Saved Successfully" : "Save Changes"}
        </button>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          Logout
        </button>

        <button
          onClick={() => router.push("/")}
          className="w-full text-center text-gray-500 text-sm"
        >
          ← Back to Home
        </button>

      </div>
    </main>
  );
}
