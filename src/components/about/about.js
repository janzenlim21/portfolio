import React, { Component } from 'react';
export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about" className="s-about target-section">
                    <div className="about-me">
                        <div className="row heading-block">
                            <div className="column large-full">
                                <h2 className="section-heading">About Me</h2>
                            </div>
                        </div>
                        <div className="row about-me__content">
                            <div className="column large-full about-me__text">
                                <p className="lead">
                                A motivated graduate whose goal is
                                to be a Full-stack Software Engineer
                                utilising technologies such as AR/VR
                                and Computer Vision to change the
                                world. A strong aspiration to create
                                solutions that can improve the lives of
                                billions.
                                </p>
                                
                                <p>
                                    Eager To Learn New Technologies! <br/><br/>
                                    At the moment, I am spending my time on learning new technologies and web frameworks such as Angular.js, Golang etc. I am always 
                                    excited to master new skills and would also love to venture into more advanced fields by integrating web and app development with
                                    Machine Learning, Data Science, AR/VR techniques
                                </p>
                                <p>
                                    When I am not doing software related stuff, I spending my time playing video games, and can't wait to get back to indoor climbing (bouldering) as soon as possible!
                                </p>
                            </div>
                        </div>
                        <div className="row about-me__buttons">
                            <div className="column large-half tab-full" >
                                <a href="#0" className="btn btn--stroke full-width">Connect With Me!</a>
                            </div>
                            <div className="column large-half tab-full">
                                <a href="#0" className="btn btn--primary full-width">Download Resume</a>
                            </div>
                        </div>
                    </div> {/* end about-me */}
                    <div id="experience" className="about-experience">
                        <div className="row heading-block">
                            <div className="column large-full">
                                <h2 className="section-heading">Work &amp; Education</h2>
                            </div>
                        </div>
                        <div className="row about-experience__timeline">
                            <div className="column large-half tab-full">
                                <div className="timeline">
                                    <div className="timeline__icon-wrap">
                                        <span className="timeline__icon timeline__icon--work" />
                                    </div>
                                    <div className="timeline__block">
                                        <div className="timeline__bullet" />
                                        <div className="timeline__header">
                                            <p className="timeline__timeframe">Feb 2020 - Present</p>
                                            <h3 className="item-title">Fenwick Software</h3>
                                            <h5>Software Developer</h5>
                                        </div>
                                        <div className="timeline__desc">
                                        <p>Working in the client development team to learn how to customise the Microsoft Dynamics 365 ERP software.</p>
                                        <p>Tech stack: Mircosoft AL and C/AL, OData Web APIs</p> 
                                        </div>
                                    </div>
                                    <div className="timeline__block">
                                        <div className="timeline__bullet" />
                                        <div className="timeline__header">
                                            <p className="timeline__timeframe">Nov 2018 - Feb 2019</p>
                                            <h3 className="item-title">Huawei Technologies Malaysia</h3>
                                            <h5>IT Intern</h5>
                                        </div>
                                        <div className="timeline__desc">
                                            <p>Main role in the team was to develop software solutions thatcan help improve work productivity and flow.</p>
                                            <p>Tech Stack: Python, Pandas, Selenium</p>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column large-half tab-full">
                                <div className="timeline">
                                    <div className="timeline__icon-wrap">
                                        <span className="timeline__icon timeline__icon--education" />
                                    </div>
                                    <div className="timeline__block">
                                        <div className="timeline__bullet" />
                                        <div className="timeline__header">
                                            <p className="timeline__timeframe">Feb 2016 - Dec 2019</p>
                                            <h3 className="item-title">Monash University</h3>
                                            <h5>Bachelor of Software Engineering (Honours)</h5>
                                        </div>
                                        <div className="timeline__desc">
                                            <p>Over the course of my degree, I have been involved in a number of projects related to application and web development, including working with a real life client to develop a time sheet management dashboard portal using React Js and Django. For my final year research project, I chose to work with a team of 5 to learn about the relationship between AI and automatic software bug fixing. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* end about-experience */}
                </section> {/* end s-about */}
            </React.Fragment>
        );
    }
}
