import './App.css';
import Header from './components/Header/Header';
import { Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import ListOfAppsOnAssessment from './components/Content/List-of-apps/List-of-apps-on-assessment';
import Search from './components/Content/Search/Search';
import Notifications from './components/Content/Notifications/Notifications';
import PersonalPage from './components/Content/Personal-page/Personal-page';
import PersonalPageManager from './components/Content/Personal-page/Personal-page-manager';
import ListOfAppsOnAssessmentManager from './components/Content/List-of-apps/List-of-apps-on-assessment-manager';
import Application from './components/Content/Application/Application';


const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content-container">
        <Nav />
        <div className="app-content">
          <Route path='/app/list-of-apps-on-assessment' render={() => <ListOfAppsOnAssessment />} />
          <Route path='/app/list-of-apps-on-assessment-manager' render={() => <ListOfAppsOnAssessmentManager />} />
          <Route path='/app/search' render={() => <Search />} />
          <Route path='/app/notifications' render={() => <Notifications />} />
          <Route path='/app/personal-page' render={() => <PersonalPage />} />
          <Route path='/app/personal-page-manager' render={() => <PersonalPageManager />} />
          
        </div>

      </div>
    </div>
  );
}

export default App;
