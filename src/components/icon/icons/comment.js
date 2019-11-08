/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function CommentIcon(props: { size?: number, className: string }) {
  return (
    <svg
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <path
        fill="none"
        clipRule="evenodd"
        d="M12 21a8.96 8.96 0 004.292-1.087L21 21l-1.002-4.87A9 9 0 1012 21z"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
}

CommentIcon.defaultProps = {
  size: 16
};

export default CommentIcon;
