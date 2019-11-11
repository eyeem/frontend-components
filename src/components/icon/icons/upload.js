/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function UploadIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <path
        d="M6 8.125L12 2m0 0l6 6.125M12 2c.01 5.421 0 14 0 14m-9 5h18"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
}

UploadIcon.defaultProps = {
  size: 24
};

export default UploadIcon;
