import React from 'react';

const LifetimeStats = ({lifetimeTotals, lifetimeTracker}) =>
  <div className="card">
    <div className="card-heading"><h4>Lifetime Stats</h4></div>
    <div className="card-body">
      <h4>Distance</h4>
      <p>Total: {lifetimeTotals.distance} miles</p>
      <p>Tracker: {lifetimeTracker.steps} </p>
      <h4>Steps</h4>
      <p>Total: {lifetimeTotals.steps} </p>
      <p>Tracker: {lifetimeTracker.steps} </p>
    </div>
  </div>

export default LifetimeStats;

