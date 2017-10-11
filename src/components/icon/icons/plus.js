/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function CommentIcon(props: { size?: number, className: string }) {
  return (
    <svg
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 16 16"
    >
      <path d="M7 12H5V7H0V5h5V0h2v5h5v2H7z" />
    </svg>
  );
}

CommentIcon.defaultProps = {
  size: 16
};

export default CommentIcon;
