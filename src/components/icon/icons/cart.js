/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function CartIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <path
        fill="none"
        d="M7.5 7H6L4 21h16L18 7h-1.5m-9 0s.081-1.812 1.071-3.312c1.486-2.25 5.372-2.25 6.858 0C16.419 5.188 16.5 7 16.5 7m-9 0h9"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
}

CartIcon.defaultProps = {
  size: 16
};

export default CartIcon;
