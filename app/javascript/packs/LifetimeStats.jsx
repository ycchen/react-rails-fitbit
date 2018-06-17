import React from 'react';

const LifetimeStats = ({lifetimeStats}) =>
  <div className="card">
    <div className="card-heading"><h4>Lifetime Stats</h4></div>
    <div className="card-body">
      <h4>Distance</h4>
      <p>Total: {lifetimeStats.lifetime.total.distance} </p>
      <p>Tracker: {lifetimeStats.lifetime.tracker.distance} </p>
      <h4>Steps</h4>
      <p>Total: {lifetimeStats.lifetime.total.steps} </p>
      <p>Tracker: {lifetimeStats.lifetime.tracker.steps} </p>
    </div>
  </div>

export default LifetimeStats;

