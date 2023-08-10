import React from 'react';
import { Link } from 'react-router-dom';
import './team.scss';

function TeamStyle1(props) {
  return (
    <div className="team">
      <div className="team-bg"></div>
      <div className="team-img">
        <img className="img-fluid" src={props.image} alt="" />
      </div>
      <div className="team-info">
        <Link
          className="team-name"
          to={{ pathname: `/team-details/${props.id}` }}
        >
          {props.name}
        </Link>
        <p>{props.position}</p>
        <ul className="list-unstyled">
          {props.list.map((list, index) => (
            <li key={index}>
              <Link to="#">
                <i className={list.icon}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TeamStyle1;
