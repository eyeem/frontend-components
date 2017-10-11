/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function CompDownloadIcon(props: {
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
      viewBox="0 0 18 18"
    >
      <path d="M.294.293C.112.475 0 .73 0 1.01V4h2V2h2V0H1.01C.724 0 .47.113.29.296zM17.706.293c.182.182.294.436.294.716V4h-2V2h-2V0h2.99c.285 0 .54.113.72.296zM.293 17.706c.182.182.436.294.716.294H4v-2H2v-2H0v2.99c0 .285.113.54.296.72zM17.707 17.706c-.182.182-.436.294-.716.294H14v-2h2v-2h2v2.99c0 .285-.113.54-.296.72zM0 7h2v4H0zM16 7h2v4h-2zM7 2V0h4v2zM10.004 4.992C10.004 4.444 9.56 4 9 4 8.448 4 8 4.452 8 4.992v5.015H4L9.018 14 14 10.007h-3.996V4.992zM7 18v-2h4v2z" />
    </svg>
  );
}

CompDownloadIcon.defaultProps = {
  size: 18
};

export default CompDownloadIcon;
