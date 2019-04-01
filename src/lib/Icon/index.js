// @flow
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { string, arrayOf } from 'prop-types';

type IconPropTypes = {|
  cssClass?: string,
  height?: string,
  icon: string[],
  viewBox: string,
  width?: string,
|};

const Icon = (props: IconPropTypes) => {
  const {
    cssClass = '',
    height = '100%',
    icon,
    viewBox,
    width = '100%',
  } = props;

  return (
    <svg
      className={cssClass}
      height={height}
      viewBox={viewBox}
      width={width}
    >
      {
        icon.map((path, idx) => (
          <path
            key={idx}
            className={`${cssClass}__paths ${cssClass}__${idx + 1}`}
            d={path}
          />
        ))
      }

    </svg>
  );
};

Icon.propTypes = {
  cssClass: string,
  height: string,
  icon: arrayOf(string).isRequired,
  viewBox: string.isRequired,
  width: string,
};

export default Icon;
