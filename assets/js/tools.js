export const categories = [
  { id: "all", label: "すべて", icon: "✦" },
  { id: "image", label: "画像", icon: "▧" },
  { id: "text", label: "テキスト", icon: "Aa" },
  { id: "trpg", label: "TRPG", icon: "◇" },
  { id: "audio", label: "音声", icon: "♪" },
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
  }
];
