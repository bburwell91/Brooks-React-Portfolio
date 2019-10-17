import React, { Component } from 'react';

class NewProject extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
          isHovering: false,
        };
      }
    
      handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }

    render() {
        return (
            <li id={this.props.id}
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover} >
                <a href={this.props.link} target="_blank">
                    <div className="project-img">
                        <img src={this.props.imgUrl} alt="" className="resized" />
                    </div>
                    {this.state.isHovering && 
                    <div className="project-desc">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                    </div>
                    }
                </a>
            </li>
        )
    }
}

export default NewProject;