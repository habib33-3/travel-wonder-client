import { ReactNode } from "react";

import Navbar from "@/components/shared/Navbar/Navbar";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
