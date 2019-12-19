// From the array of given trash, make sure you put every item goes into the right bin. 
// If an item happens to be dirty, it should go to the generic bin, regardless of material.

// Here is the array of trash:

const trash = [
  { name: 'Pizza Box', material: 'paper', dirty: true },
  { name: 'Coke Can', material: 'metal', dirty: false },
  { name: 'Plastic Bag', material: 'plastic', dirty: false },
  { name: 'Moldy Food', material: 'generic', dirty: true },
  { name: 'Cardboard', material: 'paper', dirty: false },
  { name: 'Detergent Container', material: 'plastic', dirty: false },
  { name: 'Wine Bottle', material: 'glass', dirty: false },
  { name: 'Pickle Jar', material: 'glass', dirty: false },
  { name: 'Newspaper', material: 'paper', dirty: false },
  { name: 'Magazine', material: 'paper', dirty: false },
  { name: 'Tree Leaves', material: 'generic', dirty: false },
  { name: 'Beer Bottle', material: 'glass', dirty: false },
  { name: 'Beer Bottle', material: 'paper', dirty: false },
  { name: 'Tuna Can', material: 'metal', dirty: true },
  { name: 'Sausage Can', material: 'metal', dirty: false },
  { name: 'Milk Carton', material: 'plastic', dirty: false },
  { name: 'Cereal Box', material: 'paper', dirty: false },
  { name: 'Juice Pack', material: 'plastic', dirty: false },
  { name: 'Cut Grass', material: 'generic', dirty: false },
  { name: 'Water Bottle', material: 'plastic', dirty: false }
];

// Here is the color map you should follow when selecting items that should go in the specific bins.

const binColorMap = {
  paper: 'blue',
  plastic: 'yellow',
  metal: 'yellow',
  glass: 'green',
  generic: 'black'
};
// And here is the trashBins object that contains arrays representing bins that need to be filled with corresponding trash:

const trashBins = {
  blue: [],
  yellow: [],
  green: [],
  black: []
};

// At the very end, this should be your solution:

// { blue:
//    [ 'Cardboard',
//      'Newspaper',
//      'Magazine',
//      'Beer Bottle',
//      'Cereal Box' ],
//   yellow:
//    [ 'Coke Can',
//      'Plastic Bag',
//      'Detergent Container',
//      'Sausage Can',
//      'Milk Carton',
//      'Juice Pack',
//      'Water Bottle' ],
//   green: [ 'Wine Bottle', 'Pickle Jar', 'Beer Bottle' ],
//   black:
//    [ 'Pizza Box',
//      'Moldy Food',
//      'Tree Leaves',
//      'Tuna Can',
//      'Cut Grass' ] 
// }

function recicleMachine (arr) {
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].dirty === false) {
        if (arr[i].material === "paper") {
          trashBins.blue.push(arr[i].name)
        }
        if (arr[i].material === "plastic" || arr[i].material === "plastic") {
          trashBins.yellow.push(arr[i].name)
        }
        if(arr[i].material === "glass") {
          trashBins.green.push(arr[i].name)
        }
        if (arr[i].material === "generic") {
          trashBins.black.push(arr[i].name)
        }
      }
      else {
        trashBins.black.push(arr[i].name)
      }
    }
    return trashBins
  }
  
  recicleMachine(trash)