import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosInstance } from "../../lib/axiosInstance";
import FormField from "./FormField";

export default function SignUpForm() {
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: { role_id: "3" },
  });

  useEffect(() => {
    axiosInstance.get("/roles").then((res) => setRoles(res.data));
  }, []);

  const selectedRoleId = watch("role_id");
  const isStore =
    roles.find((r) => String(r.id) === String(selectedRoleId))?.code === "store";

  const onSubmit = async (data) => {
    setSubmitError("");


    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: Number(data.role_id),
    };

    if (isStore) {
      payload.store = {
        name: data.store_name,
        phone: data.store_phone,
        tax_no: data.tax_no,
        bank_account: data.bank_account,
      };
    }

    try {
      await axiosInstance.post("/signup", payload);
      toast.warn("You need to click link in email to activate your account!");
      history.goBack();
    } catch (err) {
      setSubmitError(
        err.response?.data?.message ||
          "Something went wrong. Please check your information and try again.",
      );
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-[#ECECEC] w-full max-w-md">
      <h2 className="text-2xl font-bold text-[#252B42] mb-12 text-center">
        Create Account
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-5"
      >
        <FormField
          label="Full Name"
          type="text"
          placeholder="John Doe"
          error={errors.name}
          registration={register("name", {
            required: "Name is required!",
            minLength: { value: 3, message: "Name must be at least 3 characters!" },
          })}
        />

        <FormField
          label="Email Address"
          type="email"
          placeholder="example@gmail.com"
          error={errors.email}
          registration={register("email", {
            required: "Email is required!",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
              message: "Please enter a valid email address!",
            },
          })}
        />

        <FormField
          label="Password"
          type="password"
          placeholder="Min 8 chars: upper, lower, number, special"
          error={errors.password}
          registration={register("password", {
            required: "Password is required!",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
              message:
                "Min 8 characters with number, lowercase, uppercase and special char!",
            },
          })}
        />

        <FormField
          label="Confirm Password"
          type="password"
          placeholder="Re-enter your password"
          error={errors.confirmPassword}
          registration={register("confirmPassword", {
            required: "Please confirm your password!",
            validate: (value) =>
              value === getValues("password") || "Passwords do not match!",
          })}
        />

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-[#252B42]">Role</label>
          <select
            {...register("role_id")}
            className="p-3 border rounded-md bg-[#F9F9F9] border-[#ECECEC] focus:outline-[#23A6F0]"
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {isStore && (
          <>
            <FormField
              label="Store Name"
              type="text"
              placeholder="My Store"
              error={errors.store_name}
              registration={register("store_name", {
                required: "Store name is required!",
                minLength: {
                  value: 3,
                  message: "Store name must be at least 3 characters!",
                },
              })}
            />

            <FormField
              label="Store Phone"
              type="tel"
              placeholder="05XXXXXXXXX"
              error={errors.store_phone}
              registration={register("store_phone", {
                required: "Store phone is required!",
                pattern: {
                  value: /^(\+90|0)?5\d{9}$/,
                  message: "Please enter a valid Türkiye phone number!",
                },
              })}
            />

            <FormField
              label="Store Tax ID"
              type="text"
              placeholder="TXXXXVXXXXXX"
              error={errors.tax_no}
              registration={register("tax_no", {
                required: "Tax ID is required!",
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: "Tax ID must match pattern TXXXXVXXXXXX!",
                },
              })}
            />

            <FormField
              label="Store Bank Account (IBAN)"
              type="text"
              placeholder="TR + 24 digits"
              error={errors.bank_account}
              registration={register("bank_account", {
                required: "IBAN is required!",
                pattern: {
                  value: /^TR\d{24}$/,
                  message: "Please enter a valid IBAN (TR + 24 digits)!",
                },
              })}
            />
          </>
        )}

        {submitError && (
          <p className="text-red-500 text-sm font-medium text-center bg-red-50 border border-red-200 rounded-md p-3">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-4 font-bold py-4 rounded-md transition-all shadow-md flex items-center justify-center gap-2
            ${
              isSubmitting
                ? "bg-gray-300 cursor-not-allowed opacity-50"
                : "bg-[#23A6F0] text-white hover:bg-[#1a8cd8] active:scale-[0.98]"
            }`}
        >
          {isSubmitting && (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}
          {isSubmitting ? "Signing Up..." : "Sign Up"}
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