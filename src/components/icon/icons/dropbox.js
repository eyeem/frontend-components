/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function DropboxIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 36 36">
      <path
        d="M18.018 21.922l-6.193 5.156-2.65-1.736v1.946l8.843 5.322 8.844-5.322v-1.946l-2.65 1.736-6.194-5.156zM33 10.392L24.175 4.61 18 9.78l8.898 5.515L33 10.392zM18 20.808l6.175 5.173L33 20.2l-6.102-4.905L18 20.808zm-15-.61l8.825 5.783L18 20.81l-8.898-5.513L3 20.2zM11.825 4.61L3 10.392l6.102 4.903L18 9.78l-6.175-5.17z"
        fill="#1081DE"
        fillRule="evenodd"
      />
    </svg>
  );
}

DropboxIcon.defaultProps = {
  size: 36
};

export default DropboxIcon;
