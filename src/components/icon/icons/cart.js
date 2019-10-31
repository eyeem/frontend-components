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
      <g stroke="#fff" strokeWidth="1.5">
        <path
          fill="none"
          d="M18.024 6.75l2.1 13.5H3.876l2.1-13.5zM7.75 5.5a4.25 4.25 0 018.5 0v1.25h-8.5z"
        />
      </g>
    </svg>
  );
}

CartIcon.defaultProps = {
  size: 16
};

export default CartIcon;
