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
        d="M16.322 19.414l-.143-.009-.126.068a8.5 8.5 0 113.501-3.573c-.047.091-.054.174-.055.191v.002a.638.638 0 00.004.166c.006.053.017.12.029.193.025.148.062.348.108.58.092.466.22 1.074.349 1.677.125.586.252 1.168.35 1.612-.391-.096-.889-.218-1.4-.34-.559-.135-1.136-.27-1.603-.374a26.5 26.5 0 00-.61-.13 3.583 3.583 0 00-.404-.063z"
        stroke="#fff"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

CommentIcon.defaultProps = {
  size: 16
};

export default CommentIcon;
