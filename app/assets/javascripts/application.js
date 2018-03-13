//= require rails-ujs
//= require jquery
//= require_tree .

$(document).ready(() => {
  setTimeout(() => {
    $('#notice_wrapper').fadeOut('slow', () => {
      $(this).remove();
    });
  }, 2000);
});
