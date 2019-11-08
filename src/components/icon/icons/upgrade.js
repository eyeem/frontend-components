/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function UpgradeIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <clipPath id="a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
      <g clipPath="url(#a)">
        <path
          fill="none"
          d="M15 12.5l7 3.5-10 5-10-5 7-3.5M7.5 8L12 3.5m0 0L16.5 8M12 3.5V16"
          stroke="#fff"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

UpgradeIcon.defaultProps = {
  size: 18
};

export default UpgradeIcon;
