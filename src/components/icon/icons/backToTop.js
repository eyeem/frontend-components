/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function BackToTopIcon(props: {
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
      viewBox="0 0 40 40">
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g transform="translate(-2615.000000, -111.000000)">
          <g transform="translate(2615.000000, 111.000000)">
            <path d="M20,40 C31.045695,40 40,31.045695 40,20 C40,8.954305 31.045695,0 20,0 C8.954305,0 0,8.954305 0,20 C0,31.045695 8.954305,40 20,40 Z M27.2551834,23.6631707 C27.6203605,24.0765362 28.2509394,24.114478 28.6630108,23.7490389 C29.0760799,23.3835999 29.1149922,22.7525685 28.7488174,22.339203 L20.792747,14.3364872 C20.3946442,13.8861785 19.6912293,13.8881754 19.295122,14.3404811 L11.2472584,22.339203 C10.8840769,22.7545654 10.9259824,23.3855968 11.3400493,23.7480404 C11.7541162,24.1104841 12.3846951,24.0695469 12.7478767,23.6541845 L20.0005323,16.5181384 L27.2551834,23.6631707 Z" />
          </g>
          <g transform="translate(2615.000000, 111.000000)" />
        </g>
      </g>
    </svg>
  );
}

BackToTopIcon.defaultProps = {
  size: 40
};

export default BackToTopIcon;
