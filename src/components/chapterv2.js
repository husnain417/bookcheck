import React from "react";
import chapterData from "../data/chapter.json";

const ChapterV2 = ({ isBg }) => {
  const { chapterv2 } = chapterData;

  return (
    // <!-- ========== Chapter section start ========== -->
    <section
      id="chapters"
      className={`section-padding chapter ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{chapterv2.subtitle}</span>
              <h2 className="display-6">{chapterv2.title}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {chapterv2.chapterItem?.map((data, i) => (
            <div
              key={data.id}
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(i + 2) * 50}
            >
              <div className="chapter__item h-100 translateEffect1">
                <p>{data.chapter}</p>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- ========== Chapter section end ========== -->
  );
};

export default ChapterV2;
