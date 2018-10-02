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
      <g transform="translate(0.000000, -1.000000)">
        <polygon points="0 15.25 0 19 3.75 19 14.81 7.94 11.06 4.19" />
        <path d="M17.71,5.04 C18.1,4.65 18.1,4.02 17.71,3.63 L15.37,1.29 C14.98,0.9 14.35,0.9 13.96,1.29 L12.13,3.12 L15.88,6.87 L17.71,5.04 Z" />
      </g>
    </svg>
  );
}

EditIcon.defaultProps = {
  size: 16
};

export default EditIcon;
