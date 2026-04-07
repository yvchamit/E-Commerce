import axios from "axios";
import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  password: "",
  role_id: "3",
};

const errorMessages = {
  name: "Name is too short!",
  email: "Please enter a valid email address!",
  password: "Password must be at least 8 characters long!",
};

export default function SignUpForm() {
  const [formData, setFormData] = useState(initialForm);
  const [isLogin, setIsLogin] = useState(false);

  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  useEffect(() => {
    if (
      validateEmail(formData.email) &&
      formData.password.trim().length >= 8 &&
      formData.name.trim().length >= 3
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // 1. Önce form verisini güncelleyelim
    setFormData((prev) => ({ ...prev, [name]: value }));

    // 2. Hata kontrolünü değişkene alalım (Temiz kod)
    let isInvalid = false;
    const trimmedValue = value.trim();

    if (name === "email") {
      isInvalid = !validateEmail(value); // Email geçersizse isInvalid = true olur
    } else if (name === "password") {
      isInvalid = trimmedValue.length < 8; // 8'den küçükse hata var
    } else if (name === "name") {
      isInvalid = trimmedValue.length < 3; // 3'ten küçükse hata var
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: isInvalid,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Önce formda halihazırda bir hata var mı diye kontrol edelim (Frontend Guard)
    const hasErrors = Object.values(errors).some((error) => error === true);
    if (hasErrors) {
      alert("Lütfen formdaki hataları düzeltiniz.");
      return;
    }

    // 2. URL'i moda göre belirliyoruz
    const endpoint = isLogin ? "/login" : "/signup";
    const url = `https://workintech-fe-ecommerce.onrender.com${endpoint}`;

    try {
      const response = await axios.post(url, formData);

      // 3. Başarılı olma durumu (200 OK veya 201 Created)
      if (response.status === 200 || response.status === 201) {
        if (isLogin) {
          // GİRİŞ BAŞARILI
          localStorage.setItem("token", response.data.token);
          alert("Giriş başarılı! Mağazaya yönlendiriliyorsunuz.");
          // Burada history.push("/") ile ana sayfaya yönlendirme yapabilirsin.
        } else {
          // KAYIT BAŞARILI
          alert("Kaydınız oluşturuldu! Şimdi giriş yapabilirsiniz.");
          setIsLogin(true); // Modu otomatik olarak Login'e çekiyoruz
        }

        // 4. BAŞARI SONRASI TEMİZLİK
        setFormData(initialForm); // Form kutularını boşalt
        setErrors({}); // Varsa ekrandaki kırmızı hata yazılarını sil
      }
    } catch (err) {
      // 5. HATA YÖNETİMİ
      // API'den dönen spesifik bir hata mesajı varsa onu göster, yoksa genel mesaj ver.
      const errorMessage =
        err.response?.data?.message ||
        "Bir hata oluştu, lütfen bilgilerinizi kontrol edin.";
      alert(errorMessage);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-[#ECECEC] w-full max-w-md">
      <h2 className="text-2xl font-bold text-[#252B42] mb-12 text-center">
        Create Account
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-[#252B42]">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`p-3 border rounded-md bg-[#F9F9F9] focus:outline-[#23A6F0] ${
              errors.name ? "border-red-500" : "border-[#ECECEC]"
            }`}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-[12px] font-medium mt-1 px-2">
              {errorMessages.name}
            </p>
          )}
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-[#252B42]">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className={`p-3 border rounded-md bg-[#F9F9F9] focus:outline-[#23A6F0] ${
              errors.email ? "border-red-500" : "border-[#ECECEC]"
            }`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-[12px] font-medium mt-1 px-2">
              {errorMessages.email}
            </p>
          )}
        </div>

        {/* Password Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-[#252B42]">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Min 8 characters"
            className={`p-3 border rounded-md bg-[#F9F9F9] focus:outline-[#23A6F0] ${
              errors.password ? "border-red-500" : "border-[#ECECEC]"
            }`}
            required
          />
          {errors.password && (
            <p className="text-red-500 text-[12px] font-medium mt-1 px-2">
              {errorMessages.password}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid}
          className={`mt-4 font-bold py-4 rounded-md transition-all shadow-md 
    ${
      !isValid
        ? "bg-gray-300 cursor-not-allowed opacity-50" // Pasif hali
        : "bg-[#23A6F0] text-white hover:bg-[#1a8cd8] active:scale-[0.98]" // Aktif hali
    }`}
        >
          Sign Up
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-[#F3F3F3] text-center">
        <p className="text-sm text-[#737373] font-medium">
          Already have an account?{" "}
          <a href="/login" className="text-[#23A6F0] font-bold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
