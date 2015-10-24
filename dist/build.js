(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FullScreenImg = (function () {
  function FullScreenImg(arg) {
    _classCallCheck(this, FullScreenImg);

    this.imageArr = arg.img;
    this.imageLength = this.imageArr.length;
    this.i = 2;
    this.displayImgFlag = "div1";
    this.image = $(".image");
    this.div1 = $("<div>");
    this.div2 = $("<div>");
    this.interval = 5000;
  }

  _createClass(FullScreenImg, [{
    key: "animateImg",
    value: function animateImg(div) {

      var d1 = div === "div1" ? "div2" : "div1";
      var d2 = div === "div1" ? "div1" : "div2";
      var self = this;

      this[d2].animate({
        "opacity": 0
      }, 1000, function () {
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
  }, {
    key: "changeImg",
    value: function changeImg() {

      if (this.i >= this.imageLength) {
        this.i = 0;
      }
      this.animateImg(this.displayImgFlag);
    }
  }, {
    key: "makeBg",
    value: function makeBg() {

      var divStyle = {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "background-size": "cover",
        "background-position": "center"
      };
      var div1Style = {
        "z-index": 1,
        "opacity": 1,
        "background-image": "url(" + this.imageArr[0] + ")"
      };
      var div2Style = {
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
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.makeBg();
      if (this.imageLength) {
        $.each(this.imageArr, function () {
          $("<img>").attr("src", this);
        });
        var timer = setInterval(function () {
          _this.changeImg();
        }, this.interval);
      }
    }
  }]);

  return FullScreenImg;
})();

var a = new FullScreenImg({
  img: ["http://jsrun.it/assets/W/j/R/b/WjRbr.jpg", "http://jsrun.it/assets/O/R/d/T/ORdTy.jpg", "http://jsrun.it/assets/E/0/s/p/E0spJ.jpg"]
});
a.init();

},{}]},{},[1]);
