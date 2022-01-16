import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import react_apps from "./data/react_apps";
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
} from "./projects"

const Portfolio = () => {

  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab>REACT APPS</Tab>
        <Tab>REACT COMPONENTS</Tab>
        {/* <Tab>FULL STACK APPS</Tab> */}
        {/* <Tab>UX DESIGN</Tab> */}
      </TabList>

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
