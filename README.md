# TeToriapot Tools

TeToriapot本館と雰囲気を合わせた、公開ツール・小規模サイト・制作物をまとめるための静的ポータルです。

公開URL：[TeToriapot Tools](https://tetoriapot.github.io/tetoriapot-tools/)

## 目的

- 増えてきたツールを一か所で見つけられるようにする
- 既存の一次創作サイト TeToriapot と世界観を揃える
- 企業SaaS風ではなく、個人創作サイトの「別館」「道具部屋」のような雰囲気にする
- ダークモード / ライトモード両対応で視認性を確保する
- ツールが20件、50件、100件と増えてもデータ追加だけで維持できる構成にする

## 初期構成

```text
.
├── index.html
├── README.md
├── assets
│   ├── css
│   │   └── style.css
│   ├── img
│   │   ├── favicon.svg
│   │   ├── hero-lights.webp
│   │   └── hero-lights-mobile.webp
│   └── js
│       ├── main.js
│       ├── theme.js
│       ├── tools.js
│       └── updates.js
└── docs
    ├── CODEX_IMPLEMENTATION.md
    ├── IMPLEMENTATION_CHECK.md
    └── TOOLS_EDIT_CHECKLIST.md
```

## 起動方法

ES Modulesを使用しているため、ローカル確認は簡易HTTPサーバ経由を推奨します。

### Python

```bash
python -m http.server 8080
```

ブラウザで以下を開きます。

```text
http://localhost:8080/
```

### VS Code

Live Serverなどでも確認できます。

## GitHub Pagesで公開・更新する

リポジトリ：[Tetoriapot/tetoriapot-tools](https://github.com/Tetoriapot/tetoriapot-tools)

GitHubの **Settings → Pages** で、公開元を **Deploy from a branch / main / (root)** に設定します。
`main` ブランチへ変更をpushすると、GitHub Pagesへ反映されます。
`.nojekyll` により、HTML・CSS・JavaScript・画像をそのまま配信します。ビルドやnpmの実行は不要です。

`index.html` の `canonical` と `og:url` は公開URLに設定済みです。

## さくらサーバーへ配置する場合

`index.html` と `assets` ディレクトリを、そのまま公開ディレクトリへアップロードしてください。

例：

```text
/tetoriapot.sakura.ne.jp/tools/
```

この場合は以下のURLで表示できます。

```text
https://tetoriapot.sakura.ne.jp/tools/
```

公開先をさくらサーバーに切り替える場合は、`index.html` の `canonical` と `og:url` も合わせて変更してください。

## ツールを追加する

`assets/js/tools.js` の `tools` 配列に1件追加します。

```js
{
  id: "example-tool",
  name: "サンプルツール",
  description: "何ができるツールかを1〜2文で書く。",
  category: "utility",
  tags: ["便利", "サンプル"],
  url: "https://example.com/",
  status: "public"
}
```

### category の値

- `image`
- `text`
- `trpg`
- `audio`
- `gamedev`
- `utility`

## 公開URLを設定する

登録済みの6件は、実URLを設定した公開ツールです。新しいツールも公開済みのURLを指定して追加してください。

`status: "public"` かつ有効なHTTP / HTTPSのURLを持つカードだけがリンクになります。
同じサイト内の相対URL（例：`./color/`）も使用できます。
外部サイトは `target="_blank" rel="noopener"` で開きます。

`#`・空欄・無効なURLのカードと `draft` のカードは、クリックできない紹介として表示します。
公開中でもリンク未設定の場合は「リンク準備中」を表示します。
実際の公開前に [ツール情報チェックリスト](docs/TOOLS_EDIT_CHECKLIST.md) を確認してください。

設置先を変更する場合は、`index.html` の `canonical` と `og:url` も変更します。

## ステータス

以下の値を使用します。

```text
public = 公開中
draft  = 準備中
```

準備中のカードも検索・カテゴリ絞り込みの対象です。公開する際はURLとステータスを両方設定してください。

## 更新情報を追加する

更新履歴は、ヘッダー左上の「更新履歴」ボタンから開きます。「閉じる」ボタンまたはEscキーで閉じると、元のボタンへフォーカスが戻ります。

`assets/js/updates.js` を編集します。

```js
{ date: "2026.09.16", text: "新しいツールを公開しました。" }
```

日付は `YYYY.MM.DD` / `YYYY-MM-DD` のどちらも使用できます。
画面はドット区切り、HTMLの `datetime` はハイフン区切りで出力します。

## 表示設定

ヘッダー上部の「小・標準・大」で、ページ全体の文字サイズを変更できます。
標準を100%として、小は87.5%、大は125%です。ブラウザの文字サイズ設定も基準に反映されます。
選択はテーマとは別に `localStorage` に保存し、次回表示時にも適用します。
保存できない環境でも、そのページでの切替は利用できます。

### テーマ

- Dark Mode
- Light Mode
- `localStorage` に保存
- 保存済みの選択がなければOSの `prefers-color-scheme` を参照
- `theme.js` でCSS読込前にテーマを適用
- 保存が拒否されても、ページ内の切替・一覧・検索は利用可能

CSSはカスタムプロパティで管理しています。

主な変数は `assets/css/style.css` の冒頭にあります。

## デザイン方針

### Dark

- 深い藍・紺・紫
- 白〜淡い青の文字
- シアン系アクセント
- 半透明パネル
- 装飾は控えめ

### Light

- 白〜ごく淡い青
- 濃紺の文字
- 青〜青紫アクセント
- パネルは白系
- コントラストを優先

## 実装済み機能

### トップページの構成

大きな紹介エリアを省き、ヘッダーの直下に検索を配置しています。
サイト名はヘッダーにまとめ、カテゴリ・ツール一覧へすぐ進める構成です。

使用・加工の許可を受けてWebPに変換した本館の素材は、保管用として残しています。

- `mainvisual.jpg` → `assets/img/hero-lights.webp`（585 × 708、約66KB）
- `no009.png` → `assets/img/hero-lights-mobile.webp`（424 × 105、約6KB）

現在のページでは、これらの装飾画像は読み込みません。

### 一覧・操作

- ダーク / ライト切替
- テーマ保存
- 文字サイズの小・標準・大切替と保存
- キーワード検索
- カテゴリ絞り込み
- 検索リセット
- ヘッダー左上のボタンから更新履歴を表示
- 6件の公開ツールデータ
- レスポンシブ対応
- キーボードフォーカス表示
- `prefers-reduced-motion` 対応
- 本館へのリンク
- 全角・半角、大文字・小文字の違いを吸収する検索
- カテゴリ切替時のキーボードフォーカス維持
- 仮URL・準備中カードの誤クリック防止
- canonical・OGPテキスト・SVG favicon

名前・説明・タグを検索し、カテゴリとANDで絞り込みます。
検索欄だけを空にすると選択中カテゴリの全件を表示し、「クリア」「すべて表示」は検索とカテゴリを両方リセットします。

直近の確認内容は [実装確認メモ](docs/IMPLEMENTATION_CHECK.md) を参照してください。

## 今後追加しやすい機能

### 優先度：高

- 公開中 / 制作中フィルタ
- 新着順ソート
- お気に入りツール
- URLパラメータによる検索状態共有
- 多言語化

### 優先度：中

- 各ツールの詳細ページ
- 関連ツール
- 更新履歴専用ページ
- タグ一覧
- アクセス数による人気順

### 優先度：低

- ログイン
- コメント
- 評価
- ランキング

初期段階では不要です。

## 注意

サンプルの20件は削除し、指定された6件の公開ツールへ置き換えています。
今後、名称・公開状況・URLが変わった場合は `assets/js/tools.js` を更新してください。
