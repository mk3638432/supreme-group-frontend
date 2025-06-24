import "./globals.css";

export const metadata = {
  title: "Supreme Group",
  description: "Official website of Supreme Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
