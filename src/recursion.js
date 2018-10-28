function recursion (tree ){
    let massOnLevel=[],massOnLevel2=[];
    if("left" in tree ) { 
        massOnLevel.push(recursion(left));
     } 
     if("right" in tree) { 
        massOnLevel.push(recursion(right))
    } 
     else{
        return [].push(value).push(massOnLevel);
     }
     massOnLevel2.push(massOnLevel[0],massOnLevel[2],[massOnLevel[1].concat(massOnLevel[3])])
     
}
// let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

// let array = recursion(tree);
// console.log(array); // [[100], [90, 120], [70,99,110,130]]