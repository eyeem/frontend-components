/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function TermsIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 22">
      <path
        d="M4 0h17v22H4V0zm3 3h11v2H7V3zm0 4h11v2H7V7zm0 4h6v2H7v-2z"
        fillRule="evenodd"
      />
    </svg>
  );
}

TermsIcon.defaultProps = {
  size: 24
};

export default TermsIcon;
