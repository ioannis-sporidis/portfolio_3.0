import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import RaCocktailDb from "./projects/RaCocktailDb";
import RaColorGenerator from "./projects/RaColorGenerator";
import RaExpenseTracker from "./projects/RaExpenseTracker";
import RaGithubUsers from "./projects/RaGihubUsers";
import RaGroceryBuddy from "./projects/RaGroceryBuddy";
import RaHackerNews from "./projects/RaHackerNews";
import RaMarkdownPreview from "./projects/RaMarkdownPreview";
import RaPokedex from "./projects/RaPokedex";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }
  function toggleModalNine() {
    setIsOpen9(!isOpen9);
  }

  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab>ALL</Tab>
        <Tab>REACT APPS</Tab>
        <Tab>REACT COMPONENTS</Tab>
        <Tab>FULL STACK APPS</Tab>
        <Tab>UX DESIGN</Tab>
      </TabList>

      <div className="portfolio-tab-content">
        {/* Start ALL Tab */}
        <TabPanel>
          <ul className="row grid justify-content-center">

            {/* Portfolio Item: Cocktail DB */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalOne}>
                <img src="img/projects/ra-cocktails-db-1.jpg" alt="Coctail DB cover" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Coctail DB</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaCocktailDb />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item: Color Generator --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure onClick={toggleModalTwo}>
                <img src="img/projects/ra-color-generator-1.jpg" alt="Color Generator cover" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Color Generator</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaColorGenerator />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item: Expense Tracker --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure onClick={toggleModalThree}>
                <img src="img/projects/ra-expense-tracker-1.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Expense Tracker</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaExpenseTracker />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item: Github Users --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalFour}
              >
                <img src="img/projects/ra-github-users-1.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Github Users</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaGithubUsers />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item: Grocery Buddy --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalFive}
              >
                <img src="img/projects/ra-grocery-buddy-1.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Grocery Buddy</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaGroceryBuddy />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item: Hacker News --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalSix}
              >
                <img src="img/projects/ra-hacker-news-1.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Hacker News</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSix}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaHackerNews />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item: Markdown Preview --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalSeven}
              >
                <img src="img/projects/ra-markdown-preview-1.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Markdown Preview</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen7}
                onRequestClose={toggleModalSeven}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSeven}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaMarkdownPreview />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item: Pokedex App --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalEight}
              >
                <img src="img/projects/ra-pokedex-app-1.jpg" alt="Portolio" />

                <div className=" hover-content-wrapper">
                  <span className="content-title">Pokedex App</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen8}
                onRequestClose={toggleModalEight}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalEight}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaPokedex />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            {/* <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalNine}
              >
                <img src="img/projects/project-9.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"> Behance Project</span>
                </div>
              </figure> */}

              {/* Start ModalNineContent */}
              {/* <Modal
                isOpen={isOpen9}
                onRequestClose={toggleModalNine}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalNine}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button> */}
                  {/* End close icon */}

                  {/* <div className="box_inner portfolio">
                    <ModalNineContent />
                  </div>
                </div>
              </Modal> */}
              {/* End  ModalNineContent */}
            {/* </li> */}
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>
        {/* End ALL Tab */}
        {/* ----------------------------------------------------------------------------------------------------- */}

        {/* Start REACT Tab */}
        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* Portfolio Item: Cocktail DB */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalOne}>
                <img src="img/projects/ra-cocktails-db-1.jpg" alt="Coctail DB cover" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Coctail DB</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaCocktailDb />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item: Color Generator --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure onClick={toggleModalTwo}>
                <img src="img/projects/ra-color-generator-1.jpg" alt="Color Generator cover" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Color Generator</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaColorGenerator />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item: Expense Tracker --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure onClick={toggleModalThree}>
                <img src="img/projects/ra-expense-tracker-1.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Expense Tracker</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaExpenseTracker />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item: Github Users --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalFour}
              >
                <img src="img/projects/ra-github-users-1.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Github Users</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaGithubUsers />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item: Grocery Buddy --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalFive}
              >
                <img src="img/projects/ra-grocery-buddy-1.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Grocery Buddy</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaGroceryBuddy />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item: Hacker News --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalSix}
              >
                <img src="img/projects/ra-hacker-news-1.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Hacker News</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSix}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaHackerNews />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item: Markdown Preview --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalSeven}
              >
                <img src="img/projects/ra-markdown-preview-1.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Markdown Preview</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen7}
                onRequestClose={toggleModalSeven}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSeven}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaMarkdownPreview />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item: Pokedex App --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalEight}
              >
                <img src="img/projects/ra-pokedex-app-1.jpg" alt="Portolio" />

                <div className=" hover-content-wrapper">
                  <span className="content-title">Pokedex App</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen8}
                onRequestClose={toggleModalEight}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalEight}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <RaPokedex />
                  </div>
                </div>
              </Modal>
            </li>
            {/* <!-- Portfolio Item Ends --> */}

          </ul>
        </TabPanel>
        {/* End REACT APPS Tab */}
        {/* ----------------------------------------------------------------------------------------------------- */}

        {/* Start REACT COMPONENTS Tab */}
        <TabPanel>
          <ul className="row grid justify-content-center">
          
          </ul>
        </TabPanel>
        {/* End REACT COMPONENTS Tab */}
        {/* ----------------------------------------------------------------------------------------------------- */}

        {/* Start FULL STACK APPS Tab */}
        <TabPanel>
          <ul className="row grid justify-content-center">
        
          </ul>
        </TabPanel>
        {/* End FULL STACK APPS Tab */}
        {/* ----------------------------------------------------------------------------------------------------- */}

        {/* Start UX DESIGN Tab */}
        <TabPanel>
          <ul className="row grid justify-content-center">

          </ul>
        </TabPanel>
        {/* End UX DESIGN Tab */}
        {/* ----------------------------------------------------------------------------------------------------- */}
      </div>
    </Tabs>
  );
};

export default Portfolio;
