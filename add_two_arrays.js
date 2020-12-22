array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
var i=0;
var a=[];
for (;i<array1.length;){
    var sum = array1[i]+array2[i];
    a.push(sum)
    i++;
}
console.log(a)