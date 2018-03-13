//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .

$(document).ready(() => {
  setTimeout(() => {
    $('#notice_wrapper').fadeOut('slow', () => {
      $(this).remove();
    });
  }, 4000);
});
