import { keyframes } from "@mui/system";
import { styled } from "@mui/material/styles";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";

const AnimatedMouse = styled((props: SvgIconProps) => (
  <MouseOutlinedIcon {...props} fontSize="large" />
))(({ theme }) => {
  const nudgeMouse = keyframes`
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(${theme.spacing(2)});
    }
    30% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(${theme.spacing(2)});
    }
    60% {
      transform: translateY(0);
    }
    80% {
      transform: translateY(${theme.spacing(2)});
    }
    90% {
      transform: translateY(0);
    }
  `;

  return {
    animation: `${nudgeMouse} 5s ease-out infinite`,
    position: "absolute",
    bottom: theme.spacing(6),
    left: "calc(50% - 0.5em)",
  };
});

export default AnimatedMouse;
