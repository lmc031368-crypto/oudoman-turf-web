import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Handan Oudoman Sports Technology Co., Ltd.",
  description: "Professional Artificial Turf Manufacturer",
  // 这里就是你想要的小图标 (🌿)
  icons: {
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🌿</text></svg>`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
