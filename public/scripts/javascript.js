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
};

$(function () {
  portfolio.events();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXHNjcmlwdHNcXGphdmFzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsTUFBRixFQUFVLGNBQVYsQ0FBeUI7QUFDdkIsb0JBQWtCLFNBREs7QUFFdkIsVUFBUSxhQUZlO0FBR3ZCLGlCQUFlLEdBSFE7QUFJdkIsY0FBWSxJQUpXO0FBS3ZCLGFBQVcsS0FMWTtBQU12QixjQUFZLG9CQUFVLEtBQVYsRUFBaUIsQ0FBRyxDQU5UO0FBT3ZCLGFBQVcsbUJBQVUsS0FBVixFQUFpQixDQUFHLENBUFI7QUFRdkIsUUFBTSxLQVJpQjtBQVN2QixZQUFVLElBVGE7QUFVdkIsc0JBQW9CLEtBVkc7QUFXdkIsYUFBVztBQVhZLENBQXpCOztBQWVBLElBQU0sWUFBWSxFQUFsQjs7QUFFQSxVQUFVLFVBQVYsR0FBdUIsWUFBTTtBQUMzQixJQUFFLE9BQUYsRUFBVyxFQUFYLENBQWMsT0FBZCxFQUF1QixZQUFXO0FBQ2hDLE1BQUUsSUFBRixFQUFRLEdBQVIsQ0FBWSxFQUFaO0FBQ0QsR0FGRDs7QUFJQSxJQUFFLFVBQUYsRUFBYyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQVk7QUFDcEMsTUFBRSxJQUFGLEVBQVEsR0FBUixDQUFZLEVBQVo7QUFDRCxHQUZEO0FBR0QsQ0FSRDs7QUFVQSxVQUFVLFdBQVYsR0FBd0IsWUFBTTtBQUM1QixJQUFFLGlCQUFGLEVBQXFCLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7QUFDMUMsUUFBSSxnQkFBZ0IsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLE1BQWIsQ0FBcEI7QUFDQSxNQUFFLFFBQUYsRUFBWSxJQUFaO0FBQ0EsWUFBTSxhQUFOLEVBQXVCLElBQXZCO0FBQ0QsR0FKRDtBQUtELENBTkQ7O0FBUUEsVUFBVSxNQUFWLEdBQW1CLFlBQU07QUFDdkIsWUFBVSxXQUFWO0FBQ0EsWUFBVSxVQUFWO0FBQ0QsQ0FIRDs7QUFLQSxFQUFFLFlBQVk7QUFDWixZQUFVLE1BQVY7QUFDRCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoXCJtYWluXCIpLm9uZXBhZ2Vfc2Nyb2xsKHtcbiAgc2VjdGlvbkNvbnRhaW5lcjogXCJzZWN0aW9uXCIsXG4gIGVhc2luZzogXCJlYXNlLWluLW91dFwiLFxuICBhbmltYXRpb25UaW1lOiA2MDAsXG4gIHBhZ2luYXRpb246IHRydWUsXG4gIHVwZGF0ZVVSTDogZmFsc2UsXG4gIGJlZm9yZU1vdmU6IGZ1bmN0aW9uIChpbmRleCkgeyB9LFxuICBhZnRlck1vdmU6IGZ1bmN0aW9uIChpbmRleCkgeyB9LFxuICBsb29wOiBmYWxzZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHJlc3BvbnNpdmVGYWxsYmFjazogZmFsc2UsXG4gIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiXG59KTtcblxuXG5jb25zdCBwb3J0Zm9saW8gPSB7fTtcblxucG9ydGZvbGlvLmNsZWFySW5wdXQgPSAoKSA9PiB7XG4gICQoJ2lucHV0Jykub24oJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS52YWwoJycpO1xuICB9KTtcbiAgXG4gICQoJ3RleHRhcmVhJykub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykudmFsKCcnKTtcbiAgfSk7XG59XG5cbnBvcnRmb2xpby5waWVjZVRvZ2dsZSA9ICgpID0+IHtcbiAgJCgnLnBvcnRmb2xpb0Jsb2NrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IHNlbGVjdGVkUGllY2UgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcbiAgICAkKCcucGllY2UnKS5oaWRlKCk7XG4gICAgJChgIyR7c2VsZWN0ZWRQaWVjZX1gKS5zaG93KCk7XG4gIH0pXG59XG5cbnBvcnRmb2xpby5ldmVudHMgPSAoKSA9PiB7XG4gIHBvcnRmb2xpby5waWVjZVRvZ2dsZSgpO1xuICBwb3J0Zm9saW8uY2xlYXJJbnB1dCgpO1xufVxuXG4kKGZ1bmN0aW9uICgpIHtcbiAgcG9ydGZvbGlvLmV2ZW50cygpO1xufSk7Il19
