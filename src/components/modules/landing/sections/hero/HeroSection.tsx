import type { FC, MouseEventHandler } from "react";
import { useTranslation, Trans } from "react-i18next";
import Image from "next/image";
import { useTheme, styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";

import TypeCarousel from "@components/common/type-carousel/TypeCarousel";
import Section from "@components/modules/landing/layout/Section";
import { links, SectionRoute } from "@components/modules/landing/constants";
import { useScrollSpy } from "@components/modules/landing//layout/ScrollSpy";
import AnimatedMouse from "@components/common/animated-mouse/AnimatedMouse";

const PhotoWrapper = styled(Box)({
  maxWidth: 320,
  maxHeight: 320,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

const Photo = styled(Image)(() => ({
  filter: "grayscale(80%)",
}));

const HeroSection: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { scrollTo } = useScrollSpy();

  const cvDownloadLink = "/assets/CV.pdf";
  const cvDownloadFileName = `${t("profile.full_name")} - CV.pdf`;

  const handleClickHireMe: MouseEventHandler = (e) => {
    e.preventDefault();
    scrollTo(e.currentTarget.getAttribute("href")!, {
      update: true,
      behavior: "smooth",
    });
  };

  return (
    <Section
      route={SectionRoute.HERO_BANNER}
      sx={{
        height: "100vh",
        position: "relative",
        maxHeight: { xl: 1080 },
      }}
    >
      {(active) => (
        <Container sx={{ height: "100%" }}>
          <Grid container sx={{ height: "100%", pt: { xs: 7, sm: 0 } }}>
            <Grid item xs={2} md={0.5} />
            <Grid
              item
              xs={8}
              md={4}
              lg={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Fade in={active} timeout={1000} appear>
                <PhotoWrapper>
                  <Photo
                    src="/assets/hero-avatar.jpg"
                    alt=""
                    width={320}
                    height={320}
                  />
                </PhotoWrapper>
              </Fade>
            </Grid>
            <Grid item xs={2} md={0.5} lg={0.25} />
            <Grid
              item
              xs={12}
              md={7}
              lg={6}
              display="flex"
              justifyContent={{ xs: "flex-start", md: "center" }}
              flexDirection="column"
            >
              <Typography
                variant="h6"
                component="span"
                sx={{
                  letterSpacing: theme.spacing(0.5),
                  color: theme.palette.primary.main,
                  mb: 2,
                }}
              >
                {t("home:hero_banner.hello")}
              </Typography>
              <Fade in={active} timeout={750} appear>
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{ mb: 2, whiteSpace: "nowrap", overflow: "hidden" }}
                >
                  <Trans
                    i18nKey="home:hero_banner.i"
                    components={[
                      <TypeCarousel
                        key={0}
                        phrases={[
                          t("home:hero_banner.intro_phrase_1", {
                            name: t("profile.full_name"),
                          }),
                          t("home:hero_banner.intro_phrase_2"),
                          t("home:hero_banner.intro_phrase_3"),
                        ]}
                      />,
                    ]}
                  />
                </Typography>
              </Fade>
              <Fade
                in={active}
                timeout={750}
                style={{ transitionDelay: "500ms" }}
                appear
              >
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontFamily: "Poppins", mb: 1 }}
                >
                  {t("home:hero_banner.short_description")}
                </Typography>
              </Fade>
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                {links.map(([key, label, href, icon], index) => (
                  <Fade
                    key={key}
                    in={active}
                    timeout={750}
                    style={{ transitionDelay: `${index * 250}ms` }}
                    appear
                  >
                    <IconButton
                      href={href}
                      aria-label={t(label)}
                      size="large"
                      edge="start"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon}
                    </IconButton>
                  </Fade>
                ))}
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button
                  href={SectionRoute.ABOUT}
                  variant="outlined"
                  size="large"
                  onClick={handleClickHireMe}
                >
                  {t("button.about_me")}
                </Button>
                <Button
                  href={cvDownloadLink}
                  download={cvDownloadFileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                >
                  {t("button.download_cv")}
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <AnimatedMouse />
        </Container>
      )}
    </Section>
  );
};

export default HeroSection;
