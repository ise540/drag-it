import './style.css';
import Draggable from 'draggable';

const ball = document.querySelector('.draggable-ball');
const distanceSpan = document.querySelector('.distance');

let start = {
  x: 0,
  y: 0
};

let finish = {
  x: 0,
  y: 0
};
// eslint-disable-next-line no-new
new Draggable(ball, {
  grid: 10,
  onDrag: function () {
    ball.style.backgroundColor = 'blue';
  },
  onDragStart: function (elem, x, y) {
    start = { x: x, y: y };
  },
  onDragEnd: function (elem, x, y) {
    finish = { x: x, y: y };
    distanceSpan.textContent = calculateDistance(start, finish);
    ball.style.backgroundColor = 'red';
  }
});

function calculateDistance(start, finish) {
  return Math.round(
    Math.sqrt((finish.x - start.x) ** 2 + (finish.y - start.y) ** 2)
  );
}
