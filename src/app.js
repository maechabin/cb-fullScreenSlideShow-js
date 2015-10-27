var jQuery = require("jquery");
var assign = require("object-assign");
require("jquery-ui/widget");

;((factory) => {

  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory(require("jquery"), window, document);
  } else {
    factory(jQuery, window, document);
  }

} (($, window, document, undefined) => {

  class FullScreenSlideShow {

    constructor(element, options) {

      this.element = element;
      this.$element = $(element);
      this.i = 2;
      this.setTimer = "";
      this.displayImgFlag = "div1";
      this.div1 = $("<div>");
      this.div2 = $("<div>");
      this.conf = {};
      this.options = options;
      this.defaults = {
        img: [],
        width: "100vw",
        height: "100vh",
        zindex: 999,
        background: "rgba(1,1,1,0)",
        duration: 1000,
        interval: 5000,
        blur: "0px",
        grayscale: "0%",
        sepia: "0%"

      };

    }

    animateImg(div) {

      let d1 = (div === "div1") ? "div2" : "div1";
      let d2 = (div === "div1") ? "div1" : "div2";
      let self = this;

      this[d2].animate({
        "opacity": 0
      }, this.conf.duration, () => {
        self[d2].css({
          "z-index": 0,
          "background-image": "url(" + self.conf.img[self.i] + ")"
        });
        self.i++;
      });
      this[d1].css({
        "z-index": 1
      }).animate({
        "opacity": 1
      }, this.conf.duration);

      this.displayImgFlag = d1;

    }

    changeImg() {

      if (this.i >= this.conf.img.length) {
        this.i = 0;
      }
      this.animateImg(this.displayImgFlag);

    }

    makeBg() {

      let divStyle = {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": this.conf.width,
        "height": this.conf.height,
        "background-size": "cover",
        "background-position": "center",
        "-webkit-filter": `blur(${this.conf.blur}) grayscale(${this.conf.grayscale}) sepia(${this.conf.sepia})`,
        "filter": `blur(${this.conf.blur}) grayscale(${this.conf.grayscale}) sepia(${this.conf.sepia})`
      };
      let div1Style = {
        "z-index": 1,
        "opacity": 1,
        "background-image": "url(" + this.conf.img[0] + ")"
      };
      let div2Style = {
        "z-index": 0,
        "opacity": 0,
        "background-image": "url(" + this.conf.img[1] + ")"
      };

      this.$element.css({
        "z-index": this.conf.zindex,
        "position": "relative",
        "width": this.conf.width,
        "height": this.conf.height,
        "background-color": this.conf.background
      });
      this.div1.css(assign({}, divStyle, div1Style));
      this.div2.css(assign({}, divStyle, div2Style));
      this.$element.after(this.div1, this.div2);

    }

    preloadImg() {

      this.conf.img.forEach((url) => {
         var imgTag = document.createElement("img");
         imgTag.src = url;
      });

    }

    startTimer() {

      this.setTimer = setInterval(() => {
        this.changeImg();
      }, this.conf.interval);

    }

    stopTimer() {

      clearInterval(this.setTimer);

    }

    init() {
      this.conf = assign({}, this.defaults, this.options);
      if (this.conf.img.length) {
        this.makeBg();
        this.preloadImg();
        this.startTimer();
      }

      return this;

    }

  }

  $.extend($.fn, {

    cbFullScreenSlideShow(options) {
      return this.each(() => {
        new FullScreenSlideShow(this, options).init();
      });
    }

  });

}));
