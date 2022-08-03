import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Fade from "@mui/material/Fade";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export type Props = {
  index: number;
  active?: boolean;
  last?: boolean;
  company?: string;
  company_address?: string;
  company_duration?: string;
  title: string;
  date_period: string;
  location?: string;
  main_responsibility: string;
  responsibilities: Array<string>;
};

const List = styled("ul")(({ theme }) => ({
  listStyleType: "square",
  paddingLeft: theme.spacing(3),
}));

const StyledTimelineDot = styled(TimelineDot)(() => ({
  borderRadius: 0,
  transformOrigin: "center",
  transform: "rotate(45deg)",
}));

const ExpandMore = styled((props: { expand: boolean } & IconButtonProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// Just randomly generated to prevent mismatch on client and server rendering
const randomTranstionProps: Array<
  [number, number, { transitionDelay: string }, { transitionDelay: string }]
> = [
  [942, 467, { transitionDelay: "132ms" }, { transitionDelay: "436ms" }],
  [800, 322, { transitionDelay: "204ms" }, { transitionDelay: "201ms" }],
  [550, 344, { transitionDelay: "94ms" }, { transitionDelay: "253ms" }],
  [529, 748, { transitionDelay: "14ms" }, { transitionDelay: "248ms" }],
  [1022, 323, { transitionDelay: "212ms" }, { transitionDelay: "354ms" }],
];

const ExperienceItem: FC<Props> = ({
  last = false,
  active = false,
  index,
  ...props
}) => {
  const {
    company,
    company_address,
    company_duration,
    title,
    date_period,
    location,
    main_responsibility,
    responsibilities,
  } = props;

  const { t } = useTranslation();
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [timeout1, timeout2, delay1, delay2] =
    randomTranstionProps[index % randomTranstionProps.length];

  const handleExpandClick = () => {
    setExpanded((currentExpanded) => !currentExpanded);
  };

  return (
    <>
      {company && (
        <TimelineItem>
          <TimelineOppositeContent
            sx={{
              display: { xs: "none", sm: "block" },
              flex: {
                xs: 0,
                sm: "0 0 100px",
                md: "0 0 200px",
              },
              py: 0,
              pl: 0,
              transform: `translateY(${theme.spacing(3.5)})`,
              color: "primary.light",
            }}
          >
            {company_duration}
          </TimelineOppositeContent>
          <TimelineSeparator
            sx={{ transform: `translateY(${theme.spacing(3)})` }}
          >
            <StyledTimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ pr: 0 }}>
            <Fade in={active} timeout={timeout1} style={delay1} appear>
              <Card raised>
                <CardHeader
                  title={
                    <Typography variant="h5" component="h5" color="primary">
                      {company}
                    </Typography>
                  }
                  subheader={
                    <>
                      {company_duration && (
                        <Typography
                          variant="subtitle1"
                          color="primary.light"
                          sx={{ display: { sm: "none" } }}
                        >
                          {company_duration}
                        </Typography>
                      )}
                      <Typography variant="subtitle1" color="text.secondary">
                        {company_address}
                      </Typography>
                    </>
                  }
                  disableTypography
                />
              </Card>
            </Fade>
          </TimelineContent>
        </TimelineItem>
      )}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            display: { xs: "none", sm: "block" },
            flex: {
              xs: 0,
              sm: "0 0 100px",
              md: "0 0 200px",
            },
            py: 0,
            pl: 0,
            transform: `translateY(${theme.spacing(3.5)})`,
            color: "text.secondary",
          }}
        >
          {date_period}
        </TimelineOppositeContent>
        <TimelineSeparator
          sx={{ transform: `translateY(${theme.spacing(3)})` }}
        >
          <StyledTimelineDot variant="outlined" />
          {!last && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent sx={{ pr: 0 }}>
          <Fade in={active} timeout={timeout2} style={delay2} appear>
            <Card>
              <CardHeader
                title={
                  <Typography variant="h6" component="h5">
                    {title}
                  </Typography>
                }
                subheader={
                  <>
                    {date_period && (
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        sx={{ display: { sm: "none" } }}
                      >
                        {date_period}
                      </Typography>
                    )}
                    {location && (
                      <Typography variant="subtitle1" color="text.secondary">
                        {location}
                      </Typography>
                    )}
                    {main_responsibility && (
                      <Typography variant="subtitle1">
                        {main_responsibility}
                      </Typography>
                    )}
                  </>
                }
                disableTypography
                action={
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label={t("label.show_more")}
                    sx={{ color: "primary.main" }}
                  >
                    <ExpandMoreOutlinedIcon />
                  </ExpandMore>
                }
              />
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent sx={{ pt: 0 }}>
                  <List>
                    {responsibilities?.map((responsibility, index) => (
                      <Typography key={index} variant="body2" component="li">
                        {responsibility}
                      </Typography>
                    ))}
                  </List>
                </CardContent>
              </Collapse>
            </Card>
          </Fade>
        </TimelineContent>
      </TimelineItem>
    </>
  );
};

export default ExperienceItem;
