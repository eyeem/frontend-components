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
      viewBox="0 0 24 24"
    >
      <path d="m3 17.25v3.75h3.75l11.06-11.06-3.75-3.75zm17.71-10.21c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75z" />
      <path d="m0 0h24v24h-24z" />
    </svg>
  );
}

EditIcon.defaultProps = {
  size: 16
};

export default EditIcon;
