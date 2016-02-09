const jQuery = require("jquery");
const assign = require("object-assign");
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
      this.setTimer = 0;
      this.displayImgFlag = "div1";
      this.div1 = $("<div>");
      this.div2 = $("<div>");
      this.conf = options;

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
          "background-image": "url(" + self.conf.img[self.i].src + ")"
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
        "background-image": "url(" + this.conf.img[0].src + ")"
      };
      let div2Style = {
        "z-index": 0,
        "opacity": 0,
        "background-image": "url(" + this.conf.img[1].src + ")"
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
         imgTag.src = url.src;
      });

    }

    startTimer() {

      if(this.setTimer === 0) {
        this.setTimer = setInterval(() => {
          this.changeImg();
        }, this.conf.interval);
      }

    }

    stopTimer() {

      if(this.setTimer !== 0) {
        clearInterval(this.setTimer);
      }
      this.setTimer = 0;

    }

    init() {

      if (this.conf.img.length) {
        this.makeBg();
        this.preloadImg();
      }

      return this;

    }

  }

  $.widget("plugin.cbFullScreenSlideShow", {

    fsss: {},

    options: {
      img: [],
      width: "100%",
      height: "100vh",
      zindex: 999,
      background: "rgba(1,1,1,0)",
      duration: 1000,
      interval: 5000,
      blur: "0px",
      grayscale: "0%",
      sepia: "0%"
    },

    start() {
      this.fsss.startTimer();
    },

    stop() {
      this.fsss.stopTimer();
    },

    _create() {

      let element = this.element;
      let options = this.options;
      if (options.img instanceof Array && options.img.length !== 0) {
        this.fsss = new FullScreenSlideShow(element, options);
        this.fsss.init();
        this.fsss.startTimer();
      } else {
        return;
      }

    }

  });

}));
