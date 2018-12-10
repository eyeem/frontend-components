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
      viewBox="0 0 24 24"
    >
      <path
        d="M6.529 12.529a.748.748 0 0 0 1.058 0l3.663-3.656v8.377a.75.75 0 1 0 1.5 0V8.873l3.653 3.659a.752.752 0 0 0 1.065 0 .753.753 0 0 0 0-1.065L12 6l-5.471 5.471a.748.748 0 0 0 0 1.058z"
        fill-rule="evenodd"
      />
    </svg>
  );
}

UpgradeIcon.defaultProps = {
  size: 18
};

export default UpgradeIcon;
