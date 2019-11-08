/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function More(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <g clipRule="evenodd" fillRule="evenodd">
        <g fill="#fff">
          <path d="M12 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </g>
        <g stroke="#fff">
          <path d="M12 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </g>
      </g>
    </svg>
  );
}

More.defaultProps = {
  size: 24
};

export default More;
