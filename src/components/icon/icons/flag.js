/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function FlagIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 16 16">
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g transform="translate(-1373.000000, -369.000000)">
          <g transform="translate(733.000000, 369.000000)">
            <path d="M645,9 C648.26,10.051 650.656,8 654,9 L654,2 C650.732,0.947 648.286,3.183 645,2 L645,9 Z M642,1 L644,1 L644,15 L642,15 L642,1 Z" />
          </g>
          <g transform="translate(733.000000, 369.000000)" />
        </g>
      </g>
    </svg>
  );
}

FlagIcon.defaultProps = {
  size: 16
};

export default FlagIcon;
