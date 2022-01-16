import { useContext } from "react";
import { PortfolioContext } from "../../../context/context";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RcBubbleMenus = ({ data }) => {
  const { isOpen02, toggleModal02 } = useContext(PortfolioContext);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
    <li
      data-aos="fade-right"
      data-aos-duration="1200"
      data-aos-delay={data.delay}
    >
      <figure onClick={toggleModal02}>
        <img src={data.image1} alt={data.title} />
        <div className=" hover-content-wrapper">
          <span className="content-title">{data.title}</span>
        </div>
      </figure>

      <Modal
        isOpen={isOpen02}
        onRequestClose={toggleModal02}
        contentLabel="My dialog"
        className="custom-modal dark"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModal02}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>

          <div className="box_inner portfolio">
            <div className="slideshow">
              <figure>
                {/* Project Details Starts */}
                <figcaption>
                  <h3>{data.title}</h3>
                  <p className="text-center">{data.description}</p>
                  <div className="row open-sans-font">
                    <div className="col-12 col-sm-4 mb-2">
                      <i className="fa fa-folder-o pr-2"></i>
                      <span className="project-label">Project </span>:{" "}
                      <span className="ft-wt-600 uppercase">{data.title}</span>
                    </div>
                    {/* End .col */}

                    <div className="col-12 col-sm-4 mb-2">
                      <i className="fa fa-globe pr-2"></i>
                      <span className="project-label">Live App </span>{" "}
                      <span className="ft-wt-600 uppercase">
                        <a
                          href={data.live_url}
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
                          href={data.repo_url}
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
                      <span className="ft-wt-600 uppercase">{data.type}</span>
                    </div>
                    {/* End .col */}

                    <div className="col-12 col-sm-4 mb-2">
                      <i className="fa fa-user-o pr-2"></i>
                      <span className="project-label">Client </span>:{" "}
                      <span className="ft-wt-600 uppercase">{data.client}</span>
                    </div>
                    {/* End .col */}

                    <div className="col-12 col-sm-4 mb-2">
                      <i className="fa fa-code pr-2"></i>
                      <span className="project-label">Langages </span>:{" "}
                      <span className="ft-wt-600 uppercase">
                        {data.language}
                      </span>
                    </div>
                    {/* End .col */}
                  </div>
                  {/* End .row */}
                </figcaption>
                {/* Project Details Ends */}

                {/*  Main Project Content Starts */}
                <Slider {...settings}>
                  <div className="slide_item">
                    <img
                      src={data.image1}
                      alt="slide 1"
                    />
                  </div>
                  <div className="slide_item">
                    <img
                      src={data.image2}
                      alt="slide 2"
                    />
                  </div>
                  <div className="slide_item">
                    <img
                      src={data.image3}
                      alt="slide 3"
                    />
                  </div>
                </Slider>
                {/* Main Project Content Ends */}
              </figure>
            </div>
          </div>
        </div>
      </Modal>
      </li>
    </>
  );
};
export default RcBubbleMenus;
