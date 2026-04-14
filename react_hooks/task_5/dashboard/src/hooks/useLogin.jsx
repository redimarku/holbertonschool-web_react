import { useState } from "react";

const useLogin = (onLogin) => {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const validateForm = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && password.length >= 8;
  };

  const handleChangeEmail = (e) => {
    const { value: email } = e.target;
    const { password } = formData;

    setFormData((prev) => ({ ...prev, email }));
    setEnableSubmit(validateForm(email, password));
  };

  const handleChangePassword = (e) => {
    const { value: password } = e.target; // ✅ was `value` (undefined)
    const { email } = formData;

    setFormData((prev) => ({ ...prev, password }));
    setEnableSubmit(validateForm(email, password)); // ✅ always validate, not only if length >= 8
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (onLogin) {
      onLogin(email, password); // ✅ uses the callback param, not props.logIn
    }
  };

  const { email, password } = formData;

  return {
    email,        // ✅ returned as top-level values
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit,
  };
};

export default useLogin;