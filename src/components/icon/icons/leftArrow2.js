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
      viewBox="0 0 19 18">
      <path d="M3.414 8l5.793-5.793c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0l-7.4 7.4c-.39.39-.39 1.023 0 1.414l7.4 7.4c.39.39 1.024.39 1.414 0 .39-.39.39-1.025 0-1.415L3.615 10H16c.552 0 1-.448 1-1s-.448-1-1-1H3.414z" />
    </svg>
  );
}

LeftArrow2Icon.defaultProps = {
  size: 18
};

export default LeftArrow2Icon;
