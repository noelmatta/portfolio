$("main").onepage_scroll({
  sectionContainer: "section",
  easing: "ease-in-out",
  animationTime: 600,
  pagination: true,
  updateURL: false,
  beforeMove: function (index) { },
  afterMove: function (index) { },
  loop: false,
  keyboard: true,
  responsiveFallback: false,
  direction: "vertical"
});

const portfolio = {};

portfolio.pieceToggle = () => {
  $('.portfolioBlock').on('click', function() {
    let selectedPiece = $(this).attr('name');
    $('.piece').hide();
    $(`#${selectedPiece}`).show();
  })
}

portfolio.events = () => {
  portfolio.pieceToggle();
}

$(function () {
  portfolio.events();
});