import {useState} from 'react';

let counter = 0;

export default (prefix, defaults) => {
  const [id] = useState(() => {
    if (typeof defaults !== 'undefined') {
      return defaults;
    } else {
      return prefix + ++counter;
    }
  });
  return id;
};