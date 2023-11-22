import plugin from "../lib/index.js";

export default {
  input: "project/index.js",
  output: {
    dir: "output"
  },
  plugins: [
    plugin({
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
