function swap({ x, y }) {
  return {
    x: y,
    y: x,
  }
}

let obj = swap({ x: 5, y: 8 });

console.log(swap({ x: 5, y: 8 }));