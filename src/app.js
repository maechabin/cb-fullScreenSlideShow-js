class FullScreenImg {

  constructor(arg) {

    this.imageArr = arg.img;
    this.imageLength = this.imageArr.length;
    this.i = 2;
    this.displayImgFlag = "div1";
    this.image = $(".image");
    this.div1 = $("<div>");
    this.div2 = $("<div>");
    this.interval = 5000;

  }

  animateImg(div) {

    let d1 = (div === "div1") ? "div2" : "div1";
    let d2 = (div === "div1") ? "div1" : "div2";
    let self = this;

    this[d2].animate({
      "opacity": 0
    }, 1000, () => {
      self[d2].css({
        "z-index": 0,
        "background-image": "url(" + self.imageArr[self.i] + ")"
      });
      self.i++;
    });
    this[d1].css({
      "z-index": 1
    }).animate({
      "opacity": 1
    }, 1000);

    this.displayImgFlag = d1;

  }

  changeImg() {

    if (this.i >= this.imageLength) {
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
      "background-position": "center"
    };
    let div1Style = {
      "z-index": 1,
      "opacity": 1,
      "background-image": "url(" + this.imageArr[0] + ")"
    };
    let div2Style = {
      "z-index": 0,
      "opacity": 0,
      "background-image": "url(" + this.imageArr[1] + ")"
    };

    this.image.css({
      "z-index": 999,
      "position": "relative",
      "width": "100vw",
      "height": "100vh",
      "background-color": "transparent"
    });
    this.div1.css($.extend({}, divStyle, div1Style));
    this.div2.css($.extend({}, divStyle, div2Style));

    this.image.after(this.div1, this.div2);

  }

  init() {

    this.makeBg();
    if (this.imageLength) {
      $.each(this.imageArr, function () {
        $("<img>").attr("src", this);
      });
      let timer = setInterval(() => {
        this.changeImg();
      }, this.interval);
    }

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
