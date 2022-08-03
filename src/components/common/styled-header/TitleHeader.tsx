import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const TitleHeader = styled(Typography)(({ theme }) => ({
  position: "relative",
  "&::after": {
    content: "''",
    position: "absolute",
    bottom: theme.spacing(-1),
    left: 0,
    width: theme.spacing(8),
    borderTopColor: theme.palette.primary.main,
    borderTopWidth: "0.125em",
    borderTopStyle: "solid",
  },
}));

export default TitleHeader as typeof Typography;
