/**
 * @file
 *  Testing behavior for JSMessageTest.
 */

(function ($, Drupal) {

  /**
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   */
  Drupal.behaviors.js_message_test = {
    attach: function (context) {
      $('body').once().each(function() {
        var range = Array.apply(null, Array(10)).map(function (_, i) {
          return i;
        });

        $.each(range, function (index, value) {
          Drupal.announce('Message number: ' + value);
        });
      });
    }
  };

})(jQuery, Drupal);

