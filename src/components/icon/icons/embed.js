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
      viewBox="0 0 16 16">
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g transform="translate(-1453.000000, -369.000000)">
          <g transform="translate(733.000000, 369.000000)">
            <path d="M721,8.001 L725.438,3.509 L726.95,5.04 L724.025,8 L726.95,10.96 L725.438,12.491 L721,8.001 M729.03,10.961 L731.956,8.001 L729.03,5.041 L730.544,3.509 L734.982,8.001 L730.544,12.491 L729.03,10.961" />
          </g>
          <g transform="translate(733.000000, 369.000000)" />
        </g>
      </g>
    </svg>
  );
}

EmbedIcon.defaultProps = {
  size: 16
};

export default EmbedIcon;
