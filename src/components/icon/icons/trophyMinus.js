/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function TrophyMinus(props: { className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={20}
      width={31}
      viewBox="0 0 31 24">
      <path d="M16.5 2c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5S18 6.33 18 5.5V2h-1.5zm0-2H18c1.11 0 2 .89 2 2v3.5C20 7.43 18.43 9 16.5 9S13 7.43 13 5.5v-2C13 1.57 14.57 0 16.5 0zm-13 2C4.33 2 5 2.67 5 3.5v2C5 6.33 4.33 7 3.5 7S2 6.33 2 5.5V2h1.5zm0-2H2a2 2 0 0 0-2 2v3.5C0 7.43 1.57 9 3.5 9S7 7.43 7 5.5v-2C7 1.57 5.43 0 3.5 0zm0 0" />
      <path d="M33 8h-8v2h8V8zm-22 4.9v3.07H9V12.9A5 5 0 0 1 5.01 8V2H15v6a4.99 4.99 0 0 1-4 4.9zm-6 3.07h9.99v2H5v-2zm0 0" />
    </svg>
  );
}

export default TrophyMinus;
