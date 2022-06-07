import React from "react";
import {
  AboutSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Portfolio Sample" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="개발자를 위한, 최고의 선택" />
        <InterestsSection sectionId="details" heading="특장점" />
        <ProjectsSection sectionId="features" heading="주요 기능" />
      </Page>
    </>
  );
}
