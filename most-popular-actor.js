// Find the most popular actor from an array
// Input: an array of object, where each element contains the property "popularityScore"
// Output: A string that represents the name of the most popular actor
function mostPopularActor(actors) {
    let popActor = [actors[0]];
    let len = actors.length
    for (let i = 1; i < len; i++) {
    if (popActor[0].popularityScore < actors[i].popularityScore) {
      popActor.unshift(actors[i])
    }
  
    }
    return popActor[0]
  }
  
  var americanActors = [
    { name: "Tom Hanks", popularityScore: 87 },
    { name: "Natalie Portman", popularityScore: 90 },
    { name: "Jack Nicholson", popularityScore: 98 },
    { name: "Julia Roberts", popularityScore: 88 },
  ];
  console.log(mostPopularActor(americanActors)); // => "Jack Nicholson"