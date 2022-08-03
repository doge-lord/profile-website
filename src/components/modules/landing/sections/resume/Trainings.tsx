import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Fade from "@mui/material/Fade";

type Training = {
  title: string;
  organization: string;
  ref?: string;
  issued_date: string;
};

type Props = {
  active: boolean;
};

// Just randomly generated to prevent mismatch on client and server rendering
const randomTranstionProps: Array<[number, { transitionDelay: string }]> = [
  [428, { transitionDelay: "341ms" }],
  [1033, { transitionDelay: "4ms" }],
  [470, { transitionDelay: "296ms" }],
  [481, { transitionDelay: "394ms" }],
  [442, { transitionDelay: "492ms" }],
];

const Trainings: FC<Props> = ({ active }) => {
  const { t } = useTranslation();

  const education = useMemo(
    () =>
      Array.from<Training>(
        t("home:resume.training_list", { returnObjects: true })
      ).map(({ title, organization, ref, issued_date }, index) => {
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
                      <Typography variant="body1">{organization}</Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {issued_date}{" "}
                        {ref && (
                          <Typography
                            variant="subtitle2"
                            component="span"
                            color="text.secondary"
                            sx={{ fontStyle: "italic" }}
                          >
                            {ref}
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
    <Grid container rowSpacing={2} columnSpacing={2} mb={4}>
      {education}
    </Grid>
  );
};

export default Trainings;
