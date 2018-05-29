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
        d="M15.3333 4.3333V1h1.3334v3.3333H20v1.3334h-3.3333V9h-1.3334V5.6667H12V4.3333h3.3333zM7.8602 14.4158c.752-.744 1.3808-1.9533 1.3808-3.3198 0-2.2429-.6163-4.0638-2.8196-4.096-2.2029.0322-2.8193 1.8531-2.8193 4.096 0 1.3538.617 2.5528 1.3594 3.2985-.039 1.103-.5486 1.647-2.192 2.2842C1.0516 17.3467 0 18.0263 0 18.4911V20h13v-1.509c0-.4644-1.1488-1.1442-2.8676-1.8123-1.6327-.6334-2.2202-1.1741-2.2722-2.263z"
        fillRule="evenodd"
      />
    </svg>
  );
}

UserFollow.defaultProps = {
  size: 20
};

export default UserFollow;
