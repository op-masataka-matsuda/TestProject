# TestProject Frontend

TestProjectの基本設計書に基づいて作成されたReactフロントエンドアプリケーションです。

## 技術スタック

- **React** 18.x - UIライブラリ
- **TypeScript** 5.x - 型安全性
- **Redux Toolkit** - 状態管理
- **Material-UI** 5.x - UIコンポーネント
- **Vite** 4.x - ビルドツール
- **React Router** - ルーティング

## 機能

### 実装済み機能
- ✅ ユーザー認証（ログイン・ログアウト）
- ✅ ダッシュボード画面
- ✅ 管理者・一般ユーザーの役割分担
- ✅ レスポンシブデザイン
- ✅ モダンなUI（Material-UI）

### 主要画面
- **ログイン画面**: ユーザー認証
- **ダッシュボード**: ユーザー情報、統計情報、機能一覧

## セットアップ

### 前提条件
- Node.js 18.x 以上
- npm または yarn

### インストール
```bash
cd frontend
npm install
```

### 開発サーバーの起動
```bash
npm run dev
```

アプリケーションは http://localhost:3000 でアクセス可能です。

### ビルド
```bash
npm run build
```

### プレビュー
```bash
npm run preview
```

## テストアカウント

### 管理者
- **ユーザー名**: admin
- **パスワード**: password
- **権限**: 全機能アクセス可能

### 一般ユーザー
- **ユーザー名**: user
- **パスワード**: password
- **権限**: 制限された機能のみアクセス可能

## ディレクトリ構造

```
frontend/
├── public/                # 静的ファイル
├── src/
│   ├── components/        # Reactコンポーネント
│   │   ├── Dashboard.tsx  # ダッシュボード
│   │   ├── Layout.tsx     # レイアウト
│   │   └── LoginPage.tsx  # ログイン画面
│   ├── store/             # Redux関連
│   │   ├── store.ts       # ストア設定
│   │   └── authSlice.ts   # 認証スライス
│   ├── types/             # TypeScript型定義
│   │   └── index.ts
│   ├── App.tsx            # メインアプリケーション
│   └── main.tsx           # エントリーポイント
├── index.html             # HTMLテンプレート
├── package.json           # 依存関係
├── tsconfig.json          # TypeScript設定
├── vite.config.ts         # Vite設定
└── README.md              # このファイル
```

## 主要な設計決定

### 状態管理
- Redux Toolkitを使用した予測可能な状態管理
- 認証状態の集中管理

### UIデザイン
- Material-UI による一貫したデザインシステム
- レスポンシブ対応
- 日本語対応

### 認証
- 簡素化されたモック認証（実際のプロジェクトではJWT等を使用）
- 役割ベースのアクセス制御

### ルーティング
- React Routerによる宣言的ルーティング
- 認証状態に基づくページ保護

## 今後の拡張

- [ ] 実際のAPI連携
- [ ] テストの追加
- [ ] 多言語対応
- [ ] PWA対応
- [ ] エラーハンドリングの強化
- [ ] パフォーマンス最適化

## 開発ガイドライン

### コーディング規約
- ESLint + TypeScriptのルールに従う
- コンポーネントはPascalCaseで命名
- 型安全性を重視

### コミット規約
- 機能追加: `feat: 新機能の説明`
- バグ修正: `fix: 修正内容の説明`
- リファクタリング: `refactor: リファクタリング内容`

## トラブルシューティング

### 依存関係のエラー
```bash
rm -rf node_modules package-lock.json
npm install
```

### 型エラー
TypeScriptの型定義が正しく読み込まれない場合は、VSCodeを再起動してください。

## サポート

問題が発生した場合は、プロジェクトの基本設計書を参照するか、開発チームまでお問い合わせください。 