import { PropsWithChildren } from "react";
import { Navbar } from "~/components/navbar.tsx";

export function Layout({ children }: PropsWithChildren) {
  return (
    <main className="max-w-2xl flex flex-col mx-auto px-10">
      <Navbar />
      {children}
    </main>
  );
}
