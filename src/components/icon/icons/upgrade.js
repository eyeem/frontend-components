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
      <path
        d="M12 19V5M5 12l7-7 7 7"
        stroke="#fff"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

UpgradeIcon.defaultProps = {
  size: 18
};

export default UpgradeIcon;
