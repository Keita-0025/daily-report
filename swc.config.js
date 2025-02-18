// swc.config.js
export default  {
    jsc: {
      parser: {
        syntax: "ecmascript", // JavaScript設定
        jsx: true, // JSX設定
      },
      transform: {
        react: {
          pragma: "React", // JSXをReact.createElementに変換
          throwIfNamespace: true, // 'xmlns'のエラー防止
        },
      },
    },
  };