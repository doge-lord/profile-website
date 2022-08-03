import { FC, useEffect, useRef, useState } from "react";
import { styled, SxProps } from "@mui/material/styles";
import Box from "@mui/material/Box";

type Props = {
  src: string;
  width: number;
  height: number;
  sx?: SxProps;
  active?: boolean;
};

const StyledBox = styled(Box)(() => ({
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  width: "100%",
  position: "relative",
  "&::before": {
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backdropFilter: "grayscale(100%) opacity(50%)",
    transition: "backdrop-filter 2000ms ease-in-out",
  },
  "&.active::before": {
    backdropFilter: "grayscale(25%) opacity(100%)",
  },
}));

const ParallaxImage: FC<Props> = ({
  src,
  sx,
  width,
  height,
  active = true,
}) => {
  const ref = useRef<HTMLElement>();
  const [backgroundPositionX, setBackgroundPositionX] = useState<number>();
  const [backgroundWidth, setBackgroundWidth] = useState<number>(0);

  useEffect(() => {
    function updateDimensions() {
      if (ref.current) {
        const { x, width: w } = ref.current.getBoundingClientRect();
        setBackgroundPositionX(x);
        setBackgroundWidth(w);
      }
    }

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.addEventListener("resize", updateDimensions);
    };
  }, []);

  const backgroundHeight = (backgroundWidth * height) / width;

  return (
    <StyledBox
      ref={ref}
      className={active ? "active" : undefined}
      sx={{
        ...sx,
        backgroundPositionX,
        backgroundSize: `${backgroundWidth}px ${backgroundHeight}px`,
        backgroundImage: `url('${src}')`,
      }}
    />
  );
};

export default ParallaxImage;
