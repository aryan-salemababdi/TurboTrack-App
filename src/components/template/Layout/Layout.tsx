import { ReactNode } from "react";
import { NextPage } from "next";
import Header from "@/components/organisme/Header/Header";
import Footer from "@/components/organisme/Footer/Footer";

const Layout: NextPage<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
