var number = function(stops){
    let x = 0;
    stops.forEach(a => x = x + a[0] - a[1]);
    return x
}