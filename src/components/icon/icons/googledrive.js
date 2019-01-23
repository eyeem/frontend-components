/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function GoogleDriveIcon(props: {
  size?: number,
  className: string,
  id: string
}) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 36 36">
      <g fill="none" fillRule="evenodd">
        <path fill="#2EB672" d="M18 13.953L12.472 5 2.545 21.91l5.528 8.952" />
        <path fill="#527ABD" d="M34 22H14.153L9 31h19.847" />
        <path fill="#FED14B" d="M23.718 4H13l10.282 17H34" />
      </g>
    </svg>
  );
}

GoogleDriveIcon.defaultProps = {
  size: 36
};

export default GoogleDriveIcon;
