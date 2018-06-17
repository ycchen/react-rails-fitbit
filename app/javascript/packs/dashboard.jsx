import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import LifetimeStats from './LifetimeStats'

class Dashboard extends Component {
  constructor(props) {
    super(props),
    this.state = {
      user: {},
      loggedIn: false,
      lifetimeTracker: {},
      lifetimeTotals: {}
    }
  }
  componentDidMount() {
    if(window.location.hash){
      let fitbitToken = window.location.hash.slice(1).split("&")[0].replace("access_token=","")
      console.log('fitbitToken=', fitbitToken )

      axios({
        method: 'get',
        url: 'https://api.fitbit.com/1/user/-/profile.json',
        headers: { 'Authorization': 'Bearer ' + fitbitToken },
        mode: 'cors'
      })
      .then(response => {
        console.log('user ',response.data)
        this.setState({user: response.data.user, loggedIn: true})
      })
      .catch(error => console.log(error))

      axios({
        method: 'get',
        url: 'https://api.fitbit.com/1/user/-/activities.json',
        headers: { 'Authorization': 'Bearer ' + fitbitToken },
        mode: 'cors'
      })
      .then(response => {
        console.log('lifetime ', response.data)
        this.setState({lifetimeTracker: response.data.lifetime.tracker, lifetimeTotals: response.data.lifetime.total})
      })
      .catch(error => console.log(error))

    }
  }
  
  render() {
    return (
      <div className="container">
        <header className="text-center">
          <span className="float-right">{this.state.user.displayName}</span>
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
            <LifetimeStats lifetimeTotals={this.state.lifetimeTotals} lifetimeTracker={this.state.lifetimeTracker} />
            
            <div className="card">
              <div className="card-heading"><h4>Badges</h4></div>
              <div className="card-body">
                One of three columns
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
