/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function LeftArrowIcon(props: {
  size?: number,
  className: string,
  id: string
}) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 5 8"
    >
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g transform="translate(-200.000000, -1093.000000)">
          <path
            d="M203.593525,1097.00197 L200,1100.33058 L200.677418,1101.00393 L204.995756,1097.00393 L205,1097.00393 L204.997878,1097.00197 L205,1097 L204.995756,1097 L200.677418,1093 L200,1093.67335 L203.593525,1097.00197 Z"
            transform="translate(202.500000, 1097.001966) scale(-1, 1) translate(-202.500000, -1097.001966)"
          />
        </g>
      </g>
    </svg>
  );
}

LeftArrowIcon.defaultProps = {
  size: 18
};

export default LeftArrowIcon;
