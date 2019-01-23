/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function CommentIcon(props: { size?: number, className: string }) {
  return (
    <svg
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 16 16">
      <path
        d="M8 0C4.136 0 1 3.136 1 7c0 1.914.773 3.647 2.022 4.914L3 16l3.35-2.217c.53.132
          1.08.215 1.65.215 3.864 0 7-3.132 7-7C15 3.137 11.864 0 8 0z"
      />
    </svg>
  );
}

CommentIcon.defaultProps = {
  size: 16
};

export default CommentIcon;
