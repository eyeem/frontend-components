/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function ShareIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 16 16">
      <g fillRule="evenodd">
        <path d="M9.8.2L9.3 0H9c-.2 0-.4.4-.4.6v2.8C4.2 3.4 0 7 0 12c1.4-1.3 4.3-3.4 8.6-3.4v2.8c0 .2.2.5.4.6h.3c.2 0 .3 0 .5-.2l5.4-5.3c.3-.3.3-.7 0-1L9.8.3z" />
      </g>
    </svg>
  );
}

ShareIcon.defaultProps = {
  size: 16
};

export default ShareIcon;
