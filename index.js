const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteries = [5, 10, 8, 3, 5];

const totalBatteries = batteries.reduce(function (total, battery) {
  return total + battery;
}, 0);