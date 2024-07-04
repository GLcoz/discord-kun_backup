import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/components/providers/modal-provider";
import { SocketProvider } from "@/components/providers/socket-provider";
import { QueryProvider } from "@/components/providers/query-providet";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DiscordClone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
          <SocketProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              storageKey="discord-theme"
            >
              <ModalProvider />
              <QueryProvider>{children}</QueryProvider>
            </ThemeProvider>
          </SocketProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}