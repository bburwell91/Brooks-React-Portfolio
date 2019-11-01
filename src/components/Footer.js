import React from 'react';

function Footer() {
    return (
        <footer id="contact">
            <div id="social">
                <div id="phone-footer">
                    <i className="fas fa-mobile-alt"></i>
                    <p>Call me at</p>
                    <p>503-975-3281</p>
                </div>
                <div id="resume-footer">
                    <i className="far fa-file"></i>
                    <a href="https://drive.google.com/file/d/1knw27xJhEp87PkZEEBmXdttepduGvjhr/view?usp=sharing" target="_blank"><p>Other experience</p>
                    <p>view my resume</p></a>
                </div>
                <div id="email-footer">
                    <i className="far fa-envelope"></i>
                    <p>Email me at</p>
                    <p>brooks_burwell@live.com</p>
                </div>
            </div>
            <div id="copyright">
                <p>Created by Brooks Burwell <i class="far fa-copyright"></i> 2019</p>
            </div>
        </footer>
    )
}

export default Footer;