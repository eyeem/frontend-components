/* @flow */
import * as React from 'react';

function PaypalIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 15 18"
    >
      <g fill-rule="evenodd" opacity=".5">
        <path
          d="M13.5 4.6c.2-1.4 0-2.4-.8-3.2C12 .4 10.4 0 8.5 0H3c-.3 0-.6.3-.7.7L0 15.4c0 .3.2.6.5.6H4l-.4 1.5c0 .2.2.5.4.5h3c.2 0 .5-.3.6-.6v-.2l.5-3.4.3-.2c0-.4.3-.6.6-.6h.4c2.7 0 5-1.2 5.5-4.5.2-1.4 0-2.5-.7-3.3-.2-.3-.4-.5-.7-.6"
          fill="#ABDFF5"
        />
        <path
          d="M13.5 4.6c.2-1.4 0-2.4-.8-3.2C12 .4 10.4 0 8.5 0H3c-.3 0-.6.3-.7.7L0 15.4c0 .3.2.6.5.6H4l.7-5.5v.2c0-.4.4-.7.8-.7H7c3.2 0 5.7-1.3 6.4-5v-.4"
          fill="#E6F5FB"
        />
        <path d="M5.6 4.6c0-.2.2-.4.4-.5h6s.3 0 .4.3h.5c0 .2.2.3.4.4.2-1.4 0-2.4-.8-3.2-.6-1-2.2-1.5-4-1.5H3c-.3 0-.6.3-.7.7L0 15.4c0 .3.2.6.5.6H4L5.5 4.6" />
      </g>
    </svg>
  );
}

PaypalIcon.defaultProps = {
  size: 18
};

export default PaypalIcon;
