export default function Footer() {
  return (
    <footer className="bg-black border-top text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-white/10 pb-10">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
          <img src="/icon.svg" alt="Supreme Group" className="h-8 w-auto" />
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">APPLICATIONS</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Apparel</li>
            <li>Automotive</li>
            <li>Filtration</li>
            <li>Customised Nonwoven</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">COMPANY</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Who We Are</li>
            <li>Global Competency</li>
            <li>Innovation</li>
            <li>ESG Impact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">MORE</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">FOLLOW US</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400 gap-2 px-2">
        <p>©2024. All Rights Reserved.</p>
        <p>Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.</p>
      </div>
    </footer>
  );
}
