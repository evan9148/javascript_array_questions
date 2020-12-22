let arr = [30,8,9,23,47,78];
let odd = arr.filter(isodd);
function isodd(num){
    return num%2 !==0;
}
console.log(odd);

