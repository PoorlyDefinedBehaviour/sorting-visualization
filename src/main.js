const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

const generateRandomArray = size => {
  let newArray = [];
  for (let i = 0; i < size; i++) {
    newArray.push(Math.random() * CANVAS_HEIGHT);
  }
  return newArray;
};

const drawLines = array => {
  array.forEach((number, index) => {
    stroke(255);
    line(index, CANVAS_HEIGHT, index, number);
  });
};

const cringeSort = (() => {
  let i = 0;
  return array => {
    if (i >= array.length) {
      noLoop();
      console.log("done");
      return;
    }
    array.forEach((element, index) => {
      if (element < array[i]) {
        array[index] = array[i];
        array[i] = element;
      }
    });
    i++;
  };
})();

const numbers = generateRandomArray(CANVAS_WIDTH);

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent("canvasblock");
}

function draw() {
  background(111);
  drawLines(numbers);
  cringeSort(numbers);
}
