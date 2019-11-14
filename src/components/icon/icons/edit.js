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
      viewBox="0 0 24 24">
      <path
        fill="none"
        clipRule="evenodd"
        d="M22 7.478L9.383 20.326 3 21l1.003-6.152L16.62 2 22 7.478z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

EditIcon.defaultProps = {
  size: 16
};

export default EditIcon;
