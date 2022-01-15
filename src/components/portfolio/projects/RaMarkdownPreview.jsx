import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RaMarkdownPreview = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Markdown Preview</h3>
          <p className="text-center">Add your markdown text and see it rendered in real time Ⓜ️⬇️</p>
          <div className="row open-sans-font">
          <div className="col-12 col-sm-4 mb-2">
              <i className="fa fa-folder-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">Mardown Preview</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-4 mb-2">
              <i className="fa fa-globe pr-2"></i>
              <span className="project-label">Live App </span>{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://ioannis-sporidis.github.io/ra-markdown-preview/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Here
                </a>
              </span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-4 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">App Repo </span>{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://github.com/ioannis-sporidis/ra-markdown-preview"
                  target="_blank"
                  rel="noreferrer"
                >
                  Here
                </a>
              </span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-4 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Type </span>:{" "}
              <span className="ft-wt-600 uppercase">React App</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-4 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">personal project</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-4 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">React.js</span>
            </div>
            {/* End .col */}

          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <Slider {...settings}>
          <div className="slide_item">
            <img src="img/projects/ra-markdown-preview-1.jpg" alt="slide 1" />
          </div>
          <div className="slide_item">
            <img src="img/projects/ra-markdown-preview-2.jpg" alt="slide 2" />
          </div>
          <div className="slide_item">
            <img src="img/projects/ra-markdown-preview-3.jpg" alt="slide 3" />
          </div>
        </Slider>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default RaMarkdownPreview;
