import type { FC } from "react";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Trans, useTranslation } from "react-i18next";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

import { links } from "../constants";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const Footer: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <StyledFooter sx={{ pl: { sm: 9 } }}>
      <Container>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ height: theme.spacing(28) }}
        >
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              {t("footer.copyright")}
            </Typography>
            <Typography variant="subtitle1">{t("footer.message_1")}</Typography>
            <Typography variant="subtitle2">
              <Trans
                i18nKey="footer.message_2"
                components={[
                  <Link
                    key={0}
                    href={t("footer.source_code_link")}
                    target="_blank"
                    rel="noopener noreferrer"
                  />,
                ]}
              />
            </Typography>
            <Stack direction="row" spacing={1} display="inline-block">
              {links.map(([key, label, href, icon]) => (
                <IconButton
                  key={key}
                  href={href}
                  aria-label={t(label)}
                  size="large"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
