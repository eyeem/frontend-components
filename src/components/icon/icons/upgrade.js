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
      viewBox="0 0 12 12"
    >
      <path
        d="m.529 6.529c.14028405.14032868.33057684.21916827.529.21916827.19842317 0 .38871595-.07883959.529-.21916827l3.663-3.656v8.377c0 .4142136.33578644.75.75.75s.75-.3357864.75-.75v-8.377l3.653 3.659c.1410883.14149023.3326866.22101248.5325.22101248s.3914117-.07952225.5325-.22101248c.1412446-.14121884.2205972-.33276817.2205972-.5325s-.0793526-.39128116-.2205972-.5325l-5.468-5.467-5.471 5.471c-.14032868.14028405-.21916827.33057683-.21916827.529s.07883959.38871595.21916827.529z"
        fillRule="evenodd"
      />
    </svg>
  );
}

UpgradeIcon.defaultProps = {
  size: 18
};

export default UpgradeIcon;
