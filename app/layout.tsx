import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Formify - Create Custom Forms with Ease",
  description: "Formify is a powerful, user-friendly online form builder that allows you to create custom surveys, quizzes, polls, and more. Design, share, and collect responses effortlessly with our intuitive platform. No coding required.",
  keywords: "Formify, online form builder, create custom forms, survey maker, quiz builder, poll creation tool, easy form creator, free form builder, customizable forms, form generator, responsive forms, online survey tool, collect responses, drag-and-drop form builder, form templates",
  openGraph: {
    title: "Formify - Create Custom Forms with Ease",
    description: "Formify is your go-to tool for building custom surveys, quizzes, and forms online without any coding. Start for free!",
    url: "https://your-formify-site.com",
    images: [
      {
        url: "https://your-formify-site.com/og-image.png",
        width: 800,
        height: 600,
        alt: "Formify - Custom Form Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formify - Custom Form Builder",
    description: "Create surveys, quizzes, and more with Formify’s intuitive and easy-to-use form builder. No technical skills required.",
  },
  robots: "index, follow",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
