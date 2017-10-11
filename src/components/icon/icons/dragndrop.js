/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function FlickrIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 32 32"
    >
      <path
        d="M28 18.744l-3-3.328V3c-.01.01-.01.01 0 0H7c.01.01.01.01 0 0v18c.01-.01.01-.01 0 0h10.5v3H7c-1.93 0-3-1.078-3-3V3c0-1.93 1.078-3 3-3h18c1.93 0 3 1.078 3 3v15.744zm2.58 7.017l-4.298-.45 2.08 5.31c.045.114.066.23.066.347 0 .424-.288.82-.75.972-.125.04-.254.06-.38.06-.465 0-.9-.263-1.065-.685l-2.092-5.34L21 28.75V15.133l9.58 10.63z"
        fillRule="nonzero"
      />
    </svg>
  );
}

FlickrIcon.defaultProps = {
  size: 32
};

export default FlickrIcon;
