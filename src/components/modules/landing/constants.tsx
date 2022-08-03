import type { ReactElement } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";

export enum SectionRoute {
  HERO_BANNER = "/",
  ABOUT = "/about",
  RESUME = "/resume",
  CONTACT = "/contact",
}

export const sections: Array<[string, string, ReactElement]> = [
  [
    SectionRoute.HERO_BANNER,
    "navigation.home",
    <HomeOutlinedIcon key="home" />,
  ],
  [
    SectionRoute.ABOUT,
    "navigation.about",
    <PsychologyOutlinedIcon key="about" />,
  ],
  [
    SectionRoute.RESUME,
    "navigation.resume",
    <BusinessCenterOutlinedIcon key="resume" />,
  ],
  [
    SectionRoute.CONTACT,
    "navigation.contact",
    <PhoneOutlinedIcon key="contact" />,
  ],
];

export const links: Array<[string, string, string, ReactElement]> = [
  [
    "linkedin",
    "label.linkedin",
    process.env.NEXT_PUBLIC_LINKEDIN_URL!,
    <LinkedInIcon key="linkedin" />,
  ],
  [
    "github",
    "label.github",
    process.env.NEXT_PUBLIC_GITHUB_URL!,
    <GitHubIcon key="github" />,
  ],
  [
    "email",
    "label.email",
    `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
    <EmailOutlinedIcon key="email" />,
  ],
];

export const contacts: Array<[string, string, string, ReactElement]> = [
  [
    "email",
    "label.email",
    process.env.NEXT_PUBLIC_EMAIL!,
    <EmailOutlinedIcon key="email" fontSize="large" />,
  ],
  [
    "linkedin",
    "label.linkedin",
    process.env.NEXT_PUBLIC_LINKEDIN_URL!,
    <LinkedInIcon key="linkedin" fontSize="large" />,
  ],
  [
    "phone",
    "label.phone",
    process.env.NEXT_PUBLIC_PHONE_NUMBER!,
    <PhoneInTalkOutlinedIcon key="github" fontSize="large" />,
  ],
];
