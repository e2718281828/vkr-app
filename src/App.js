import './App.css';
import Header from './components/Header/Header';
import { Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import ListOfAppsOnAssessment from './components/Content/List-of-apps/List-of-apps-on-assessment';
import Search from './components/Content/Search/Search';
import Notifications from './components/Content/Notifications/Notifications';
import PersonalPage from './components/Content/Personal-page/Personal-page';
import Application from './components/Content/Application/Application';
import React from 'react';
import ListOfAppsInWork from './components/Content/List-of-apps/List-of-apps-in-work';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      manager: props.manager,
      error: null,
      isLoaded: false,
      applications: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3030/applications")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            applications: result,
            isLoaded: true
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }


  switchUser = () => {
    this.setState({
      user: !this.state.user
    });
  }

  render() {

    const { isLoaded, error, applications } = this.state;

    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    }
    
    return (
      <div className="app">
        <Header />
        <div className="content-container">
          <Nav />
          <div className="app-content">
            <Route path='/app/list-of-apps-on-assessment' render={() => <ListOfAppsOnAssessment manager={this.state.manager} />} />
            <Route path='/app/list-of-apps-in-work' render={() => <ListOfAppsInWork manager={this.state.manager} />} />
            <Route path='/app/search' render={() => <Search />} />
            <Route path='/app/notifications' render={() => <Notifications />} />
            <Route path='/app/personal-page' render={() => <PersonalPage manager={this.state.manager} />} />

            {applications.map(item => (
              <div>
                <Route path={'/app/application-info/' + item.id} render={() => <Application data={item} manager={this.state.manager} />} />
              </div>
            ))}
            
          </div>

        </div>
      </div>
    );
  }

}

export default App;
