const transformer = require("@tsmirror/reflect/lib/transformer").default;

require("ts-node").register({
  transformers: program => {
    return {
      before: [transformer(program)]
    };
  }
});
