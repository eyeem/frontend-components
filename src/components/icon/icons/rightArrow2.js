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
      viewBox="0 0 20 20"
    >
      <path
        d="m3.414 8 5.793-5.793c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0l-7.4 7.4c-.39.39-.39 1.023 0 1.414l7.4 7.4c.39.39 1.024.39 1.414 0s.39-1.025 0-1.415l-5.592-5.592h12.385c.552 0 1-.448 1-1s-.448-1-1-1z"
        transform="matrix(-1 0 0 -1 17.1005 17.8)"
      />
    </svg>
  );
}

RightArrow2Icon.defaultProps = {
  size: 18
};

export default RightArrow2Icon;
