import React, { Component } from 'react';
import Icon from '../lib/Icon';
import { SVGS } from '../config';
import './Questions.css';

class Questions extends Component {

	state = {
		isIt2019 : null,
		isItApril : null,
		viewBox : null,
		icon : null,
	};

	handleChange = ({ target }) => {
		const { value, name } = target;

		const newState = {
			...this.state,
			[name] : (value === 'true'),
			icon : value === 'true' ? SVGS.YES : SVGS.NO,
			viewBox : value === 'true' ? '0 0 80 39' : '0 0 81 40'
		};

		this.setState(newState);
	};

	showAnswer = () => {
		const { isIt2019, isItApril, icon, viewBox } = this.state;
		if ((!isIt2019 && isIt2019 !== null) || (isIt2019 && isItApril !== null)) {
			return <Icon icon={ icon } viewBox={ viewBox } />;
		}
		return null;
	};

	render() {
		const {
			isIt2019,
			isItApril,

		} = this.state;

		return (
			<div className="c-questions">

				<div
					className={ `c-questions__options ${(isIt2019 !== null) ? 'c-questions__options--hidden' : ''}` }>
					<div className="c-questions__svg">
						<Icon
							cssClass="c-questions__year"
							icon={ SVGS.QUESTION }
							viewBox="0 0 249 39"
						/>

					</div>

					<label className="c-questions__opts">
						<input
							type="radio"
							name="isIt2019"
							value="true"
							checked={isIt2019 === true}
							onChange={this.handleChange}
						/>
						<Icon icon={ SVGS.YES } viewBox="0 0 81 40" />
					</label>
					<label className="c-questions__opts">
						<input type="radio"
							name="isIt2019"
							value="false"
							checked={isIt2019 === false}
							onChange={this.handleChange}/>
						<Icon icon={ SVGS.NO } viewBox="0 0 81 40" />
					</label>
				</div>
				<div
					className={ `c-questions__options ${(isIt2019 && isItApril === null) ? '' : 'c-questions__options--hidden'}` }
				>
					<div className="c-questions__svg">
						<Icon
							cssClass="c-questions__year"
							icon={ SVGS.MONTH }
							viewBox="0 0 256 34"
						/>
					</div>
					<label className="c-questions__opts">
						<input
							type="radio"
							name="isItApril"
							value="true"
							onChange={ this.handleChange }
						/>
						<Icon icon={ SVGS.YES } viewBox="0 0 81 40" />
					</label>
					<label className="c-questions__opts">
						<input
							type="radio"
							name="isItApril"
							value="false"
							onChange={ this.handleChange }
						/>
						<Icon icon={ SVGS.NO } viewBox="0 0 81 40" />
					</label>
				</div>
				<div className="c-questions__answer">

					{ this.showAnswer() }
				</div>

			</div>
		);

	}

}

export default Questions;
