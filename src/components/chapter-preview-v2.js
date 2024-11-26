import React, { useEffect } from "react";
import data from "../data/chapterPreview.json";

const ChapterPreviewV2 = ({ isBg }) => {
  useEffect(() => {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });
    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    }
  }, []);
  const { chapterPreviewv2 } = data;

  return (
    // <!-- ========== Chapter preview section start ========== -->
    <section
      id="preview"
      className={`section-padding chapter-preview ${
        isBg === "yes" ? "bg-one" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{chapterPreviewv2.title}</span>
              <h2 className="display-6">{chapterPreviewv2.subtitle}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div
          className="chapter__preview2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="chapter__preview2-content">
            <div className="chapter__preview2-container">
              {chapterPreviewv2.chapters.map((data, i) => (
                <div
                  key={i}
                  className={`panel ${i === 0 ? "active" : ""}`}
                  style={{
                    backgroundImage: `url(${data.image})`,
                  }}
                >
                  <h3>{data.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Chapter preview section end ========== -->
  );
};

export default ChapterPreviewV2;
