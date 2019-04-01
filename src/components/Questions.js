import React, { Component } from 'react';
import Icon from '../lib/Icon';
import { SVGS } from '../config';
import './Questions.css';

class Questions extends Component {
  state = {
    icon: null,
    isIt2019: null,
    isItApril: null,
    viewBox: null,
  };

  handleChange = ({ target }) => {
    const { value, name } = target;

    const newState = {
      ...this.state,
      icon: value === 'true' ? SVGS.YES : SVGS.NO,
      [name]: (value === 'true'),
      viewBox: value === 'true' ? '0 0 80 39' : '0 0 81 40',
    };

    this.setState(newState);
  };

  showAnswer = () => {
    const { isIt2019, isItApril, icon, viewBox } = this.state;
    if ((!isIt2019 && isIt2019 !== null) || (isIt2019 && isItApril !== null)) {
      return (
        <Icon
          icon={icon}
          viewBox={viewBox}
        />
      );
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
          className={`c-questions__options ${(isIt2019 !== null) ? 'c-questions__options--hidden' : ''}`}
        >
          <div className="c-questions__svg">
            <Icon
              cssClass="c-questions__year"
              icon={SVGS.QUESTION}
              viewBox="0 0 249 39"
            />

          </div>

          <label
            className="c-questions__opts"
            htmlFor="isIt2019_yes"
          >
            <input
              checked={isIt2019 === true}
              name="isIt2019"
              onChange={this.handleChange}
              type="radio"
              value="true"
            />
            <Icon
              icon={SVGS.YES}
              viewBox="0 0 81 40"
            />
          </label>
          <label
            className="c-questions__opts"
            htmlFor="isIt2019_no"
          >
            <input
              checked={isIt2019 === false}
              id="isIt2019_no"
              name="isIt2019"
              onChange={this.handleChange}
              type="radio"
              value="false"
            />
            <Icon
              icon={SVGS.NO}
              viewBox="0 0 81 40"
            />
          </label>
        </div>
        <div
          className={`c-questions__options ${(isIt2019 && isItApril === null) ? '' : 'c-questions__options--hidden'}`}
        >
          <div className="c-questions__svg">
            <Icon
              cssClass="c-questions__year"
              icon={SVGS.MONTH}
              viewBox="0 0 256 34"
            />
          </div>
          <label
            className="c-questions__opts"
            htmlFor="isItApril_true"
          >
            <input
              id="isItApril_true"
              name="isItApril"
              onChange={this.handleChange}
              type="radio"
              value="true"
            />
            <Icon
              icon={SVGS.YES}
              viewBox="0 0 81 40"
            />
          </label>
          <label
            className="c-questions__opts"
            htmlFor="isItApril_false"
          >
            <input
              id="isItApril_false"
              name="isItApril"
              onChange={this.handleChange}
              type="radio"
              value="false"
            />
            <Icon
              icon={SVGS.NO}
              viewBox="0 0 81 40"
            />
          </label>
        </div>
        <div className="c-questions__answer">

          {this.showAnswer()}
        </div>

      </div>
    );
  }
}

export default Questions;
