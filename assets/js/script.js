document.location.hash = '';

(function new_order() {
  var $new_order = $('.new-order');
  $new_order.html(function(index, html) {
    return html.replace(/\S/g, '<span>$&</span>');
  });
  (function color() {
    $color = $new_order.find('span');
    $color.each(function() {
      var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      $(this).css({
        'color': color
      });
    });
    setTimeout(color, 1000);
  })();
})();
