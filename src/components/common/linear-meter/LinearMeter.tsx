import { FC, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

type Props = {
  label: string;
  value: number;
  active?: boolean;
};

const Progress = styled(LinearProgress)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: theme.spacing(1),
  [`& .${linearProgressClasses.bar}`]: {
    paddingTop: theme.spacing(1),
  },
}));

const LinearMeter: FC<Props> = ({ label, value, active }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const timeout = 500;
    let raf: number;
    let start: number;
    let previousTimeStamp: number;
    let done = false;

    function step(timestamp: number) {
      if (start === undefined) {
        start = timestamp;
      }
      const elapsed = timestamp - start;

      if (previousTimeStamp !== timestamp) {
        if (active) {
          const newValue = Math.min((1 / timeout) * elapsed * value, value);
          setCurrentValue(newValue);
          if (newValue === value) {
            done = true;
          }
        } else {
          const newValue = Math.max(value - (1 / timeout) * elapsed * value, 0);
          setCurrentValue(newValue);
          if (newValue === 0) {
            done = true;
          }
        }
      }

      if (elapsed < timeout) {
        previousTimeStamp = timestamp;

        if (!done) {
          raf = window.requestAnimationFrame(step);
        }
      }
    }

    raf = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, [active, value]);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="body1" sx={{ mb: 1 }}>
        {label}
      </Typography>
      <Progress variant="determinate" value={currentValue} />
    </Box>
  );
};

export default LinearMeter;
