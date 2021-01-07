module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ], //ReactのPresetを追加
    "@babel/preset-typescript",
  ],
};
