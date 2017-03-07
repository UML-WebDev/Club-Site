import React, { Component } from 'react';

const Card = (props) => {
  return (
          <div className="card">
            {/* About the club! */}
            {props.title}
          </div>
    );
}

export default Card;
