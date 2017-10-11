/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function CloseIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 18 18"
    >
      <path d="M10.414 9l4.95-4.95c.39-.39.39-1.023 0-1.414-.39-.39-1.024-.39-1.414 0L9 7.586l-4.95-4.95c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.024 0 1.414L7.586 9l-4.95 4.95c-.39.39-.39 1.023 0 1.414.39.39 1.024.39 1.414 0L9 10.414l4.95 4.95c.39.39 1.023.39 1.414 0 .39-.39.39-1.024 0-1.414L10.414 9z" />
    </svg>
  );
}

CloseIcon.defaultProps = {
  size: 16
};

export default CloseIcon;
