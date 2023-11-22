# rollup-plugin-direct-import

Rollup plugin to import code from config at built time.

## Installation

npm:

```console
npm i rollup-plugin-direct-import -D
```

yarn:

```console
yarn add rollup-plugin-direct-import -D
```

pnpm:

```console
pnpm add rollup-plugin-direct-import -D
```

## Usage

```js
import directImport from "rollup-plugin-direct-import";

export default {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "cjs"
  },
  plugins: [
    directImport({
      stuff: {
        value: "lego",
        type: "text"
      },
      data: {
        value: "export default { fun: true };",
        type: "code"
      }
    })
  ]
};
```

src/index.js

```js
import stuff from "stuff";
import data from "data";

console.log("I was doing", stuff);
console.log(data);
```

output/index.js

```js
var stuff = "lego";

var data = { fun: true };

console.log("I was doing", stuff);
console.log(data);
```

## Options

### `[import]`

Type: `{ value: any; type: "code" | "text"; }`

## Information

### Resources

- [Github](https://github.com/AngeloCore/rollup-plugin-direct-import)
- [Rollup](https://rollupjs.org/)

Made by [Angelo II](https://github.com/AngeloCore)

Copyright © (C) Angelo II, MIT license.
