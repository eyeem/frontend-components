/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function LightboxEdit(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <path
        d="M16.496 10.243l-2.589-2.589M9.375 19.305L20 8.68l-4.53-4.53L4.845 14.775m4.53 4.53L4 19.863l.845-5.088m4.53 4.53l-4.53-4.53"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

LightboxEdit.defaultProps = {
  size: 24
};

export default LightboxEdit;
