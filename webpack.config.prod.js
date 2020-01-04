module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/main.js`,

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dev`,
    // 出力ファイル名
    filename: "main.js"
  }
};
