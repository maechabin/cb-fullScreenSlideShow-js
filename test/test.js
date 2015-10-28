;(function ($, QUnit, window, document, undefined) {

  "use strict";

  QUnit.module("fullscreen", {
    beforeEach: function () {
      this.fsss = $(".cb-fsss");
    }
  });

  QUnit.test("$.fn.cbFullScreenSlideShow()が読み込まれているか", function (assert) {
    this.fsss.cbFullScreenSlideShow();
    assert.ok($.fn.cbFullScreenSlideShow, "Passed!!");
  });

} (jQuery, QUnit, window, document));
