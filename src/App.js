import React, { Component } from 'react';
import Card from './card';

const App = () => {
  return (
      <div>
        <div className="titleContainer">
          <h1 className="title">UMass Lowell Web Development Club</h1>
          <h3 className="subtitle">- Spring 2017 -</h3>
        </div>
        {/*<div className="infoContainer">
          <Card title="test one" />
          <Card title="test two" />
          <Card title="test three" />
        <Card title="test four" />*/}
        <div className="aboutContainer">
          <p className="about">
            The point of this club is to inspire interest in web applications

            through an incubator-like setting. This club was started by a group

            of individuals with both professional and personal experience in

            all different parts of a "full stack", from dev-ops to building a

            REST API to styling with CSS. An average day in the club may

            include; a short code along to learn how to make a real time chat

            room with Socket.io/Node.js as well as time to work on side

            projects/school projects in an environment of like minded people.

            We are planning on attending various meet-ups/conferences in

            Boston, hosting in-house hackathons, and getting speakers from the

            industry to talk to our club.



            So if you’re interested in expanding your programming knowledge

            beyond C/C++ and gain practical “full stack” experience, we’d love

            to have you join us on our first meeting on Tuesdays at 6pm in Olsen 311.
          </p>
        </div>
      </div>
    );
}

export default App;
