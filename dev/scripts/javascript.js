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

portfolio.switchActive = () => {
  const portTabs = $('.portfolioBlock');
  
  for (var i = 0; i < portTabs.length; i++) {
    portTabs[i].addEventListener('click', function () {
      if ( portTabs.hasClass('active') ) {
        portTabs.removeClass('active');
        $(this).addClass('active');
      }
    });
  }
}

portfolio.clearInput = () => {
  $('input').on('focus', function() {
    $(this).val('');
  });
  
  $('textarea').on('focus', function () {
    $(this).val('');
  });
}

portfolio.pieceToggle = () => {
  $('.portfolioBlock').on('click', function() {
    let selectedPiece = $(this).attr('name');
    $('.piece').hide();
    $(`#${selectedPiece}`).show();
  })
}

portfolio.events = () => {
  portfolio.pieceToggle();
  portfolio.clearInput();
  portfolio.switchActive();
}

$(function () {
  portfolio.events();

});