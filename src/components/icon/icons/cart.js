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
        d="M0 2h3.5l1 12.5h15l3-9.5H3.821M9.5 20.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm10.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
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
