/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function Star3Minus(props: { className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={20}
      width={31}
      viewBox="0 0 24 24">
      <path d="M7.54 15.13l-3.43 1.76c-.49.25-1.09.06-1.35-.44a.972.972 0 0 1-.09-.63l.64-3.64a.982.982 0 0 0-.3-.9L.31 8.71A.996.996 0 0 1 .28 7.3.99.99 0 0 1 .86 7l3.78-.54c.33-.04.61-.24.76-.54l1.71-3.37a.99.99 0 0 1 1.34-.44c.19.09.35.25.44.44l1.71 3.37c.15.3.43.5.76.54l3.78.54a.995.995 0 0 1 .55 1.71l-2.7 2.57c-.25.23-.36.57-.3.9l.64 3.64c.1.55-.26 1.07-.81 1.16a.99.99 0 0 1-.63-.09l-3.43-1.76a.976.976 0 0 0-.91 0h-.01zm0 0M31 9h-8v2h8" />
    </svg>
  );
}

export default Star3Minus;
