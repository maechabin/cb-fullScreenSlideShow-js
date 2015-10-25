class FullScreenImg {

  constructor(options) {

    this.$element = $(".image");
    this.i = 2;
    this.displayImgFlag = "div1";
    this.div1 = $("<div>");
    this.div2 = $("<div>");
    this.conf = {};
    this.options = options;
    this.defaults = {
      img: [],
      width: "100vw",
      height: "100vh",
      background: "rgba(1,1,1,0)",
      duration: 1000,
      interval: 5000
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
      "width": "100%",
      "height": "100%",
      "background-size": "cover",
      "background-position": "center",
      "-webkit-filter": "blur(0px) grayscale(0%) sepia(0%)"
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
      "z-index": 999,
      "position": "relative",
      "width": this.conf.width,
      "height": this.conf.height,
      "background-color": this.conf.background
    });
    this.div1.css($.extend({}, divStyle, div1Style));
    this.div2.css($.extend({}, divStyle, div2Style));

    this.$element.after(this.div1, this.div2);

  }

  init() {

    this.conf = $.extend({}, this.defaults, this.options);
    this.makeBg();
    if (this.conf.img.length) {
      $.each(this.conf.img, function () {
        $("<img>").attr("src", this);
      });
      let timer = setInterval(() => {
        this.changeImg();
      }, this.conf.interval);
    }
    return this;

  }

}

var a =  new FullScreenImg({
  img: [
    "http://jsrun.it/assets/W/j/R/b/WjRbr.jpg",
    "http://jsrun.it/assets/O/R/d/T/ORdTy.jpg",
    "http://jsrun.it/assets/E/0/s/p/E0spJ.jpg",
  ]
});
a.init();
