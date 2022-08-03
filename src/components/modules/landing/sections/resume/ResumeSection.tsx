import type { FC } from "react";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Section from "@components/modules/landing/layout/Section";
import { SectionRoute } from "@components/modules/landing/constants";
import TitleHeader from "@components/common/styled-header/TitleHeader";

import Experiences from "./Experiences";
import Education from "./Education";
import Trainings from "./Trainings";

const ResumeSection: FC = () => {
  const { t } = useTranslation();

  return (
    <Section route={SectionRoute.RESUME}>
      {(active) => (
        <Container>
          <TitleHeader variant="h2" sx={{ pt: 8, mb: 4 }}>
            {t("home:resume.title")}
          </TitleHeader>
          <Grid container rowSpacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12}>
              <Typography variant="h3">
                {t("home:resume.experience")}
              </Typography>
              <Experiences active={active} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                {t("home:resume.education")}
              </Typography>
              <Education active={active} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                {t("home:resume.trainings")}
              </Typography>
              <Trainings active={active} />
            </Grid>
          </Grid>
        </Container>
      )}
    </Section>
  );
};

export default ResumeSection;
