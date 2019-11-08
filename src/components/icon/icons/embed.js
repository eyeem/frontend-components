/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function EmbedIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <path
        fill="none"
        d="M3 12l-.705-.71-.714.71.714.71zm18 0l.705.71.714-.71-.714-.71zM8.738 16.29l-5.033-5-1.41 1.42 5.033 5zm-5.033-3.58l5.033-5-1.41-1.42-5.033 5zm12.967 5l5.033-5-1.41-1.42-5.033 5zm5.033-6.42l-5.033-5-1.41 1.42 5.033 5z"
      />
    </svg>
  );
}

EmbedIcon.defaultProps = {
  size: 16
};

export default EmbedIcon;
