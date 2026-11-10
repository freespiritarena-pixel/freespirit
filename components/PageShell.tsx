import type { ReactNode } from "react";
import { MotionProvider } from "@/components/MotionProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

/** Nav, main landmark and footer shared by the inner pages. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </MotionProvider>
  );
}
