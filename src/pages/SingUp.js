import React from "react";
import FormInputGroup from "../components/FormInputGroup";
function SignUp({ formData, setFormData }) {
  return (
    <>
      <FormInputGroup
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <FormInputGroup
        label="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <FormInputGroup
        label="Confirm password"
        type="password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
      />
    </>
  );
}

export default SignUp;