"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!form.company.trim()) {
      newErrors.company = "Company is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validateForm()) {
      console.log("Form submitted successfully:", form);
      // Reset form after successful submission
      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      setErrors({});
      setIsSubmitted(false);
      alert("Form submitted successfully!");
    } else {
      console.log("Form has errors:", errors);
    }
  };

  return (
    <section className="bg-[#0E1F2F] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto bg-[#0F2B42] rounded-2xl p-10 grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="text-gray-300">For general enquiries</p>

          <div>
            <p className="text-sm text-gray-400">Address :</p>
            <p>110, 16th Road, Chembur, Mumbai - 400071</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Phone :</p>
            <p>+91 22 25208822</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Email :</p>
            <p>info@supremegroup.co.in</p>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {" "}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              className={`w-full bg-transparent border-b py-2 px-2 outline-none text-white
                ${
                  isSubmitted && errors.name
                    ? "border-red-500"
                    : "border-gray-500"
                } // Conditional border color
              `}
            />
            {isSubmitted && errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full bg-transparent border-b py-2 px-2 outline-none text-white
                ${
                  isSubmitted && errors.email
                    ? "border-red-500"
                    : "border-gray-500"
                }
              `}
            />
            {isSubmitted && errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              className={`w-full bg-transparent border-b py-2 px-2 outline-none text-white
                ${
                  isSubmitted && errors.company
                    ? "border-red-500"
                    : "border-gray-500"
                }
              `}
            />
            {isSubmitted && errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className={`w-full bg-transparent border-b py-2 px-2 outline-none text-white resize-none
                ${
                  isSubmitted && errors.message
                    ? "border-red-500"
                    : "border-gray-500"
                }
              `}
            ></textarea>
            {isSubmitted && errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="border border-gray-500 px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
