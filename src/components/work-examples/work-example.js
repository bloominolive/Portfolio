import React from "react";
import WebsiteSection from "./website-section";
import bfScreenshot from "../../images/bf-screenshot.png";
import bfScreenshot2 from "../../images/bf-screenshot2.png";
import bfScreenshot3 from "../../images/bf-screenshot3.png";
import flapmapScreenshot from "../../images/flapmap-screenshot.png";
import flapmapScreenshot2 from "../../images/flapmap-screenshot2.png";
import flapmapScreenshot3 from "../../images/flapmap-screenshot3.png";
import orcocScreenshot from "../../images/orcoc-screenshot.png";
import orcocScreenshot2 from "../../images/orcoc-screenshot2.png";
import orcocScreenshot3 from "../../images/orcoc-screenshot3.png";

// Data Array for Websites
const websiteData = [
  {
    title: "Bountiful Foods",
    description:
      "Bountiful Foods is a fun, exciting smoothie shop that uses high quality, local, and organic ingredients. It was a pleasure to design something bright and energetic for them!",
    images: [
      {
        src: bfScreenshot,
        alt: "bountiful-foods",
        link: "https://bloominolive.github.io/wdd230/bountiful/index.html",
      },
      {
        src: bfScreenshot2,
        alt: "bountiful-foods",
        link: "https://bloominolive.github.io/wdd230/bountiful/fresh.html",
      },
      {
        src: bfScreenshot3,
        alt: "bountiful-foods",
        link: "https://bloominolive.github.io/wdd230/bountiful/about.html",
      },
    ],
    text: [
      "I designed a custom ordering system where users can select ingredients and mix it their way!",
      "Check out local history and submit a contact form.",
    ],
  },
  {
    title: "FlapMap",
    description:
      "FlapMap is a collaborative birdwatching platform where users can log sightings and explore local bird varieties.",
    images: [
      {
        src: flapmapScreenshot,
        alt: "flapmap",
        link: "https://main--delicate-cobbler-f882fd.netlify.app/",
      },
      {
        src: flapmapScreenshot2,
        alt: "flapmap-explore",
        link: "https://main--delicate-cobbler-f882fd.netlify.app/birdslist/birdslist",
      },
      {
        src: flapmapScreenshot3,
        alt: "flapmap-journal",
        link: "https://main--delicate-cobbler-f882fd.netlify.app/birdsjournal/birdsjournalt",
      },
    ],
    text: [
      "Explore bird varieties and see what other birdwatchers have spotted in local areas based on zipcode and state. Used an API to bring in local data.",
      "Journal using local session storage where users can enter bird sightings and write about them. Links to bird API.",
    ],
  },
  {
    title: "Orlando Chamber of Commerce",
    description:
      "A visually stunning website to connect businesses and foster growth in the Orlando area.",
    images: [
      {
        src: orcocScreenshot,
        alt: "orcoc",
        link: "https://bloominolive.github.io/wdd230/chamber/index.html",
      },
      {
        src: orcocScreenshot2,
        alt: "orcoc",
        link: "https://bloominolive.github.io/wdd230/chamber/discover.html",
      },
      {
        src: orcocScreenshot3,
        alt: "orcoc",
        link: "https://bloominolive.github.io/wdd230/chamber/directory.html",
      },
    ],
    text: [
      "Displays demographic information and dynamically pulls data in.",
      "Loads list of local businesses with their websites and information to be displayed as list or grid.",
    ],
  },
];

export default function WorkExample() {

  //maps the data so it properly sets the correct data together in the section
  return (
    <>
      {websiteData.map((website, index) => (
        <WebsiteSection key={index} website={website} />
      ))}
    </>
  );
}
