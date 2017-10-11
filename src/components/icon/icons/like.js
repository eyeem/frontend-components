/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function LikeIcon(props: { size?: number, className: string }) {
  return (
    <svg
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 16 16"
    >
      <path d="M7.998 16l-.33-.246h-.004c-1.054-.78-6.36-4.79-7.275-7.208C-.1 7.242-.13 5.79.31
          4.46.77 3.094 1.66 2.02 2.82 1.44 3.413 1.147 4.036 1 4.673 1c1.265 0 2.456.584 3.326
          1.6.87-1.016 2.067-1.6 3.327-1.6.64 0 1.26.147 1.85.442 1.164.578 2.057 1.653 2.51
          3.017.445 1.33.418 2.782-.077 4.086-.944 2.5-6.634 6.734-7.28 7.208l-.33.246z" />
    </svg>
  );
}

LikeIcon.defaultProps = {
  size: 18
};

export default LikeIcon;
