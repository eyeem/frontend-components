/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function FacebookIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 20 20">
      <path
        d="M19 20H1.104C.494 20 0 19.506 0 18.896V1.104C0 .494.494 0 1.104 0h17.792C19.506 0 20 .494 20 1.104v17.792c0 .61-.494 1.104-1 1.104zm-5 0v-8h2.393l.404-2.98L14 9V7.248c0-.874.042-1.408 1.296-1.408h1.598v-2.7h-1.887C12.703 3.14 11 4.415 11 7.02v2H9V12h1.997v8H14z"
        fillRule="evenodd"
      />
    </svg>
  );
}

FacebookIcon.defaultProps = {
  size: 18
};

export default FacebookIcon;
