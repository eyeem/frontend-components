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
      viewBox="0 0 16 16"
    >
      <path
        d="M7.25 4.81L3.53 8.53a.75.75 0 0 1-1.06-1.06L8 1.94l5.53 5.53a.75.75 0 0 1-1.06 1.06L8.75 4.81V13a.75.75 0 1 1-1.5 0V4.81z"
        fillRule="nonzero"
      />
    </svg>
  );
}

UpgradeIcon.defaultProps = {
  size: 18
};

export default UpgradeIcon;
