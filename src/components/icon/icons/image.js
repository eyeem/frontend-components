/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function ImageIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 16 16"
    >
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g transform="translate(-973.000000, -369.000000)">
          <g transform="translate(225.000000, 117.000000)">
            <path d="M748,266.494759 C748,267.326081 748.66713,268 749.505241,268 L762.494759,268 C763.326081,268 764,267.33287 764,266.494759 L764,253.505241 C764,252.673919 763.33287,252 762.494759,252 L749.505241,252 C748.673919,252 748,252.66713 748,253.505241 L748,266.494759 Z M749,253 L763,253 L763,267 L749,267 L749,253 Z M758.5,259 C759.328427,259 760,258.328427 760,257.5 C760,256.671573 759.328427,256 758.5,256 C757.671573,256 757,256.671573 757,257.5 C757,258.328427 757.671573,259 758.5,259 Z M749,264.5 L749,267 L763,267 L763,265.5 L759.5,262 L757.5,264 L753.5,260 L749,264.5 Z" />
          </g>
          <g transform="translate(225.000000, 115.000000)" />
        </g>
      </g>
    </svg>
  );
}

ImageIcon.defaultProps = {
  size: 16
};

export default ImageIcon;
