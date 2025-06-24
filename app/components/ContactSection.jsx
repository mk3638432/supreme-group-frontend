"use client";

export default function ContactSection() {
  return (
    <section className="bg-[#0E1F2F] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto bg-[#0F2B42] rounded-2xl p-10 grid md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
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

        {/* Right: Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full bg-transparent border-b border-gray-500 py-2 px-2 outline-none text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-500 py-2 px-2 outline-none text-white"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full bg-transparent border-b border-gray-500 py-2 px-2 outline-none text-white"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full bg-transparent border-b border-gray-500 py-2 px-2 outline-none text-white resize-none"
          ></textarea>
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
