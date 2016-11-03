function theBeatlesPlay(marray, iarray){
  var array = []
  for(var cv = 0; cv < marray.length; cv++){
    var string = `${marray[cv]} plays ${iarray[cv]}`
    array.push(string)
  }
  return array
}

function johnLennonFacts(factsarr){
  var newarr = []
  var i = 0
  while (i < factsarr.length){
    var string = factsarr[i] + "!!!"
    newarr.push(string)
    i++
  }
  return newarr
}

function iLoveTheBeatles(num){
  var arr = []
  do{
    arr.push("I love the Beatles!")
    num++
  }while (num < 15)
return arr
}
