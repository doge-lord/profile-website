import type { FC } from "react";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import { useTranslation } from "react-i18next";

import type { Translation } from "@types";
import LinearMeter from "@components/common/linear-meter/LinearMeter";

type SkillList = Translation["home"]["about"]["skill_list"];

type Props = {
  active: boolean;
};

// Just randomly generated to prevent mismatch on client and server rendering
const transitionDelay = [
  "119ms",
  "317ms",
  "447ms",
  "223ms",
  "169ms",
  "114ms",
  "209ms",
  "354ms",
  "309ms",
  "70ms",
];

const Skills: FC<Props> = ({ active }) => {
  const { t } = useTranslation();

  const skillBars = (
    Array.from(t("home:about.skill_list", { returnObjects: true })) as SkillList
  ).map(({ label, value }, index) => (
    <Fade
      key={label}
      in={active}
      timeout={750}
      style={{
        transitionDelay: transitionDelay[index % transitionDelay.length],
      }}
      appear
    >
      <Grid item xs={12}>
        <LinearMeter label={label} value={value} active={active} />
      </Grid>
    </Fade>
  ));

  return <>{skillBars}</>;
};

export default Skills;
