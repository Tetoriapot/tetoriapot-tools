export const categories = [
  { id: "all", label: "すべて", icon: "✦" },
  { id: "image", label: "画像", icon: "▧" },
  { id: "text", label: "テキスト", icon: "Aa" },
  { id: "trpg", label: "TRPG", icon: "◇" },
  { id: "audio", label: "音声", icon: "♪" },
  { id: "game", label: "ゲーム", icon: "♟" },
  { id: "gamedev", label: "ゲーム開発", icon: "⌘" },
  { id: "utility", label: "その他", icon: "＋" },
];

export const tools = [
  {
    id: "one-draw",
    name: "OneDraw",
    description: "お題と時間を決めて、描くことに集中するワンドロタイマー。",
    category: "image",
    tags: ["ワンドロ", "お絵描き", "タイマー"],
    url: "https://tetoriapot.github.io/OneDraw/",
    status: "public"
  },
  {
    id: "color-toolbox",
    name: "Color Toolbox",
    description: "カラーコード変換、画像からのパレット抽出、ランダム配色、グラデーション作成などをまとめた色の作業台。",
    category: "image",
    tags: ["カラー", "パレット", "デザイン"],
    url: "https://tetoriapot.github.io/color-toolbox/",
    status: "public"
  },
  {
    id: "moji-ijiri-tool",
    name: "文字いじりツール",
    description: "文字数カウント、文字化け・鏡文字の加工、カナスペル候補、ローマ字とかなの変換、飾り文字をまとめたテキストツール。",
    category: "text",
    tags: ["文字", "変換", "創作"],
    url: "https://tetoriapot.github.io/moji-ijiri-tool/",
    status: "public"
  },
  {
    id: "pc-rescue-jp",
    name: "PCトラブル逆引きレスキュー辞典",
    description: "キーボードや日本語入力、画面表示など、Windowsの困りごとを症状や押したキーから探せる対処辞典。",
    category: "utility",
    tags: ["Windows", "キーボード", "トラブル"],
    url: "https://tetoriapot.github.io/pc-rescue-jp/",
    status: "public"
  },
  {
    id: "machikado-menu-catalog",
    name: "まちかどメニュー帖",
    description: "創作やTRPGで使える、さまざまな時代の架空店舗とメニューを探せるカタログ。価格の確認やプレイヤー向け表示にも対応。",
    category: "trpg",
    tags: ["TRPG", "店舗", "メニュー"],
    url: "https://tetoriapot.github.io/machikado-menu-catalog/",
    status: "public"
  },
  {
    id: "wonder-of-wanderer-dice-tool",
    name: "ワンダーオブワンダラー 判定補助",
    description: "『ワンダーオブワンダラー』のココフォリア用チャパレ式作成と、判定ログの成功度再計算を助ける非公式ツール。",
    category: "trpg",
    tags: ["TRPG", "ココフォリア", "ダイス"],
    url: "https://tetoriapot.github.io/wonder-of-wanderer-dice-tool/",
    status: "public"
  },
  {
    id: "image-editor",
    name: "画像かんたん加工",
    description: "画像の結合・分割・切り抜き・リサイズ・自由配置・フィルター加工を、ブラウザ内でまとめて行える画像編集ツール。",
    category: "image",
    tags: ["画像加工", "結合・分割", "フィルター"],
    url: "https://tetoriapot.github.io/image-editor/",
    status: "public"
  },
  {
    id: "character-attribute-maker",
    name: "キャラ属性メーカー",
    description: "好きな言葉を二軸に設定し、キャラクター画像をドラッグして属性マップを作れるツール。配置や見た目を調整してPNGで保存できます。",
    category: "image",
    tags: ["キャラクター", "属性マップ", "PNG"],
    url: "https://tetoriapot.github.io/character-attribute-maker/",
    status: "public"
  },
  {
    id: "icon-maker",
    name: "アイコンメーカー",
    description: "画像を切り抜いて整え、円形・正方形のアイコンとして保存できるツール。画像はブラウザ内で処理します。",
    category: "image",
    tags: ["アイコン", "切り抜き", "画像"],
    url: "https://tetoriapot.github.io/icon-maker/",
    status: "public"
  },
  {
    id: "kyou-wa-korede-iiya",
    name: "今日はこれでいいや。メーカー",
    description: "関係性・性格・体格・世界観などをランダムに組み合わせ、創作カップリングのお題を作るツール。結果はPNGで保存できます。",
    category: "text",
    tags: ["お題", "カップリング", "創作"],
    url: "https://tetoriapot.github.io/kyou-wa-korede-iiya/",
    status: "public"
  },
  {
    id: "character-order-room",
    name: "キャラクター発注室",
    description: "外見・衣装・ポーズ・構図などを選び、キャラクターイラストの指示書や日本語・英語のプロンプトを作るツール。",
    category: "text",
    tags: ["キャラクター", "指示書", "プロンプト"],
    url: "https://tetoriapot.github.io/character-order-room/",
    status: "public"
  },
  {
    id: "koyomi",
    name: "暦｜年齢・西暦和暦早見",
    description: "西暦・和暦・生年月日・年齢を変換し、年齢比較や年表、学年を確認できる早見ツール。",
    category: "utility",
    tags: ["年齢計算", "和暦", "年表"],
    url: "https://tetoriapot.github.io/koyomi/",
    status: "public"
  },
  {
    id: "ccfolia-tyrano-converter",
    name: "ココフォリア → ティラノスクリプト変換",
    description: "ココフォリアのHTMLログを読み込み、発言やキャラクター設定を編集してティラノスクリプトの.ksファイルへ変換するツール。",
    category: "trpg",
    tags: ["ココフォリア", "ティラノ", "ログ変換"],
    url: "https://tetoriapot.github.io/ccfolia-tyrano-converter/",
    status: "public"
  },
  {
    id: "tyrano-studio",
    name: "TYRANO CHEATSHEET STUDIO",
    description: "ティラノスクリプトのタグ・レシピを検索し、選択肢や画面配置のコード作成を補助する制作ツール。",
    category: "gamedev",
    tags: ["ティラノ", "タグ辞典", "画面レイアウト"],
    url: "https://tetoriapot.github.io/tyrano-studio/",
    status: "public"
  },
  {
    id: "lootmoji",
    name: "るともじ",
    description: "パックを開けてカードを集め、能力を強化しながら戦うブラウザゲーム。キャラクターやビルドを組み替えてステージ攻略に挑めます。",
    category: "game",
    tags: ["パック開封", "自動戦闘", "育成"],
    url: "https://tetoriapot.github.io/lootmoji/",
    status: "public"
  },
  {
    id: "area-title-maker",
    name: "Area Title Maker",
    description: "ゲームやTRPG動画向けのエリア名・章タイトルを作れる画像ツール。文字や装飾線、背景を調整し、透過PNGでも保存できます。",
    category: "image",
    tags: ["タイトル", "ゲーム演出", "PNG"],
    url: "https://tetoriapot.github.io/area-title-maker/",
    status: "public"
  },
  {
    id: "sanmoku-lab",
    name: "SANMOKU / LAB",
    description: "三目並べに「消える」「動く」「落ちる」などのルールを組み合わせて遊ぶ戦略ゲーム。CPU対戦・対人戦・CPU同士の観戦に対応。",
    category: "game",
    tags: ["三目並べ", "ルール編集", "対戦"],
    url: "https://tetoriapot.github.io/sanmoku-lab/",
    status: "public"
  },
  {
    id: "occupation-atlas",
    name: "探索者職業図鑑",
    description: "現実の仕事内容や一日の流れから、TRPG・物語の人物像を考えるための職業図鑑。職業の検索・比較や、シナリオ導入のヒントを調べられます。",
    category: "trpg",
    tags: ["職業", "キャラクター", "創作資料"],
    url: "https://tetoriapot.github.io/occupation-atlas/",
    status: "public"
  },
  {
    id: "kikamoyo",
    name: "KIKAMOYO",
    description: "プリセットや色・形・配置を調整し、シームレスな幾何学模様を作るツール。PNG・SVG・CSSなどで書き出せます。",
    category: "image",
    tags: ["幾何学模様", "パターン", "背景"],
    url: "https://tetoriapot.github.io/kikamoyo/",
    status: "public"
  }
];
