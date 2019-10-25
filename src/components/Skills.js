import React from 'react';

function Skills() {
    return (
        <div id="skills">
            <h2>What I can do.</h2>
            <div id="skills-container">
                <div id="col1">
                    <div className="boxhead"><h4>Front-end</h4></div>
                    <div className="box">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                </div>
                <div id="col2">
                    <div className="boxhead"><h4>Back-end</h4></div>
                    <div className="box">
                        <ul>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>Database Theory</li>
                            <li>Command Line</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about-row">
                <h2>What I've done.</h2>
                <div className="about-col content">
                    <ul>
                        <li className="title">Full-Stack Bootcamp Certificate</li>
                        <li>University of Oregon - September 2019</li>
                    </ul>
                    <ul>
                        <li className="title">Associates Degree Web Dev & Design</li>
                        <li>Portland Community College - June 2015</li>
                    </ul>
                    <ul>
                        <li className="title">Dev Lions Inc. Internship</li>
                        <li>e-Textbooks HTML/CSS and QA Testing</li>
                        <li>October 2014 - February 2015</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;