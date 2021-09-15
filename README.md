# use-uid

Return a unique id in React

# Install

`yarn add use-uid`

# Usage

`useUid(prefix, defaults)`

```js
import useUid from 'use-uid';

let cls = useUid('class-'); // Returns 'class-0'

let cls = useUid('class-'); // Returns 'class-1'

let cls = useUid('class-', 'class-custom'); // Returns 'class-custom'

let cls = useUid('cls-'); // Returns cls-2
```