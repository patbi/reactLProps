import React, { Component } from "react";

export default class classItemDescription extends Component {
{/*	constructor(props) {
		super(props);

		this.state = {
			
		}
} */}


//{/*const { name, description } = this.props;*/}

render() {
  return (
    <div>
     <p>{this.props.name}</p>
     <p>
     	<i>{this.props.description}</i>
     </p>
    </div>
  );
}
}
