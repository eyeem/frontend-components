/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function TrophyPlus(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={20}
      width={31}
      viewBox="0 1 31 24">
      <path d="M28 6v8h2V6" />
      <path d="M33 9h-8v2h8" />
      <path d="M11 13.9v3.075H9V13.9A5.004 5.004 0 0 1 5.008 9V3H15v6c0 2.42-1.712 4.44-4 4.9zm-6 3.075h9.995v2H5v-2z" />
      <path d="M16.5 3A1.5 1.5 0 0 0 15 4.5v2a1.5 1.5 0 0 0 3 0V3h-1.5zm0-2H18a2 2 0 0 1 2 2v3.5a3.5 3.5 0 1 1-7 0v-2A3.5 3.5 0 0 1 16.5 1zm-13 2A1.5 1.5 0 0 1 5 4.5v2a1.5 1.5 0 0 1-3 0V3h1.5zm0-2H2a2 2 0 0 0-2 2v3.5a3.5 3.5 0 1 0 7 0v-2A3.5 3.5 0 0 0 3.5 1z" />
    </svg>
  );
}

export default TrophyPlus;
