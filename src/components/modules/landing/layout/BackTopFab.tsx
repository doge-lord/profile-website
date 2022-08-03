import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

import { SectionRoute } from "@components/modules/landing/constants";

import { useScrollSpy } from "./ScrollSpy";

const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(4),
  right: theme.spacing(4),
}));

const BackTopFab: FC = () => {
  const { t } = useTranslation();
  const { activeRoute, scrollTo } = useScrollSpy();

  return (
    <Fade in={activeRoute !== SectionRoute.HERO_BANNER} timeout={1000}>
      <StyledFab
        aria-label={t("label.back_to_top")}
        color="primary"
        onClick={() => {
          scrollTo("/", { update: true });
        }}
      >
        <ArrowUpwardOutlinedIcon />
      </StyledFab>
    </Fade>
  );
};

export default BackTopFab;
