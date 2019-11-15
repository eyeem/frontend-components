/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function LeftArrow2Icon(props: {
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
      viewBox="0 0 24 24">
      <g fill="none" stroke="#fff" strokeWidth="2">
        <path d="m11 5-7 7.0001 7 6.9999" />
        <path d="m20 12h-16" />
      </g>
    </svg>
  );
}

LeftArrow2Icon.defaultProps = {
  size: 24
};

export default LeftArrow2Icon;
