/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function Star3Icon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <path d="M11.535 17.425l-3.41 1.793c-.488.257-1.093.07-1.35-.42-.102-.195-.138-.418-.1-.635l.65-3.796c.056-.324-.05-.655-.287-.885L4.28 10.794c-.395-.385-.403-1.02-.018-1.414.154-.158.355-.26.572-.292l3.812-.554c.325-.047.607-.25.753-.547l1.703-3.453c.245-.495.844-.7 1.34-.454.197.097.356.257.454.454L14.6 7.987c.147.296.428.5.754.547l3.81.554c.548.08.927.587.847 1.134-.03.217-.133.418-.29.572l-2.758 2.688c-.236.23-.343.56-.288.885l.65 3.796c.095.545-.27 1.062-.815 1.155-.218.037-.44.002-.636-.1l-3.41-1.793c-.29-.153-.638-.153-.93 0z" />
    </svg>
  );
}

Star3Icon.defaultProps = {
  size: 24
};

export default Star3Icon;
