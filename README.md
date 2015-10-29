# cb-fullscreenslideshow.js (cbfsss)

## about

cb-fullscreenslideshow.jsは、画像の配列を読み込んで、ブラウザの画面全体（フルスクリーン）に表示させるためのjQueryプラグインです。画像が複数ある場合は、アニメーションを伴ったスライドショーで順々に表示していきます。

以下のjQueryメソッドを提供します。

- **.cbFullScreenSlideShow()メソッド**: 指定した要素に対して画像のフルスクリーンスライドショーの機能を付与します。

## demo

通常スタイル
http://jsrun.it/maechabin/oFAj

開始、停止機能実装スタイル
http://jsrun.it/maechabin/kNLM

## usage

### 1. プラグインをダウンロードする

こちらのページから[ダウンロード](https://github.com/maechabin/cb-fullScreenSlideShow-js/archive/master.zip)するか、`[git clone]`コマンドでローカルにコピーします。

```
$ git clone git@github.com:maechabin/cb-fullScreenSlideShow-js.git 任意のディレクトリ名
```

### 2. プラグイン & 外部ファイルを読み込む

使用するプラグインはdistディレクト内にあります。jQueryと一緒にページに読み込みます。

```html
<script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="jquery.cb-fsss.min.js"></script>
```

※当プラグインはCommonJSに対応しています。require()メソッドで読み込んでもOKです。

### 3. 要素を作る

スライドショーの機能を付与させる要素をページ内に作ります。

```html
<div class="cb-fsss"></div>
```

### 4. 画像の配列をオプションに指定してプラグインを実行する

オプションとして、'img'キーの値に、表示させる画像の配列をセットして、プラグインを実行します。

```javascript
$(".cb-fsss").cbFullScreenSlideShow({
  img: [{
    src: "./image/aaa.png",
    alt: "画像1",
    link: "http://example.com/"
  },
  {
    src: "./image/bbb.png"
    alt: "画像2"
  },
  {
    src: "./image/ccc.png",
    link: "./image/ccc.png"
  }]
});
```

※フルスクリーンで表示させるので、画像のサイズは大きめのものが望ましいです。

## api

当プラグインでは以下のapiを提供します。

- **.cbFullScreenSlideShow("stop")メソッド**: スライドショー機能を付与した要素に対して実行することで、スライドショーを停止させる機能を提供します。

- **.cbFullScreenSlideShow("start")メソッド**: スライドショー機能を付与した要素に対して実行することで、スライドショーを開始させる機能を提供します。


## options

<dl>
<dt>img {Array} 必須</dt>
<dd>スライドショーさせたい画像の情報（オブジェクト）を配列で指定します。デフォルト値は`[]`。画像の情報は以下の形式で指定します。

```
{src: 画像のパス（必須）, alt: 画像の説明（任意）, link: 画像の飛び先URL（任意）}
```
</dd>

<dt>width {String}</dt>
<dd>スライドショー機能を付与する要素の幅を指定します。cssでのwidthプロパティに指定できる値で指定します。デフォルト値は`100vw`。</dd>

<dt>height {String}</dt>
<dd>スライドショー機能を付与する要素の高さを指定します。cssでのheightプロパティに指定できる値で指定します。デフォルト値は`100vh`。</dd>

<dt>zindex {Number}</dt>
<dd>スライドショー機能を付与する要素の重なり順を指定します。値が大きいほど上になります。CSSのz-indexプロパティに指定できる値で指定します。デフォルト値は`999`。</dd>

<dt>background {String}</dt>
<dd>スライドショー機能を付与する要素の背景色と透明度を指定します。スライドショーに網掛け効果を適用させることができます。CSSのbackground-colorプロパティに指定できるrgba値で指定します。デフォルト値は`rgba(1,1,1,0)`。</dd>

<dt>duration {Number}</dt>
<dd>スライドショー機能の画像の切り替わるアニメーションの速さを指定します。数値（単位はミリ秒)で指定します。デフォルト値は`1000`。</dd>

<dt>interval {Number}</dt>
<dd>スライドショー機能の1枚の画像の表示する時間を指定します。数値（単位はミリ秒)で指定します。デフォルト値は`5000`。</dd>

<dt>interval {String}</dt>
<dd>スライドショーで表示する画像に「ぼかし」のエフェクトをかけます。cssのfilterプロパティのblur関数の引数に指定できる値（0px〜10px)で指定します。デフォルト値は`0px`。</dd>

<dt>grayscale {String}</dt>
<dd>スライドショーで表示する画像に「モノクロ」のエフェクトをかけます。cssのfilterプロパティのgrayscale関数の引数に指定できる値（0%〜100%)で指定します。デフォルト値は`0%`。</dd>

<dt>sepia {String}</dt>
<dd>スライドショーで表示する画像に「セピア」のエフェクトをかけます。cssのfilterプロパティのsepia関数の引数に指定できる値（0%〜100%)で指定します。デフォルト値は`0%`。</dd>

</dl>

## license
MIT license
