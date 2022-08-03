import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { styled, SxProps } from "@mui/material/styles";

import { useScrollSpy } from "./ScrollSpy";

type Props = {
  route: string;
  sx?: SxProps;
  children(active: boolean): ReactNode;
};

const StyledSection = styled("section")({
  position: "relative",
});

const Section: FC<Props> = ({ children, sx, route }) => {
  const ref = useRef<HTMLElement>();
  const [active, setActive] = useState(false);
  const { setActiveRoute, registerSection } = useScrollSpy();

  useEffect(() => {
    registerSection(route, ref.current!);
  }, [route, registerSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting }) => {
          setActive(isIntersecting);
          if (isIntersecting) {
            setActiveRoute(route);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px",
        threshold: [0],
      }
    );

    observer.observe(ref.current!);

    return () => {
      observer.disconnect();
    };
  }, [route, setActiveRoute]);

  return (
    <StyledSection
      sx={sx}
      // @ts-ignore ref not recognized by MUI
      ref={ref}
    >
      {children(active)}
    </StyledSection>
  );
};

export default Section;
