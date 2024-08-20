import type { Metadata } from "next";
import type { Viewport } from "next";
import "@/styles/globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AntdRegistry } from "@ant-design/nextjs-registry";

import ReactQueryProvider from "@/utils/ReactQueryProvider";

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shopee Clone",
  description: "Browse & Shopping",
  // viewport: viewport,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
