import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import react_apps from "./data/react_apps";
import react_components from "./data/react_components";
import {
  RaCocktailDb, 
  RaColorGenerator, 
  RaExpenseTracker, 
  RaGithubUsers, 
  RaGroceryBuddy, 
  RaHackerNews,
  RaMarkdownPreview,
  RaPokedexApp,
  RaQuizApp,
  RaToursPromo,
} from "./react_apps"
import { 
  RcAccordion,
  RcBirthdayReminder,
  RcBubbleMenus,
  RcDarkMode,
  RcNavbar,
  RcPagination,
  RcRandomUser,
  RcRestaurantMenu
 } from "./react_components";

const Portfolio = () => {

  return (
    <Tabs>

      {/* Tab List */}
      <TabList className="portfolio-tab-list">
        <Tab>REACT APPS</Tab>
        <Tab>REACT COMPONENTS</Tab>
        {/* <Tab>FULL STACK APPS</Tab> */}
        {/* <Tab>UX DESIGN</Tab> */}
      </TabList>
      {/* ----------------------------------------------------------------------------------------------------- */}

      <div className="portfolio-tab-content">
        {/* Start REACT APPS Tab */}
        <TabPanel>
          <ul className="row grid justify-content-center">
              <RaCocktailDb data={react_apps[0]}/> {/* <!-- Cocktail DB --> */}
              <RaColorGenerator data={react_apps[1]}/> {/* <!-- Color Generator --> */}
              <RaExpenseTracker data={react_apps[2]}/> {/* <!-- Expense Tracker --> */}
              <RaGithubUsers data={react_apps[3]}/> {/* <!-- Github Users --> */}
              <RaGroceryBuddy data={react_apps[4]}/> {/* <!-- Grocery Buddy --> */}
              <RaHackerNews data={react_apps[5]}/> {/* <!-- Hacker News --> */}
              <RaMarkdownPreview data={react_apps[6]}/> {/* <!-- Markdown Preview --> */}
              <RaPokedexApp data={react_apps[7]}/> {/* <!-- Pokedex App --> */}
              <RaQuizApp data={react_apps[8]}/> {/* <!-- Quiz App --> */}
              <RaToursPromo data={react_apps[9]}/> {/* <!-- Tours Promo Page --> */}
          </ul>
        </TabPanel>
        {/* End REACT APPS Tab */}
        {/* ----------------------------------------------------------------------------------------------------- */}

        {/* Start REACT COMPONENTS Tab */}
        <TabPanel>
          <ul className="row grid justify-content-center">
          <RcAccordion data={react_components[0]}/> {/* <!-- Accordion --> */}
          <RcBirthdayReminder data={react_components[1]}/> {/* <!-- Birthday Reminder --> */}
          <RcBubbleMenus data={react_components[2]}/> {/* <!-- Bubble Menus --> */}
          <RcDarkMode data={react_components[3]}/> {/* <!-- Dark Mode --> */}
          <RcNavbar data={react_components[4]}/> {/* <!-- Navbar --> */}
          <RcPagination data={react_components[5]}/> {/* <!-- Pagination --> */}
          <RcRandomUser data={react_components[6]}/> {/* <!-- Random User --> */}
          <RcRestaurantMenu data={react_components[7]}/> {/* <!-- Restaurant Menu --> */}

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
