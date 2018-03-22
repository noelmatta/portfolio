(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$("main").onepage_scroll({
  sectionContainer: "section",
  easing: "ease-in-out",
  animationTime: 600,
  pagination: true,
  updateURL: false,
  beforeMove: function beforeMove(index) {},
  afterMove: function afterMove(index) {},
  loop: false,
  keyboard: true,
  responsiveFallback: false,
  direction: "vertical"
});

var portfolio = {};

portfolio.switchActive = function () {
  var portTabs = $('.portfolioBlock');

  for (var i = 0; i < portTabs.length; i++) {
    portTabs[i].addEventListener('click', function () {
      if (portTabs.hasClass('active')) {
        portTabs.removeClass('active');
        $(this).addClass('active');
      }
    });
  }
};

portfolio.clearInput = function () {
  $('input').on('focus', function () {
    $(this).val('');
  });

  $('textarea').on('focus', function () {
    $(this).val('');
  });
};

portfolio.pieceToggle = function () {
  $('.portfolioBlock').on('click', function () {
    var selectedPiece = $(this).attr('name');
    $('.piece').hide();
    $("#" + selectedPiece).show();
  });
};

portfolio.events = function () {
  portfolio.pieceToggle();
  portfolio.clearInput();
  portfolio.switchActive();
};

$(function () {
  portfolio.events();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXHNjcmlwdHNcXGphdmFzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsTUFBRixFQUFVLGNBQVYsQ0FBeUI7QUFDdkIsb0JBQWtCLFNBREs7QUFFdkIsVUFBUSxhQUZlO0FBR3ZCLGlCQUFlLEdBSFE7QUFJdkIsY0FBWSxJQUpXO0FBS3ZCLGFBQVcsS0FMWTtBQU12QixjQUFZLG9CQUFVLEtBQVYsRUFBaUIsQ0FBRyxDQU5UO0FBT3ZCLGFBQVcsbUJBQVUsS0FBVixFQUFpQixDQUFHLENBUFI7QUFRdkIsUUFBTSxLQVJpQjtBQVN2QixZQUFVLElBVGE7QUFVdkIsc0JBQW9CLEtBVkc7QUFXdkIsYUFBVztBQVhZLENBQXpCOztBQWNBLElBQU0sWUFBWSxFQUFsQjs7QUFFQSxVQUFVLFlBQVYsR0FBeUIsWUFBTTtBQUM3QixNQUFNLFdBQVcsRUFBRSxpQkFBRixDQUFqQjs7QUFFQSxPQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksU0FBUyxNQUE3QixFQUFxQyxHQUFyQyxFQUEwQztBQUN4QyxhQUFTLENBQVQsRUFBWSxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFZO0FBQ2hELFVBQUssU0FBUyxRQUFULENBQWtCLFFBQWxCLENBQUwsRUFBbUM7QUFDakMsaUJBQVMsV0FBVCxDQUFxQixRQUFyQjtBQUNBLFVBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsUUFBakI7QUFDRDtBQUNGLEtBTEQ7QUFNRDtBQUNGLENBWEQ7O0FBYUEsVUFBVSxVQUFWLEdBQXVCLFlBQU07QUFDM0IsSUFBRSxPQUFGLEVBQVcsRUFBWCxDQUFjLE9BQWQsRUFBdUIsWUFBVztBQUNoQyxNQUFFLElBQUYsRUFBUSxHQUFSLENBQVksRUFBWjtBQUNELEdBRkQ7O0FBSUEsSUFBRSxVQUFGLEVBQWMsRUFBZCxDQUFpQixPQUFqQixFQUEwQixZQUFZO0FBQ3BDLE1BQUUsSUFBRixFQUFRLEdBQVIsQ0FBWSxFQUFaO0FBQ0QsR0FGRDtBQUdELENBUkQ7O0FBVUEsVUFBVSxXQUFWLEdBQXdCLFlBQU07QUFDNUIsSUFBRSxpQkFBRixFQUFxQixFQUFyQixDQUF3QixPQUF4QixFQUFpQyxZQUFXO0FBQzFDLFFBQUksZ0JBQWdCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxNQUFiLENBQXBCO0FBQ0EsTUFBRSxRQUFGLEVBQVksSUFBWjtBQUNBLFlBQU0sYUFBTixFQUF1QixJQUF2QjtBQUNELEdBSkQ7QUFLRCxDQU5EOztBQVFBLFVBQVUsTUFBVixHQUFtQixZQUFNO0FBQ3ZCLFlBQVUsV0FBVjtBQUNBLFlBQVUsVUFBVjtBQUNBLFlBQVUsWUFBVjtBQUNELENBSkQ7O0FBTUEsRUFBRSxZQUFZO0FBQ1osWUFBVSxNQUFWO0FBRUQsQ0FIRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKFwibWFpblwiKS5vbmVwYWdlX3Njcm9sbCh7XG4gIHNlY3Rpb25Db250YWluZXI6IFwic2VjdGlvblwiLFxuICBlYXNpbmc6IFwiZWFzZS1pbi1vdXRcIixcbiAgYW5pbWF0aW9uVGltZTogNjAwLFxuICBwYWdpbmF0aW9uOiB0cnVlLFxuICB1cGRhdGVVUkw6IGZhbHNlLFxuICBiZWZvcmVNb3ZlOiBmdW5jdGlvbiAoaW5kZXgpIHsgfSxcbiAgYWZ0ZXJNb3ZlOiBmdW5jdGlvbiAoaW5kZXgpIHsgfSxcbiAgbG9vcDogZmFsc2UsXG4gIGtleWJvYXJkOiB0cnVlLFxuICByZXNwb25zaXZlRmFsbGJhY2s6IGZhbHNlLFxuICBkaXJlY3Rpb246IFwidmVydGljYWxcIlxufSk7XG5cbmNvbnN0IHBvcnRmb2xpbyA9IHt9O1xuXG5wb3J0Zm9saW8uc3dpdGNoQWN0aXZlID0gKCkgPT4ge1xuICBjb25zdCBwb3J0VGFicyA9ICQoJy5wb3J0Zm9saW9CbG9jaycpO1xuICBcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3J0VGFicy5sZW5ndGg7IGkrKykge1xuICAgIHBvcnRUYWJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCBwb3J0VGFicy5oYXNDbGFzcygnYWN0aXZlJykgKSB7XG4gICAgICAgIHBvcnRUYWJzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxucG9ydGZvbGlvLmNsZWFySW5wdXQgPSAoKSA9PiB7XG4gICQoJ2lucHV0Jykub24oJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS52YWwoJycpO1xuICB9KTtcbiAgXG4gICQoJ3RleHRhcmVhJykub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykudmFsKCcnKTtcbiAgfSk7XG59XG5cbnBvcnRmb2xpby5waWVjZVRvZ2dsZSA9ICgpID0+IHtcbiAgJCgnLnBvcnRmb2xpb0Jsb2NrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IHNlbGVjdGVkUGllY2UgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcbiAgICAkKCcucGllY2UnKS5oaWRlKCk7XG4gICAgJChgIyR7c2VsZWN0ZWRQaWVjZX1gKS5zaG93KCk7XG4gIH0pXG59XG5cbnBvcnRmb2xpby5ldmVudHMgPSAoKSA9PiB7XG4gIHBvcnRmb2xpby5waWVjZVRvZ2dsZSgpO1xuICBwb3J0Zm9saW8uY2xlYXJJbnB1dCgpO1xuICBwb3J0Zm9saW8uc3dpdGNoQWN0aXZlKCk7XG59XG5cbiQoZnVuY3Rpb24gKCkge1xuICBwb3J0Zm9saW8uZXZlbnRzKCk7XG5cbn0pOyJdfQ==
