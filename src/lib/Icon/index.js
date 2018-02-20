import React from 'react';
import { string, arrayOf } from 'prop-types';

const Icon = (props) => {

	const {
		width = '100%',
		height = '100%',
		icon,
		cssClass = '',
		viewBox
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
							className={ `${cssClass}__paths ${cssClass}__${idx + 1}` } />
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
	viewBox : string.isRequired
};

export default Icon
