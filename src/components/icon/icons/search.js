/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function Search(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <path
        d="M15.104 15.088l-.708-.705zm3.689 5.104l.707.707 1.414-1.415-.707-.707zM18 10.5A7.5 7.5 0 0010.5 3v2a5.5 5.5 0 015.5 5.5zM10.5 3A7.5 7.5 0 003 10.5h2A5.5 5.5 0 0110.5 5zM3 10.5a7.5 7.5 0 007.5 7.5v-2A5.5 5.5 0 015 10.5zm7.5 7.5a7.48 7.48 0 005.312-2.206l-1.416-1.412A5.48 5.48 0 0110.5 16zm5.312-2.206A7.48 7.48 0 0018 10.5h-2a5.48 5.48 0 01-1.604 3.882zm-1.415.001l4.396 4.397 1.414-1.415-4.396-4.396z"
        fill="#fff"
      />
    </svg>
  );
}

Search.defaultProps = {
  size: 24
};

export default Search;
