import { Plugin } from "rollup";

interface Options {
  [key: string]: {
    value: any;
    type: "code" | "text";
  };
}

export default function plugin(options: Options = {}): Plugin {
  return {
    name: "direct-import",
    resolveId(source) {
      return options[source] ? source : null;
    },
    async load(source) {
      const val = options[source];
      if (val) {
        if (typeof val.value != "string") val.value = JSON.stringify(val.value);

        switch (val.type) {
          case "code":
            return val.value;
          case "text":
            return `export default ${JSON.stringify(val.value)};`;
          default:
            null;
        }
      }

      return null;
    }
  };
}
