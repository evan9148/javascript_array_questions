list1 = [100, 200, 300, 400, 500];
var a=[];
for (var i=0; i<list1.length; i++){
    for (var j=i+1; j<list1.length; j++){
        if (list1[i]<list1[j]){
            var temp = list1[i];
            list1[i] = list1[j];
            list1[j] = temp;
        }
    }
    a.push(list1[i])
}
console.log(a);
