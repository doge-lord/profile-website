import type { FC, PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import NavAside from "./nav/NavAside";
import { ScrollSpy } from "./ScrollSpy";
import Footer from "./Footer";
import BackTopFab from "./BackTopFab";

const Main = styled("main")({});

const Background = styled(Box)(() => ({
  backgroundImage: "url('/assets/background.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  filter: "grayscale(80%) opacity(10%)",
  position: "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  zIndex: -1,
}));

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ScrollSpy>
      <NavAside />
      <Main sx={{ pl: { sm: 9 } }}>
        {children}
        <Background />
      </Main>
      <Footer />
      <BackTopFab />
    </ScrollSpy>
  );
};

export default Layout;
