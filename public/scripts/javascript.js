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

$(document).ready(function () {

  $('.tabs_default').tabslet();

  $('.tabs_active').tabslet({
    active: 2
  });

  $('.tabs_hover').tabslet({
    mouseevent: 'hover',
    attribute: 'href',
    animation: false
  });

  $('.tabs_animate').tabslet({
    mouseevent: 'click',
    attribute: 'href',
    animation: true
  });

  $('.tabs_rotate').tabslet({
    autorotate: true,
    delay: 3000
  });

  $('.tabs_controls').tabslet();

  $('.before_event').tabslet();
  $('.before_event').on("_before", function () {
    alert('This alert comes before the tab change!');
  });

  $('.after_event').tabslet({
    animation: true
  });
  $('.after_event').on("_after", function () {
    alert('This alert comes after the tab change!');
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXHNjcmlwdHNcXGphdmFzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsTUFBRixFQUFVLGNBQVYsQ0FBeUI7QUFDdkIsb0JBQWtCLFNBREs7QUFFdkIsVUFBUSxhQUZlO0FBR3ZCLGlCQUFlLEdBSFE7QUFJdkIsY0FBWSxJQUpXO0FBS3ZCLGFBQVcsS0FMWTtBQU12QixjQUFZLG9CQUFVLEtBQVYsRUFBaUIsQ0FBRyxDQU5UO0FBT3ZCLGFBQVcsbUJBQVUsS0FBVixFQUFpQixDQUFHLENBUFI7QUFRdkIsUUFBTSxLQVJpQjtBQVN2QixZQUFVLElBVGE7QUFVdkIsc0JBQW9CLEtBVkc7QUFXdkIsYUFBVztBQVhZLENBQXpCOztBQWVBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBWTs7QUFFNUIsSUFBRSxlQUFGLEVBQW1CLE9BQW5COztBQUVBLElBQUUsY0FBRixFQUFrQixPQUFsQixDQUEwQjtBQUN4QixZQUFRO0FBRGdCLEdBQTFCOztBQUlBLElBQUUsYUFBRixFQUFpQixPQUFqQixDQUF5QjtBQUN2QixnQkFBWSxPQURXO0FBRXZCLGVBQVcsTUFGWTtBQUd2QixlQUFXO0FBSFksR0FBekI7O0FBTUEsSUFBRSxlQUFGLEVBQW1CLE9BQW5CLENBQTJCO0FBQ3pCLGdCQUFZLE9BRGE7QUFFekIsZUFBVyxNQUZjO0FBR3pCLGVBQVc7QUFIYyxHQUEzQjs7QUFNQSxJQUFFLGNBQUYsRUFBa0IsT0FBbEIsQ0FBMEI7QUFDeEIsZ0JBQVksSUFEWTtBQUV4QixXQUFPO0FBRmlCLEdBQTFCOztBQUtBLElBQUUsZ0JBQUYsRUFBb0IsT0FBcEI7O0FBRUEsSUFBRSxlQUFGLEVBQW1CLE9BQW5CO0FBQ0EsSUFBRSxlQUFGLEVBQW1CLEVBQW5CLENBQXNCLFNBQXRCLEVBQWlDLFlBQVk7QUFDM0MsVUFBTSx5Q0FBTjtBQUNELEdBRkQ7O0FBSUEsSUFBRSxjQUFGLEVBQWtCLE9BQWxCLENBQTBCO0FBQ3hCLGVBQVc7QUFEYSxHQUExQjtBQUdBLElBQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixRQUFyQixFQUErQixZQUFZO0FBQ3pDLFVBQU0sd0NBQU47QUFDRCxHQUZEO0FBSUQsQ0F2Q0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChcIm1haW5cIikub25lcGFnZV9zY3JvbGwoe1xuICBzZWN0aW9uQ29udGFpbmVyOiBcInNlY3Rpb25cIixcbiAgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIsXG4gIGFuaW1hdGlvblRpbWU6IDYwMCxcbiAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgdXBkYXRlVVJMOiBmYWxzZSxcbiAgYmVmb3JlTW92ZTogZnVuY3Rpb24gKGluZGV4KSB7IH0sXG4gIGFmdGVyTW92ZTogZnVuY3Rpb24gKGluZGV4KSB7IH0sXG4gIGxvb3A6IGZhbHNlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgcmVzcG9uc2l2ZUZhbGxiYWNrOiBmYWxzZSxcbiAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCJcbn0pO1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAkKCcudGFic19kZWZhdWx0JykudGFic2xldCgpO1xuXG4gICQoJy50YWJzX2FjdGl2ZScpLnRhYnNsZXQoe1xuICAgIGFjdGl2ZTogMlxuICB9KTtcblxuICAkKCcudGFic19ob3ZlcicpLnRhYnNsZXQoe1xuICAgIG1vdXNlZXZlbnQ6ICdob3ZlcicsXG4gICAgYXR0cmlidXRlOiAnaHJlZicsXG4gICAgYW5pbWF0aW9uOiBmYWxzZVxuICB9KTtcblxuICAkKCcudGFic19hbmltYXRlJykudGFic2xldCh7XG4gICAgbW91c2VldmVudDogJ2NsaWNrJyxcbiAgICBhdHRyaWJ1dGU6ICdocmVmJyxcbiAgICBhbmltYXRpb246IHRydWVcbiAgfSk7XG5cbiAgJCgnLnRhYnNfcm90YXRlJykudGFic2xldCh7XG4gICAgYXV0b3JvdGF0ZTogdHJ1ZSxcbiAgICBkZWxheTogMzAwMFxuICB9KTtcblxuICAkKCcudGFic19jb250cm9scycpLnRhYnNsZXQoKTtcblxuICAkKCcuYmVmb3JlX2V2ZW50JykudGFic2xldCgpO1xuICAkKCcuYmVmb3JlX2V2ZW50Jykub24oXCJfYmVmb3JlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBhbGVydCgnVGhpcyBhbGVydCBjb21lcyBiZWZvcmUgdGhlIHRhYiBjaGFuZ2UhJylcbiAgfSk7XG5cbiAgJCgnLmFmdGVyX2V2ZW50JykudGFic2xldCh7XG4gICAgYW5pbWF0aW9uOiB0cnVlXG4gIH0pO1xuICAkKCcuYWZ0ZXJfZXZlbnQnKS5vbihcIl9hZnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgYWxlcnQoJ1RoaXMgYWxlcnQgY29tZXMgYWZ0ZXIgdGhlIHRhYiBjaGFuZ2UhJylcbiAgfSk7XG5cbn0pOyJdfQ==
