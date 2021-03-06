写真をアップロードするには、パラメータを理解する必要があります。ご覧のように、vtecxapiを使えば簡単に複数の画像を送信することができます。
画像をアップロードするためには、設定が必要です。まず、 **src/server/save-profile-photo** で、クライアント側から送信するパラメータを定義する必要があります。以下の例では

```
  プロフィール写真
```

この profile_photo パラメータでは、次のようなクエリ文字列を送信しています。

```
/_html/img/profile_photo
```

この値はファイルの位置を示し、ユーザーがサーバー側を呼び出して画像を要求することもできます。

```
<link href="/d/_html/img/profile_photo">。
```

/d/_htmlは/に書き換えられます。なので省略可能です。

```
<link href="/img/profile_photo">
```

このように、タグを使って画像を呼び出すことは非常に柔軟になり、クリーンなコードを書くことができるようになります。

任意の場所に保存することができますが、その前にユーザー、グループ管理、アクセス制御を行う必要があります。
これについては後述します

一般的には以下のようにします

```
[your-variable-string]: '/d/_html/img/[your-file-name]'
```
