import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import LifetimeStats from './LifetimeStats';
import InitialStates from './InitialStates';
import TimeSeriesBarChart from './TimeSeriesBarChart';
import Badges from './Badges';
import Friends from './Friends';

class Dashboard extends Component {
  constructor(props) {
    super(props),
    this.state = InitialStates
  }

  fetchFitbitData(url, fitbitToken, stateKey, dataKey) {
    axios({
      method: 'get',
      url: url,
      headers: { 'Authorization': 'Bearer ' + fitbitToken },
      mode: 'cors'
    })
    .then(response => {
      console.log(response.data)
      this.setState({[stateKey]: response.data})
    })
    .catch(error => console.log(error))

  }
  componentDidMount() {
    if(window.location.hash){
      let fitbitToken = window.location.hash.slice(1).split("&")[0].replace("access_token=","")
      console.log('fitbitToken=', fitbitToken )
      this.setState({loggedIn: true})

      this.fetchFitbitData('https://api.fitbit.com/1/user/-/profile.json', fitbitToken, 'user')

      this.fetchFitbitData('https://api.fitbit.com/1/user/-/activities.json', fitbitToken, 'lifetimeStats')

      this.fetchFitbitData('https://api.fitbit.com/1/user/-/badges.json', fitbitToken, 'badges')

      this.fetchFitbitData('https://api.fitbit.com/1/user/-/activities/steps/date/today/1m.json', fitbitToken, 'steps')

      this.fetchFitbitData('https://api.fitbit.com/1/user/-/activities/distance/date/today/1m.json', fitbitToken, 'distance')
    }
  }
  
  render() {
    return (
      <div className="container">
        <header className="text-center">
          <span className="float-right">{this.state.user.user.displayName}</span>
          <h1 className="page-header">React Fit</h1>        
          <p className="lead">Your personal fitness dashboardf</p>
        </header>

        { !this.state.loggedIn &&
          <div className="text-center">
            <a href="https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22CZTC&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800">
                Log in with fitbit
            </a>
          </div>
        }
        <div className="row">
          <div className="col-lg-3">
            <LifetimeStats lifetimeStats={this.state.lifetimeStats} />
            <Badges badges={this.state.badges.badges} />
          </div>
          <div className="col-lg-6">
            <TimeSeriesBarChart data={this.state.steps["activities-steps"]} title="Steps" yMax={8000} />
            <TimeSeriesBarChart data={this.state.distance["activities-distance"]} title="Distance (miles)" yMax={6} />
            <div className="card">
              <div className="card-heading"><h4>Distance (miles)</h4></div>
            </div>

          </div>
          <div className="col-lg-2 col-lg-offset-1">
              <Friends friends={this.state.friends.friends} />
          </div>
      </div>
    </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard />,
    document.body.appendChild(document.createElement('div')),
  )
})
