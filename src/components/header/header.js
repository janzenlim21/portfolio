import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <header className="s-header">
                    <nav className="header-nav-wrap">
                        <ul className="header-main-nav">
                            <li className="current"><a className="smoothscroll" href="#intro" title="intro">Intro</a></li>
                            <li><a className="smoothscroll" href="#about" title="about">About</a></li>
                            <li><a className="smoothscroll" href="#experience" title="golden experience">Work and Education</a></li>
                        </ul>
                        <ul className="header-social">
                            <li><a href="#0"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                        </ul>
                    </nav>
                    <a className="header-menu-toggle" href="#"><span>Menu</span></a>
                </header>
            </React.Fragment>
        );
    }
}