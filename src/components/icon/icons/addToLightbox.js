/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function AddToLightboxIcon(props: {
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
      viewBox="0 0 18 18">
      <path d="M12 8v2.003c0 .55-.444.997-1 .997-.552 0-1-.453-1-.997V8H7.997C7.447 8 7 7.556 7 7c0-.552.453-1 .997-1H10V3.997c0-.55.444-.997 1-.997.552 0 1 .453 1 .997V6h2.003c.55 0 .997.444.997 1 0 .552-.453 1-.997 1H12zm-5.994 6h9.988c1.11 0 2.006-.898 2.006-2.006V2.006C18 .896 17.102 0 15.994 0H6.006C4.896 0 4 .898 4 2.006v9.988C4 13.104 4.898 14 6.006 14z" />
      <path d="M2 5.996C2 5.446 1.556 5 1 5c-.552 0-1 .447-1 1v9.997C0 17.103.894 18 2.003 18H12c.553 0 1-.444 1-1 0-.552-.445-1-.996-1H2.996c-.55 0-.996-.445-.996-.996V5.996z" />
    </svg>
  );
}

AddToLightboxIcon.defaultProps = {
  size: 18
};

export default AddToLightboxIcon;
