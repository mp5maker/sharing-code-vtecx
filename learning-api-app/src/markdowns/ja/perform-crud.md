作成(post)、読み込み、更新(put/patch)、削除(delete)を行います。
まず簡単な create, update, delete を行い、後に get/read リクエストを深く掘り下げていきます。

axiosを使用している場合は、以下のように設定してください。

    axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

<table>
    <thead>
        <tr>
            <th><strong>Type</strong></th>
            <th><strong>Description</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>e</td>
            <td>metadata</td>
        </tr>
        <tr>
            <td>f</td>
            <td>feed</td>
        </tr>
        <tr>
            <td>x</td>
            <td>xml</td>
        </tr>
    </tbody>
</table>


```
/d/はリレーショナルデータベースに関連する作業を表しています<br/>。
```
**http://localhost:8000/d/** <br/>

```
/s/はサーバーファイルに関連した処理を行います。
これについては後述します。
```
/**http://localhost:8000/s/** <br/>

```
fはエントリリスト配下のエントリを json 形式で取得します。
```
**http://localhost:8000/d/users?f** <br/>

```
e&x はエントリのメタデータを取得します。
```

**http://localhost:8000/d/users?e&x** <br/>

```
x&fは、フォームxmlのエントリリストの下にあるエントリを取得します。
```

**http://localhost:8000/d/users?x&f** <br/> <br/>


これは、ブラウザを使用してエンドポイントをデバッグする際に非常に役立ちます。
