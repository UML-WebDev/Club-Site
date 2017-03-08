import React, { Component } from 'react';
import Links from './links';

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
            The point of this <span className="design">club</span> is to inspire interest in <span className="design">web applications </span>

            through an incubator-like setting. This club was started by a group

            of individuals with both <span className="design">professional</span> and <span className="design">personal</span> experience in

            all different parts of a <span className="design">"full stack"</span>, from <span className="design">dev-ops</span> to building a

            <span className="design"> REST API</span>, and more. An average day in the club may

            include; a short code along to learn how to make a real time chat

            room with <span className="design">Socket.io/Node.js</span> as well as time to work on <span className="design">side

            projects/school projects</span> in an environment of like minded people.

            We are planning on attending various <span className="design">meet-ups/conferences</span> in

            Boston, hosting in-house <span className="design">hackathons</span>, and getting <span className="design">speakers</span> from the

            industry to talk to our club.



            So if you’re interested in expanding your programming knowledge

            <span className="design"> beyond C/C++</span> and gain practical <span className="design">“full stack”</span> experience, we’d love

            to have you join us on our weekly meetings on Tuesdays at 6pm in Olsen 311.
          </p>
        </div>
        <Links />        
      </div>
    );
}

export default App;
