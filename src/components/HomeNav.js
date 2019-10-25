import React, { Component } from 'react';
import { Link } from 'react-scroll';

class HomeNav extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    componentDidMount() {
        const nav = document.querySelector('#navbar');
        const navTop = nav.offsetTop;
        
        function handleScroll() {
          if (window.scrollY >= navTop) {
            nav.classList.add('fixed-nav');
            document.body.style.paddingTop = nav.offsetHeight+'px';
          } else {
            nav.classList.remove('fixed-nav');
            document.body.style.paddingTop = 0;
          }
        }
        
        window.addEventListener('scroll', handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        return (
            <header id="helloworld">
                <ul id="opener">
                    <li><h1>Hello World.</h1></li>
                    <li class="head-font">My name is <b class="emphasis">Brooks Burwell</b></li>
                    <li class="head-font">I'm a Full-Stack Developer</li>
                </ul>
                <div id="navbar">
                    <ul>
                        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={100} >About</Link></li>
                        <li><Link activeClass="active" to="skills-nav" spy={true} smooth={true} duration={100} >Skills</Link></li>
                        <li><Link activeClass="active" to="work" spy={true} smooth={true} duration={100} >Work</Link></li>
                        <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={100} >Contact</Link></li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default HomeNav;