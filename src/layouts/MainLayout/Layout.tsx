import { FC } from "react";
import { Footer } from ".";
import { Header } from ".";
import { Box } from "@material-ui/core";

const Layout:FC = ({children}) => {

  return (
    <Box>
      <Header />
        {children}
      <Footer />
    </Box>      
  )

};

export default Layout;
