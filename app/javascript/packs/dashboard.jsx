import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <h1>React Fit</h1>        
        <p>Your personal fitness dashboardf</p>
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