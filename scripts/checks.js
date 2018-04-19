(function($) {
  $(function() {
    var source = $('#checks-template').html();
    var template = Handlebars.compile(source);
    $.getJSON('https://app.pairment.com/api/checks.json', function(data) {
      $('tbody').html(template({wcag: data}));
    });
  });
})(jQuery);
