/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function UserFollow(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <path
        d="M14 11h8m-4-4v8m-9.189 6H3c0-2.797 1-7 6-7s6 4.205 6 7H8.811zM9 10a3 3 0 100-6 3 3 0 000 6z"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
}

UserFollow.defaultProps = {
  size: 20
};

export default UserFollow;
