import type { FC } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Divider from "@mui/material/Divider";

import Section from "@components/modules/landing/layout/Section";
import { SectionRoute } from "@components/modules/landing/constants";
import TitleHeader from "@components/common/styled-header/TitleHeader";
import ParallaxImage from "@components/common/parallax-image/ParallaxImage";

import Skills from "./Skills";
import Knowledge from "./Knowledge";
import PersonalInformation from "./PersonalInformation";

const PhotoWrapper = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(8),
  paddingRight: theme.spacing(8),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  filter: "grayscale(25%)",
}));

const Photo = styled(Image)({});

const AboutSection: FC = () => {
  const { t } = useTranslation();

  return (
    <Section
      route={SectionRoute.ABOUT}
      sx={{
        backgroundColor: "background.alternate",
        minHeight: { xs: "100vh", xl: "auto" },
      }}
    >
      {(active) => (
        <Container sx={{ height: "100%" }}>
          <Grid container sx={{ height: "100%" }} columnSpacing={8}>
            <Grid item xs={12} md={6} lg={7}>
              <Grid container columnSpacing={4}>
                <Grid item xs={12} sm={6} md={12} sx={{ pt: 8 }}>
                  <TitleHeader variant="h2" sx={{ mb: 4 }}>
                    {t("home:about.title")}
                  </TitleHeader>
                  <Typography
                    variant="h5"
                    component="h3"
                    color="primary.main"
                    sx={{ letterSpacing: 2, mb: 2 }}
                  >
                    {t("home:about.who_am_i")}
                  </Typography>
                  <Fade in={active} timeout={1000} appear>
                    <PhotoWrapper
                      sx={{ display: { xs: "flex", sm: "none" }, mb: 4 }}
                    >
                      <Photo
                        src="/assets/profile-avatar.jpg"
                        alt=""
                        width={320}
                        height={320}
                      />
                    </PhotoWrapper>
                  </Fade>
                  <Fade in={active} timeout={1500} appear>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{ whiteSpace: "pre-wrap" }}
                    >
                      {t("home:about.long_description")}
                    </Typography>
                  </Fade>
                </Grid>
                <Grid
                  item
                  xs={0}
                  sm={6}
                  md={0}
                  alignItems="center"
                  display={{ xs: "none", sm: "flex", md: "none" }}
                >
                  <ParallaxImage
                    src="/assets/profile-portrait.jpg"
                    width={1273}
                    height={2048}
                    sx={{ height: "100%" }}
                    active={active}
                  />
                </Grid>
              </Grid>
              <Divider sx={{ my: 4 }} />
              <Grid container rowSpacing={2} sx={{ mb: 4 }}>
                <PersonalInformation active={active} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={0}
              md={6}
              lg={5}
              alignItems="center"
              display={{ xs: "none", md: "flex" }}
              sx={{ mb: 4 }}
            >
              <ParallaxImage
                src="/assets/profile-portrait.jpg"
                width={1273}
                height={2048}
                sx={{ height: "100%" }}
                active={active}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ mb: 4 }}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                {t("home:about.skills")}
              </Typography>
              <Grid container rowSpacing={2}>
                <Skills active={active} />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} sx={{ mb: 8 }}>
              <Typography variant="h3" sx={{ mb: 4 }}>
                {t("home:about.knowledge")}
              </Typography>
              <Grid container columnSpacing={1} rowSpacing={1}>
                <Knowledge active={active} />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </Section>
  );
};

export default AboutSection;
