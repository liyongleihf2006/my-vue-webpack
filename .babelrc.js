let targets = "last 50 Chrome versions"
let plugins = [
  ["@babel/plugin-transform-runtime"],
  ["@babel/plugin-syntax-dynamic-import"]
];
if (process.env.NODE_ENV === "prod") {
  targets = "ie 9";
  plugins.push(["lodash"]);
};
let presets = [
  [
    "@babel/preset-env"
    ,
    {targets}
  ]
];
module.exports = {presets,plugins};