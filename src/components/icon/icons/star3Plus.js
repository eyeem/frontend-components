/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function Star3Plus(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={20}
      width={31}
      viewBox="0 0 24 24">
      <path d="M7.544 15.132L4.11 16.89a1 1 0 0 1-1.441-1.065l.642-3.647a1.005 1.005 0 0 0-.297-.9L.312 8.715A1.002 1.002 0 0 1 .86 6.998l3.784-.535a1 1 0 0 0 .752-.538l1.712-3.377a1 1 0 0 1 1.784 0l1.712 3.377c.148.292.43.492.752.538l3.784.535a1 1 0 0 1 .548 1.716l-2.703 2.565a.997.997 0 0 0-.297.898l.643 3.648a1 1 0 0 1-1.44 1.064l-3.434-1.758a1.004 1.004 0 0 0-.912 0zM26 6v8h2V6" />
      <path d="M31 9h-8v2h8" />
    </svg>
  );
}
export default Star3Plus;
