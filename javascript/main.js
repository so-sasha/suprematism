let animation01 = anime({
  targets: '#rectangleone',
  autoplay: true,
  duration: 4000,
  direction: 'alternate',
  translateX: -1920,
  loop: true,
  easing: 'easeInOutSine',
})

let animation02 = anime({
  targets: '#rectangletwo',
  autoplay: true,
  duration: 6000,
  direction: 'alternate',
  translateX: 1920,
  loop: true,
  easing: 'easeInOutSine',
})

let animation03 = anime({
  targets: '#rectanglethree',
  autoplay: true,
  duration: 4000,
  direction: 'alternate',
  translateX: -1920,
  loop: true,
  easing: 'easeInOutSine',
})

let animation04 = anime({
  targets: '#squareyellow',
  autoplay: true,
  loop: true,
  direction: 'alternate',
  easing: function(el, i, total) {
    return function(t) {
      return Math.pow(Math.sin(t * (i + 1)), total);
    }
  },
  translateY: [
    { value: 594, duration: 1000, delay: 500 },
  // { value: -190, duration: 1000, delay: 500 },
  // { value: 0, duration: 1000, delay: 500 },
  ],
  // translateX: [
  // { value: 786, duration: 1000, delay: 500 },
  // { value: -786, duration: 1000, delay: 500 },
  // { value: 0, duration: 1000, delay: 500 },
  // ],
  // keyframes: [
  //     {translateY: 594},
  //     {translateX: 780},
  //     {translateY: 40},
  //     {translateX: 0},
  //     {translateY: 0}
  //   ],
  //   duration: 15000,
  //   easing: 'easeOutElastic(1, .8)',
  //   loop: true,
})

// let animation04 = anime({
//   targets: '#squareyellow',
//   autoplay: true,
//   translateX: [
//     { value: 786, duration: 1000, delay: 500 },
//   ],
// })

let animation05 = anime({
  targets: '#squaregreen',
  autoplay: true,
  translateY: [
    { value: -495, duration: 3000, delay: 1000 },
  ],
  loop: true,
  direction: 'alternate',
})

let animation06 = anime({
  targets: '#circle',
  loop: true,
  autoplay: true,
  direction: 'alternate',
  translateX: [
    { value: -525, duration: 1000, delay: 1000 },
  ],
  easing: function(el, i, total) {
    return function(t) {
      return Math.pow(Math.sin(t * (i + 1)), total);
    }
  }
})

let animation07 = anime({
  targets: '#square',
  loop: true,
  autoplay: true,
  direction: 'alternate',
  width: '100%',
  easing: 'easeInOutQuad',
})

var colorsExamples = anime.timeline({
  endDelay: 2000,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
})
.add({ targets: '#rectangletwo',  background: '#000' }, 0)
