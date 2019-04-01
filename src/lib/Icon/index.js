/* eslint-disable react/no-array-index-key */
import React from 'react';
import { string, arrayOf } from 'prop-types';

const Icon = (props) => {
  const {
    width = '100%',
    height = '100%',
    icon,
    cssClass = '',
    viewBox,
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
