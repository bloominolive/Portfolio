import React from "react";
import SectionHeader from "./section-header";
import WorkRow from "./work-row";

//pulls in the website and takes the images and description from each work example to properly display information and cut down on extra hard-coding
export default function WebsiteSection({ website }) {
  return (
    <>
      <SectionHeader title={website.title} />
      <div className="container mt-5 font-parkinsons">
        <WorkRow text={website.description} image={website.images[0]} />
        <WorkRow text={website.text[0]} image={website.images[1]} imageFirst />
        <WorkRow text={website.text[1]} image={website.images[2]} />
      </div>
    </>
  );
}
