import React, { Component } from 'react';
import FontIcon from 'material-ui/SvgIcon';


class Footer extends Component {
    
  constructor(props) {
		super(props);
		this.state = {
				backGroundColor: this.props.backGroundColor,
				fontColor: this.props.fontColor,
		}
	}
    
	render() {
		let { backGroundColor, fontColor } = this.props;
		console.log(backGroundColor);
		console.log(fontColor);

		const footerDivStyle = {
			display: 'flex',
			justifyContent: 'center',
			backgroundColor: backGroundColor,
		};

		const logoStyle = {
			color: fontColor,
			marginBottom: 20,
			height: '2em',
			width: '2em',
			position: 'relative',
			bottom: 50,
		};

		return (
				<div style={footerDivStyle}>
						<FontIcon className="fab fa-github" style={logoStyle} />
				</div>
		)
	}
}

export default Footer;