
function sumOfOther(mass){
    let resultingArr = [],
        sumAllElements;
    sumAllElements=mass.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
      });
      mass.forEach(function(element) {
        resultingArr.push(sumAllElements-element);
      });
   return resultingArr
}

