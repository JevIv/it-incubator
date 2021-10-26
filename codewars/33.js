function score(dice) {
  var sum = 0
  for(i=1; i<=6; i++){
    var count = dice.filter( d => d == i).length
    if(count >= 3){
      sum += (i==1 ? 1000 : i*100)
    }
    if(i == 1){
      sum += (count % 3) * 100
    }
    if(i == 5){
      sum += (count % 3) * 50
    }
  }
  return sum
}
