import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<button onClick={this.props.applyColor} 
			className={this.props.isLight ? "light-button" : "dark-button"}>
				<p>Hi, im color picker</p>
			</button>
		);
	}
}

export { Button };
//export default Button;