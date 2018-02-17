import React from 'react';
import { string, arrayOf } from 'prop-types';

const Icon = (props) => {

	const {
		width = '32px',
		height = '32px',
		icon,
		cssClass = '',
		viewBox = '0 0 32 32'
	} = props;

	return (
		<svg className={ cssClass }
			width={ width }
			height={ height }
			viewBox={ viewBox }
		>
			{
				icon.map((path, idx) => {
					return (
						<path
							d={ path }
							key={ idx }
							className={ `${cssClass}__paths ${cssClass}__${idx}` } />
					);
				})
			}

		</svg>
	);
};

Icon.propTypes = {
	icon : arrayOf(string).isRequired,
	width : string,
	height : string,
	cssClass : string,
	viewBox : string
};

export default Icon
