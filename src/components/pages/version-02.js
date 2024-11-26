import React from "react";
import AchievementV2 from "../achievementv2";
import Achievev2 from "../achievev2";
import Author from "../author";
import ChapterPreviewV2 from "../chapter-preview-v2";
import Chapterv2 from "../chapterv2";
import Contact from "../contact";
import Ctav2 from "../ctav2";
import FunFacts from "../fun-facts";
import Footer from "../global/footer";
import Header from "../global/header";
import Herov2 from "../herov2";
import Pricing from "../pricing";
import Testimonialv2 from "../testimonialv2";
import Gallery from "../gallery";

const Version02 = ({header, footer}) => {
  const {menu} = footer;
  return (
    <>
      <Header header={header} />
      <Herov2 isBg="yes"/>
      <Achievev2 isBg=""/>
      <Chapterv2 isBg="yes" />
      <Gallery isBg="" />
      <Ctav2 isBg=""/>
      <ChapterPreviewV2 isBg="" />
      <Pricing isBg="yes"/>
      <Author isBg="" />
      <AchievementV2 isBg="yes"/>
      <FunFacts isBg="" />
      <Testimonialv2 isBg="yes"/>
      <Contact isBg=""/>
      <Footer isBg="yes" menu={menu} />
    </>
  );
};

export default Version02;
