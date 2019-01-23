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
      viewBox="0 0 30 30">
      <path
        d="M20.05 23H9.95c.033.162.05.33.05.5 0 1.38-1.12 2.5-2.5 2.5S5 24.88 5 23.5 6.12 21 7.5 21h15c1.38 0 2.5
        1.12 2.5 2.5S23.88 26 22.5 26 20 24.88 20 23.5c0-.17.017-.338.05-.5zM6.375 7H24.01c1.1 0 1.843.882 1.66
        1.982l-1.506 9.036c-.09.542-.61.982-1.157.982H6.993c-.548 0-1.067-.44-1.157-.982L4 7l-.176-1H.99C.445 6 0
        5.556 0 5c0-.552.45-1 .99-1h4.02c.512 0 .934.398.985.898.013.04.024.084.03.128L6.376 7z"
      />
    </svg>
  );
}

CartIcon.defaultProps = {
  size: 16
};

export default CartIcon;
