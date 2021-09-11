import { FC } from "react";
import { Footer } from ".";
import { Header } from ".";

const Layout:FC = ({children}) => {
  
  return (
        <>
          <Header />
              {children}
          <Footer/>
        </>      
  )

};

export default Layout;
