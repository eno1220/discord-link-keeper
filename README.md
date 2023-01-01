# discord-link-keeper

Discord に webhook を使用して閲覧しているページのタイトル・URL を投稿するための chrome 拡張機能です。

This is a chrome extension to post the title/URL of the page you are viewing using webhook to Discord.

## セットアップ

1. `git clone`、`Download ZIP`するなどしてコードをダウンロードする。
2. Discord 上で取得した Webhook の URL を[index.js](index.js)の変数`url`にセットする。
3. 拡張機能の管理ページ(chrome://extensions/)を開いて、「デベロッパーモード」を ON にする。 4.「パッケージ化されていない拡張機能を読み込む」というボタンを押しダウンロードしたフォルダを選択する。

なお、Discord 上での webhook 用 URL の取得方法は[こちら](https://support.discord.com/hc/ja/articles/228383668)をご覧ください。

1. download this code by `git clone`, `download ZIP`, etc.
2. set the webhook URL obtained on Discord to the variable `url` in [index.js](index.js)
3. Open the extension's admin (chrome:://extensions) and turn "developer mode" ON.
4. Click the button "Load unpackaged extensions" and select the folder where you downloaded the extension.

For details on how to obtain the webhook URL on Discord, please refer to [here](https://support.discord.com/hc/en/articles/228383668).

Translated with www.DeepL.com/Translator (free version)
