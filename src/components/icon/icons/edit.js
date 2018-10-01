/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function EditIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 20 20"
    >
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g transform="translate(-92.000000, -71.000000)">
          <path d="M111.987145,79.7515302 C110.678486,79.7489428 109.857883,79.1204901 109.49037,78.0870045 C108.971532,76.918627 109.12758,75.8991002 109.9065,74.7579533 C109.487946,74.3613174 109.00607,73.8708177 108.658112,73.5095591 C107.443928,74.1864941 106.081527,74.4019162 104.91295,73.9256905 C103.890201,73.4698011 103.105384,72.3417347 102.832304,71.0127707 C102.25482,70.9999032 101.564465,70.992032 100.751659,71.0127707 C100.698504,72.3143926 100.068071,73.131754 99.0871421,73.5095591 C97.8551056,74.0153992 96.7427971,74.0680119 95.7581091,73.0934277 C95.1977163,73.7088369 94.7046053,74.1885654 94.0935926,74.7579533 C95.0233589,75.7437477 95.3271319,76.8916993 94.9258508,78.0870045 C94.3920937,79.0732629 93.3484463,79.6470315 92.0129469,79.7515302 C91.9989453,80.4938063 91.9927033,81.1794288 92.0129469,81.8321872 C93.3209819,82.0436031 94.0517015,82.8796067 94.5097217,83.9128442 C94.9405495,85.0810555 94.7832534,86.100168 94.0935926,87.2418954 C94.422471,87.6383651 94.9043465,88.1292791 95.34198,88.4902896 C96.4669047,87.8127742 97.8280573,87.5981806 99.0871421,88.0741582 C100.0198,88.5294672 100.805032,89.6579478 101.167788,90.9870781 C101.655597,91.0006079 102.344704,91.0076505 102.832304,90.9870781 C103.212745,89.6848756 103.843594,88.8683428 104.91295,88.4902896 C106.054479,87.9838691 107.16762,87.9324992 108.241983,88.906421 C108.713117,88.2904314 109.205395,87.8102886 109.49037,87.2418954 C108.88789,86.2563491 108.583285,85.1083975 109.074241,83.9128442 C109.519155,82.9268339 110.652686,82.1455143 111.987145,81.8321872 C112.000107,81.2974967 112.008013,80.6122885 111.987145,79.7515302 L111.987145,79.7515302 Z M105.745208,82.66445 C104.923279,84.7472319 102.479026,85.7284546 100.33553,84.745107 C98.2526267,83.9230882 97.2713421,81.4789895 98.2548839,79.3353988 C99.0776558,77.2524406 101.521909,76.2716345 103.664563,77.2547417 C105.747474,78.0765843 106.728342,80.5219329 105.745208,82.66445 L105.745208,82.66445 Z" />
        </g>
      </g>
    </svg>
  );
}

EditIcon.defaultProps = {
  size: 16
};

export default EditIcon;
