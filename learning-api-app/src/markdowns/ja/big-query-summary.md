vtecxapiのためにいくつかの新機能が導入されています。
このファイルを src/server/sample.tsx とします。

vtecxapi.getQueryString()の例

```
axios.get("/s/sample?foo=hello")
```

```
vtecxapi.getQueryString("foo") // hello
```
<br/><br/>


vtecxapi.getBQ()の例

```
axios.get("/s/sample")
```

```
vtecxapi.getBQ("SELECT * FROM your_table_name")
```
<br/><br/>

vtecxapi.log("title", "content")の例
vtecxの管理パネルにログを出力するapi

```
vtecxapi.log("GET USER BIG QUERY ::::", JSON.stringify(RESULT)
```
<br/><br/>

```
axios.post("/s/sample", [{ user }])
```
<br/><br/>

vtecxapi.getRequest()の例

```
vtecxapi.getRequest() // ユーザオブジェクト全体
```
<br /><br />

bigqueryでの保存例

```
vtecxapi.postBQ(data, false) // ビッグクエリに保存します。
```
<br /><br /> <br /><br

シンプルポストの例

```
vtecxapi.post(data, false) // 大きなクエリに保存します。
```
<br /><br />

bigqueryでの更新の例

```
vtecxapi.postBQ(data, false) // ビッグクエリへの更新
```
<br /><br />

vtecxデータベースへの保存

```
vtecxapi.put(data, false) // データベースに保存
```
<br /><br />

単純なエラーの例

```
vtecxapi.sendError(400, error) // データベースに保存
```
<br /><br />

回答例

```
vtecxapi.doResponse(requestData)
// レスポンスを返す場合は、templates.xmlと一致させてください。
templates.xmlと一致していない場合、レスポンスが返されません。
```
<br /><br />

getEntryの例

    vtecxapi.getEntry(ID) // 特定のデータを与えます。
<br /><br />

deleteEntryの例

    vtecxapi.deleteEntry(ID) // データベースからデータを削除します。
<br /> <br />

BigQueryの削除エントリの例

```
vtecxapi.deleteBQ([ID], false, { users: "users" }).
```
