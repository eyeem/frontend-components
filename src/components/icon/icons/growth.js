/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function GrowthIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 12 12">
      <path
        d="M7 4.78V12H5V4.68L2.365 7.315 1 5.95 5.95 1l4.95 4.95-1.366 1.365L7 4.78z"
        fillRule="evenodd"
      />
    </svg>
  );
}

GrowthIcon.defaultProps = {
  size: 18
};

export default GrowthIcon;
