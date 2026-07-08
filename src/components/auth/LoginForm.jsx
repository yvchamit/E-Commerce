import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { loginUserAction } from "../../store/actions/clientActions";
import FormField from "./FormField";
import { toast } from "react-toastify";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    try {
      await dispatch(
        loginUserAction(
          { email: data.email, password: data.password },
          data.rememberMe,
        ),
      );

      if (location.state?.from) {
        history.push(location.state.from);
      } else if (history.length > 2) {
        history.goBack();
      } else {
        history.push("/");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Login failed. Please check your email and password.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
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
        placeholder="********"
        error={errors.password}
        registration={register("password", {
          required: "Password is required!",
        })}
      />

      <div className="flex items-center gap-2 pl-2">
        <input
          id="rememberMe"
          type="checkbox"
          {...register("rememberMe")}
          className="w-4 h-4 text-[#23A6F0]"
        />
        <label htmlFor="rememberMe" className="text-sm text-[#737373]">
          Remember Me
        </label>
      </div>

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
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
