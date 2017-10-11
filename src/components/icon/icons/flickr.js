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
      viewBox="0 0 36 36"
    >
      <g transform="translate(4 12)" fill="none" fillRule="evenodd">
        <circle fill="#0262DD" cx="6" cy="6" r="6" />
        <circle fill="#FF0184" cx="22" cy="6" r="6" />
      </g>
    </svg>
  );
}

FlickrIcon.defaultProps = {
  size: 36
};

export default FlickrIcon;
