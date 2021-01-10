vtecxapiの特徴の一つは、javascriptの関数がラムダ関数とほぼ同じように使えることです。npmコマンドを使ってコードをアップロードし、このラムダ関数を使ってサーバーから関数を提供することができます。

最初に実行すると、以下のようなファイルが作成されます **ssr.html.tsx**。
その後、次のいずれかを実行します。

これはファイルをデプロイするだけでなく、作業中のファイルを監視します。
  npm run watch:server -- --env.entry=/server/ssr.html.tsx

これは、サーバーに関数をデプロイするだけです。
  npm run serve -- --env.entry=/server/ssr.html.tsx

サーバスクリプトファイルは **src/server/** に置いておく必要があります。
