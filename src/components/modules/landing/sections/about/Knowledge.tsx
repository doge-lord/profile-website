import type { FC } from "react";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Fade from "@mui/material/Fade";
import { useTranslation } from "react-i18next";

import type { Translation } from "@types";

type KnowledgeList = Translation["home"]["about"]["knowledge_list"];

type Props = {
  active: boolean;
};

// Just randomly generated to prevent mismatch on client and server rendering
const transitionDelay = [
  "639ms",
  "157ms",
  "792ms",
  "931ms",
  "403ms",
  "373ms",
  "648ms",
  "182ms",
  "685ms",
  "604ms",
];

const Knowledge: FC<Props> = ({ active }) => {
  const { t } = useTranslation();

  const knowledgeChips = (
    Array.from(
      t("home:about.knowledge_list", { returnObjects: true })
    ) as KnowledgeList
  ).map((item, index) => (
    <Fade
      key={item}
      in={active}
      timeout={500}
      appear
      style={{
        transitionDelay: transitionDelay[index % transitionDelay.length],
      }}
    >
      <Grid item xs="auto">
        <Chip label={item} variant="outlined" />
      </Grid>
    </Fade>
  ));

  return <>{knowledgeChips}</>;
};

export default Knowledge;
