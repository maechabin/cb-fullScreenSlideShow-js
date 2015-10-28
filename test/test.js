;(function ($, QUnit, window, document, undefined) {

  "use strict";

  QUnit.module("fullscreen", {
    beforeEach: function () {
      this.fsss = $(".cb-fsss");
      this.fsss.cbFullScreenSlideShow({
        img: [
          "http://jsrun.it/assets/U/z/W/x/UzWxP.jpg",
          "http://jsrun.it/assets/k/I/5/n/kI5nR.jpg",
          "http://jsrun.it/assets/g/5/i/7/g5i7d.jpg"
        ]
      });
    }
  });

  QUnit.test("$.fn.cbFullScreenSlideShow()が読み込まれているか", function (assert) {
    assert.ok($.fn.cbFullScreenSlideShow, "Passed!!");
  });

  QUnit.test("デフォルト値のチェック", function (assert) {

    var width = $(window).width();
    var height = $(window).height();

    assert.equal(this.fsss.css("z-index"), 999, "Passed!!");
    assert.equal(this.fsss.css("background-color"), "rgba(1, 1, 1, 0)", "Passed!!");
    assert.equal(this.fsss.css("width"), width + "px", "Passed!!");
    assert.equal(this.fsss.css("height"), height + "px", "Passed!!");

  });

} (jQuery, QUnit, window, document));
