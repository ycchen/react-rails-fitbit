import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import LifetimeStats from './LifetimeStats'
import InitialStates from './InitialStates'

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
            
            <div className="card">
              <div className="card-heading"><h4>Badges</h4></div>
              <div className="card-body">
                {this.state.badges.badges.map((badge, i) => {
                  return (
                    <div key={i}>
                      <h5>{badge.shortName}</h5>
                      <p><img src="{badge.image100px}" /></p>
                      <p>{badge.description}</p>
                      <p>Earned {badge.timeAchieved} times</p>
                      <p>Last on {badge.dateTime}</p>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-heading"><h4>Steps</h4></div>
              <div className="card-body">
               
              </div>
               
            </div>
            
            <div className="card">
              <div className="card-heading"><h4>Distance (miles)</h4></div>
            </div>

          </div>
          <div className="col-lg-2 col-lg-offset-1">
            <div className="card">
              <div className="card-heading"><h4>Your Friends</h4></div>
            </div>
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
