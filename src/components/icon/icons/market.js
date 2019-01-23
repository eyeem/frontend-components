/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function MarketIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 19">
      <g fillRule="evenodd">
        <path d="M4.22 0c-.352 0-.67.186-.81.473L1.188 5.077S1 5.44 1 5.855c0 1.078.985 1.95 2.2 1.95 1.215 0 2.2-.872 2.2-1.95 0 1.078.985 1.95 2.2 1.95 1.215 0 2.2-.872 2.2-1.95 0 1.078.985 1.95 2.2 1.95 1.215 0 2.2-.872 2.2-1.95 0 1.078.985 1.95 2.2 1.95 1.215 0 2.2-.872 2.2-1.95 0 1.078.985 1.95 2.2 1.95 1.215 0 2.2-.872 2.2-1.95 0-.476-.25-.78-.25-.78L19.732.393C19.577.15 19.286 0 18.97 0H4.22z" />
        <path d="M5 9v10c-1.105 0-2-.895-2-2V9.355c.066.003.133.005.2.005.64 0 1.25-.13 1.8-.36zm16 .355V17c0 1.105-.895 2-2 2V9c.55.23 1.16.36 1.8.36.067 0 .134-.002.2-.005zM5 14h14v5H5v-5z" />
      </g>
    </svg>
  );
}

MarketIcon.defaultProps = {
  size: 24
};

export default MarketIcon;
