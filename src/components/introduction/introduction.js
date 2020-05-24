import React, { Component } from 'react';
export default class Introduction extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="intro" className="s-intro target-section">
                    <div className="row intro-content">
                        <div className="column large-9 mob-full intro-text">
                            <h3>Janzen Lim here,</h3>
                            <h1>
                            Software <br />
                            Developer, <br />
                            Engineer,<br />
                            Ready to roll
                            </h1>
                        </div>
                        <div className="intro-scroll">
                            <a href="#about" className="intro-scroll-link smoothscroll">
                                Scroll For More
                            </a>
                        </div>
                        <div className="intro-grid" />
                        <div className="intro-pic" />
                    </div> {/* end row */}
                </section>
            </React.Fragment>
        );
    }
}