import type { FC } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

import type { Translation } from "@types";

type PersonalInfo = Translation["home"]["about"]["personal_information"];

type Props = {
  active: boolean;
};

const PersonalInformation: FC<Props> = ({ active }) => {
  const { t } = useTranslation();

  const info = (
    Array.from(
      t("home:about.personal_information", {
        returnObjects: true,
        email: process.env.NEXT_PUBLIC_EMAIL,
      })
    ) as PersonalInfo
  ).map(({ label, value }) => (
    <Grid key={label} item xs={12} lg={6}>
      <Stack direction="row" spacing={1}>
        <Typography variant="body1" component="span">
          <strong>{t(label)}:</strong>
        </Typography>
        <Fade in={active} timeout={1000} appear>
          <Typography
            variant="body1"
            component="span"
            sx={{ whiteSpace: "nowrap" }}
          >
            {label === "Email" ? (
              <Link href={`mailto:${value}`}>{value}</Link>
            ) : (
              value
            )}
          </Typography>
        </Fade>
      </Stack>
    </Grid>
  ));

  return <>{info}</>;
};

export default PersonalInformation;
