/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function EditIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 18 18"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-3.000000, -3.000000)">
          <path
            d="M3,17.25 L3,21 L6.75,21 L17.81,9.94 L14.06,6.19 L3,17.25 Z M20.71,7.04 C21.1,6.65 21.1,6.02 20.71,5.63 L18.37,3.29 C17.98,2.9 17.35,2.9 16.96,3.29 L15.13,5.12 L18.88,8.87 L20.71,7.04 Z"
            fillRule="nonzero"
          />
          <polygon points="0 0 24 0 24 24 0 24" />
        </g>
      </g>
    </svg>
  );
}

EditIcon.defaultProps = {
  size: 16
};

export default EditIcon;
