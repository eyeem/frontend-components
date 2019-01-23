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
      viewBox="0 0 20 20">
      <path
        d="M15.62 3.12V0h1.26v3.12H20v1.26h-3.12V7.5h-1.26V4.38H12.5V3.12h3.12zm-6.93 7.97c.83-.78 1.53-2.06 1.53-3.51 0-2.37-.68-4.3-3.12-4.33-2.44.03-3.12 1.96-3.12 4.33 0 1.43.69 2.7 1.51 3.49-.05 1.17-.61 1.74-2.43 2.42-1.9.7-3.06 1.42-3.06 1.91V17h14.38v-1.6c0-.49-1.28-1.21-3.18-1.91-1.8-.67-2.45-1.24-2.51-2.4zm0 0"
        fillRule="evenodd"
      />
    </svg>
  );
}

UserFollow.defaultProps = {
  size: 20
};

export default UserFollow;
