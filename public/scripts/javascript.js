(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$("main").onepage_scroll({
  sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease-in-out", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
  // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 600, // AnimationTime let you define how long each section takes to animate
  pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  beforeMove: function beforeMove(index) {}, // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function afterMove(index) {}, // This option accepts a callback function. The function will be called after the page moves.
  loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: true, // You can activate the keyboard controls
  responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
  // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
  // the browser's width is less than 600, the fallback will kick in.
  direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});

// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//     render() {
//       return (
//         <div>
//           Hello
//         </div>
//       )
//     }
// }

// ReactDOM.render(<App />, document.getElementById('app'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXHNjcmlwdHNcXGphdmFzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsTUFBRixFQUFVLGNBQVYsQ0FBeUI7QUFDdkIsb0JBQWtCLFNBREssRUFDVTtBQUNqQyxVQUFRLGFBRmUsRUFFaUI7QUFDeEM7QUFDQSxpQkFBZSxHQUpRLEVBSVM7QUFDaEMsY0FBWSxJQUxXLEVBS1U7QUFDakMsYUFBVyxLQU5ZLEVBTVU7QUFDakMsY0FBWSxvQkFBVSxLQUFWLEVBQWlCLENBQUcsQ0FQVCxFQU9ZO0FBQ25DLGFBQVcsbUJBQVUsS0FBVixFQUFpQixDQUFHLENBUlIsRUFRWTtBQUNuQyxRQUFNLEtBVGlCLEVBU1U7QUFDakMsWUFBVSxJQVZhLEVBVVU7QUFDakMsc0JBQW9CLEtBWEcsRUFXVztBQUNsQztBQUNBO0FBQ0EsYUFBVyxVQWRZLENBY1U7QUFkVixDQUF6Qjs7QUFtQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChcIm1haW5cIikub25lcGFnZV9zY3JvbGwoe1xuICBzZWN0aW9uQ29udGFpbmVyOiBcInNlY3Rpb25cIiwgICAgIC8vIHNlY3Rpb25Db250YWluZXIgYWNjZXB0cyBhbnkga2luZCBvZiBzZWxlY3RvciBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHVzZSBzZWN0aW9uXG4gIGVhc2luZzogXCJlYXNlLWluLW91dFwiLCAgICAgICAgICAgICAgICAgIC8vIEVhc2luZyBvcHRpb25zIGFjY2VwdHMgdGhlIENTUzMgZWFzaW5nIGFuaW1hdGlvbiBzdWNoIFwiZWFzZVwiLCBcImxpbmVhclwiLCBcImVhc2UtaW5cIixcbiAgLy8gXCJlYXNlLW91dFwiLCBcImVhc2UtaW4tb3V0XCIsIG9yIGV2ZW4gY3ViaWMgYmV6aWVyIHZhbHVlIHN1Y2ggYXMgXCJjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjQyMCwgMS4zMTApXCJcbiAgYW5pbWF0aW9uVGltZTogNjAwLCAgICAgICAgICAgICAvLyBBbmltYXRpb25UaW1lIGxldCB5b3UgZGVmaW5lIGhvdyBsb25nIGVhY2ggc2VjdGlvbiB0YWtlcyB0byBhbmltYXRlXG4gIHBhZ2luYXRpb246IHRydWUsICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gZWl0aGVyIHNob3cgb3IgaGlkZSB0aGUgcGFnaW5hdGlvbi4gVG9nZ2xlIHRydWUgZm9yIHNob3csIGZhbHNlIGZvciBoaWRlLlxuICB1cGRhdGVVUkw6IGZhbHNlLCAgICAgICAgICAgICAgICAvLyBUb2dnbGUgdGhpcyB0cnVlIGlmIHlvdSB3YW50IHRoZSBVUkwgdG8gYmUgdXBkYXRlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHVzZXIgc2Nyb2xsIHRvIGVhY2ggcGFnZS5cbiAgYmVmb3JlTW92ZTogZnVuY3Rpb24gKGluZGV4KSB7IH0sICAvLyBUaGlzIG9wdGlvbiBhY2NlcHRzIGEgY2FsbGJhY2sgZnVuY3Rpb24uIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHBhZ2UgbW92ZXMuXG4gIGFmdGVyTW92ZTogZnVuY3Rpb24gKGluZGV4KSB7IH0sICAgLy8gVGhpcyBvcHRpb24gYWNjZXB0cyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHBhZ2UgbW92ZXMuXG4gIGxvb3A6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gaGF2ZSB0aGUgcGFnZSBsb29wIGJhY2sgdG8gdGhlIHRvcC9ib3R0b20gd2hlbiB0aGUgdXNlciBuYXZpZ2F0ZXMgYXQgdXAvZG93biBvbiB0aGUgZmlyc3QvbGFzdCBwYWdlLlxuICBrZXlib2FyZDogdHJ1ZSwgICAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIGFjdGl2YXRlIHRoZSBrZXlib2FyZCBjb250cm9sc1xuICByZXNwb25zaXZlRmFsbGJhY2s6IGZhbHNlLCAgICAgICAgLy8gWW91IGNhbiBmYWxsYmFjayB0byBub3JtYWwgcGFnZSBzY3JvbGwgYnkgZGVmaW5pbmcgdGhlIHdpZHRoIG9mIHRoZSBicm93c2VyIGluIHdoaWNoXG4gIC8vIHlvdSB3YW50IHRoZSByZXNwb25zaXZlIGZhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZC4gRm9yIGV4YW1wbGUsIHNldCB0aGlzIHRvIDYwMCBhbmQgd2hlbmV2ZXJcbiAgLy8gdGhlIGJyb3dzZXIncyB3aWR0aCBpcyBsZXNzIHRoYW4gNjAwLCB0aGUgZmFsbGJhY2sgd2lsbCBraWNrIGluLlxuICBkaXJlY3Rpb246IFwidmVydGljYWxcIiAgICAgICAgICAgIC8vIFlvdSBjYW4gbm93IGRlZmluZSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBPbmUgUGFnZSBTY3JvbGwgYW5pbWF0aW9uLiBPcHRpb25zIGF2YWlsYWJsZSBhcmUgXCJ2ZXJ0aWNhbFwiIGFuZCBcImhvcml6b250YWxcIi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgXCJ2ZXJ0aWNhbFwiLiAgXG59KTtcblxuXG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuLy8gY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbi8vICAgICByZW5kZXIoKSB7XG4vLyAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgIEhlbGxvXG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgKVxuLy8gICAgIH1cbi8vIH1cblxuLy8gUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=
