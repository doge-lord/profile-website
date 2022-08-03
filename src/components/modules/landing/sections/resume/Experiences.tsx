import type { FC } from "react";
import { useTranslation } from "react-i18next";
import Timeline from "@mui/lab/Timeline";

import ExperienceItem, { Props as ExperienceProps } from "./ExperienceItem";

type Props = {
  active: boolean;
};

const Experiences: FC<Props> = ({ active }) => {
  const { t } = useTranslation();

  return (
    <Timeline position="right" sx={{ p: 0, mb: 0 }}>
      {Array.from<Omit<ExperienceProps, "index">>(
        t("home:resume.experience_list", { returnObjects: true })
      ).map((props, index, list) => (
        <ExperienceItem
          index={index}
          key={props.main_responsibility}
          {...props}
          active={active}
          last={list.length === index + 1}
        />
      ))}
    </Timeline>
  );
};

export default Experiences;
