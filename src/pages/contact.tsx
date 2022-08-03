import { useEffect } from "react";

import type { NextPageWithLayout } from "@pages/_app";
import LandingPage from "@components/modules/landing/LandingPage";
import { useScrollSpy } from "@components/modules/landing/layout/ScrollSpy";
import { SectionRoute } from "@components/modules/landing/constants";

const Page: NextPageWithLayout = () => {
  const { scrollTo } = useScrollSpy();

  useEffect(() => {
    scrollTo(SectionRoute.CONTACT);
  }, [scrollTo]);

  return null;
};

Page.getLayout = function getLayout(page) {
  return <LandingPage>{page}</LandingPage>;
};

export default Page;
