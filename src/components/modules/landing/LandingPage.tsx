import type { FC, PropsWithChildren } from "react";
import Head from "next/head";

import AboutSection from "@components/modules/landing/sections/about/AboutSection";
import Layout from "@components/modules/landing/layout/Layout";
import HeroSection from "@components/modules/landing/sections/hero/HeroSection";
import ResumeSection from "@components/modules/landing/sections/resume/ResumeSection";
import ContactSection from "@components/modules/landing/sections/contact/ContactSection";

const LandingPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_FULL_NAME}</title>
      </Head>
      <Layout>
        {children}
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default LandingPage;
