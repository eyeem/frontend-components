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
      viewBox="0 0 16 16">
      <path d="M6.02 11.025h2.99V6.012h2.974L7.46 1 2.983 6.012H6.02v5.013zM0 14h15v-1H0v1z" />
    </svg>
  );
}

UploadIcon.defaultProps = {
  size: 18
};

export default UploadIcon;
