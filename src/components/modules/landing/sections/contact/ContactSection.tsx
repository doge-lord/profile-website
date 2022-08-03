import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Image from "next/image";

import Section from "@components/modules/landing/layout/Section";
import { contacts, SectionRoute } from "@components/modules/landing/constants";
import TitleHeader from "@components/common/styled-header/TitleHeader";

function getLink(key: string, value: string) {
  if (key === "email") {
    return `mailto:${value}`;
  }

  if (key === "phone") {
    return `tel:${value.replace(/\s/g, "")}`;
  }

  return value;
}

const PhotoWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

const Photo = styled(Image)(() => ({
  filter: "grayscale(40%)",
}));

const ContactSection: FC = () => {
  const { t } = useTranslation();

  return (
    <Section
      route={SectionRoute.CONTACT}
      sx={{
        backgroundColor: "background.alternate",
      }}
    >
      {() => (
        <Container>
          <Grid container columnSpacing={4} rowSpacing={4}>
            <Grid
              item
              md={6}
              mb={4}
              justifyContent="center"
              display={{ xs: "none", md: "flex" }}
            >
              <PhotoWrapper>
                <Photo
                  src="/assets/contact.jpg"
                  alt=""
                  width={725}
                  height={720}
                />
              </PhotoWrapper>
            </Grid>
            <Grid item xs={12} md={6} mb={8}>
              <TitleHeader variant="h2" sx={{ pt: 4, mb: 4 }}>
                {t("home:contact.title")}
              </TitleHeader>
              <Grid container rowSpacing={3} columnSpacing={3}>
                {contacts.map(([key, label, value, icon]) => (
                  <Grid item key={key} xs={12} md={12}>
                    <Paper elevation={4} sx={{ p: 3 }}>
                      <Grid container columnSpacing={4}>
                        <Grid
                          item
                          xs={0}
                          sm="auto"
                          alignItems="center"
                          justifyContent="center"
                          display={{ xs: "none", sm: "flex" }}
                        >
                          {icon}
                        </Grid>
                        <Grid item xs="auto">
                          <Box display="flex" alignItems="center">
                            <Box
                              display={{ xs: "flex", sm: "none" }}
                              sx={{ mr: 1 }}
                            >
                              {icon}
                            </Box>
                            <Typography variant="h6" component="span">
                              {t(label)}
                            </Typography>
                          </Box>
                          <Typography variant="body1">
                            <Link
                              href={getLink(key, value)}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {value.replace(/https?:\/\/(www.)?/, "")}
                            </Link>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </Section>
  );
};

export default ContactSection;
