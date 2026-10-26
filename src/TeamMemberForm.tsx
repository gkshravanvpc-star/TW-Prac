
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[A-Za-z ]+$/,
      "Name can contain only letters and spaces"
    )
    .required("Name is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must contain at least 8 characters")
    .matches(
      /[A-Z]/,
      "Password must contain at least one capital letter"
    )
    .matches(
      /[0-9]/,
      "Password must contain at least one number"
    )
    .required("Password is required"),
    
});



function TeamMemberForm() {
    const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema,

    onSubmit: (values) => {
      alert(`Team member submitted: ${values.name}`);
      console.log(values);
    },
  });

  

return (
  <main className="min-h-screen bg-slate-100 px-4 py-12 font-sans text-slate-800">
    <div className="mx-auto mb-8 max-w-md text-center">
      <h1 className="mb-2 text-3xl font-bold text-slate-900">
        Add Team Member
      </h1>
      <p className="text-sm text-slate-500">
        Enter the details to register a team member.
      </p>
    </div>

    <form
      onSubmit={formik.handleSubmit}
      className="mx-auto max-w-md space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Full Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter full name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        {formik.touched.name && formik.errors.name && (
          <p className="mt-2 text-sm text-red-600">
            {formik.errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        {formik.touched.email && formik.errors.email && (
          <p className="mt-2 text-sm text-red-600">
            {formik.errors.email}
          </p>
        )}
      </div>

      
       
<div>
  <label
    htmlFor="password"
    className="mb-1 block text-sm font-medium text-gray-700"
  >
    Password
  </label>

  <div className="relative">
    <input
      id="password"
      name="password"
      type={showPassword ? "text" : "password"}
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder="Enter your password"
      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 pr-11 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      aria-label={showPassword ? "Hide password" : "Show password"}
      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-indigo-600"
    >
      {showPassword ? (
        <EyeOff size={20} />
      ) : (
        <Eye size={20} />
      )}
    </button>
  </div>

  {formik.touched.password && formik.errors.password && (
    <p className="mt-1 text-sm text-red-600">
      {formik.errors.password}
    </p>
  )}

  <div className="mt-2 flex justify-end">
    <button
      type="button"
      onClick={() =>
        alert("Please contact your administrator to reset your password.")
      }
      className="text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:underline"
    >
      Forgot Password?
    </button>
  </div>
</div>

      
<div className="mt-2 flex justify-end">
 
</div>


      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      >
        Add Team Member
      </button>
    </form>
  </main>
);

}

export default TeamMemberForm;
