import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Fade from "@mui/material/Fade";

type Education = {
  title: string;
  school: string;
  location?: string;
  date_period: string;
};

type Props = {
  active: boolean;
};

// Just randomly generated to prevent mismatch on client and server rendering
const randomTranstionProps: Array<[number, { transitionDelay: string }]> = [
  [310, { transitionDelay: "77ms" }],
  [1091, { transitionDelay: "232ms" }],
  [890, { transitionDelay: "153ms" }],
  [969, { transitionDelay: "160ms" }],
  [760, { transitionDelay: "227ms" }],
];

const Education: FC<Props> = ({ active }) => {
  const { t } = useTranslation();

  const education = useMemo(
    () =>
      Array.from<Education>(
        t("home:resume.education_list", { returnObjects: true })
      ).map(({ title, school, location, date_period }, index) => {
        const [timeout, delay] =
          randomTranstionProps[index % randomTranstionProps.length];

        return (
          <Fade key={index} in={active} timeout={timeout} style={delay} appear>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title={
                    <Typography
                      variant="h6"
                      component="h5"
                      color="primary.light"
                    >
                      {title}
                    </Typography>
                  }
                  subheader={
                    <>
                      <Typography variant="subtitle1" color="text.secondary">
                        {date_period}
                      </Typography>
                      <Typography variant="subtitle1">
                        {school}
                        {location && (
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            component="span"
                          >
                            , {location}
                          </Typography>
                        )}
                      </Typography>
                    </>
                  }
                  disableTypography
                />
              </Card>
            </Grid>
          </Fade>
        );
      }),
    [t, active]
  );

  return (
    <Grid container rowSpacing={2} columnSpacing={2}>
      {education}
    </Grid>
  );
};

export default Education;
