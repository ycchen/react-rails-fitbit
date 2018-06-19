import React from 'react';

const Friends = ({friends}) =>
  <div className="card">
    <div className="card-heading"><h4>Friends</h4></div>
    <div className="card-body">
      {friends.map((friend, i) => {
        return (
          <li key={i} className="list-item">
            <span className="badge">{friend.average.steps}</span>
            <img src={friend.user.avatar} style={{height: 50, left: 10, borderRadius: "50%"}} />
            <h4>{friend.user.displayName}</h4>
          </li>
        )
      })}
    </div>
  </div>
    
export default Friends;