/* @flow */
import * as React from 'react';

function RightArrow2Icon(props: {
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
        <path d="M13 19l7-7-7-7M4 12h16" />
      </g>
    </svg>
  );
}

RightArrow2Icon.defaultProps = {
  size: 24
};

export default RightArrow2Icon;
