string_list = ["Empathy", "Empathy", "Kindness", "Kindness", "Compassion", "Humble", "Humble"];
var i=0;
a=[]
while (i<string_list.length){
    if (string_list[i] not in a){
        a.push(string_list[i])
    }
    i++;
}
console.log(a);