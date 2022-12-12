# nuxt-template

## 注意事項
- `yarn install` でインストールすることをおすすめします。
- JS ファイルは `plugins/jd/modules` で管理します。

## コマンド一覧

### Nuxt を起動 

**target: server (デフォルト値)**
- `yarn dev` または `npm run dev` - 開発サーバーを起動します。
- `yarn build` または `npm run build` - 本番用の webpack を使用してアプリケーションをビルドおよび最適化します。
- `yarn start` または `npm run start` - (`yarn build` を実行した後に)本番サーバーを起動します。Heroku や Digital Ocean などの Node.js ホスティングに使用します。

**target: static**
- `yarn dev` または `npm run dev` - 開発サーバーを起動します。
- `yarn generate` または `npm run generate` - （必要に応じて）アプリケーションをビルドし、すべてのルートを HTML ファイルとして生成し、dist/ ディレクトリに静的にエクスポートします（静的ホスティングに使用されます）。
- `yarn start` または `npm run start` - 静的ホスティング（Netlify、Vercel、Surge など）と同じように dist/ ディレクトリを提供します。デプロイ前のテストに最適です。

### Nuxt Storybook を起動

`yarn nuxt storybook` または `npx nuxt storybook`


## Nuxt.jsのディレクトリ構造

### `assets`

Stylus や SASS、 Image、 Font のようなコンパイルされていないファイルを入れます。

### `components`

ページにインポートするすべての Vue.js のコンポーネントファイルを入れます。
Nuxt を使用すると、作成したコンポーネントを .vue ファイルに自動でインポートすることができます。（訳注: nuxt.config.js 内の）components を true に設定すると、Nuxt がスキャンして自動でインポートしてくれます。

### `layouts`

アプリケーションのレイアウトを含みます。レイアウトはページの外観を変更するために使用されます（例えばサイドバーなど）。

### `pages`

アプリケーションのビュー及びルーティングファイルを入れます。Nuxt.js フレームワークはこのディレクトリ内のすべての .vue ファイルを読み込み、アプリケーションのルーターを作成します。

### `plugins`

ルートの Vue.js アプリケーションをインスタンス化する前に実行したい JavaScript プラグインを入れます。 ここはコンポーネントをグローバルに登録したり、関数や定数を挿入するための場所です。

### `static`

直接サーバのルートに配置され（`/static/robots.txt` は `http://localhost:3000/robots.txt` でアクセス可能です）、変更されない可能性の高いファイルが含まれています（例えば、favicon など）。

例: `/static/robots.txt` は `/robots.txt` に配置されます。

### `store`

Vuex ストア のファイルを入れます。Vuex ストアは Nuxt.js に付属していますが、デフォルトでは無効になっています。このディレクトリに index.js　ファイルを作成するとストアが有効になります。