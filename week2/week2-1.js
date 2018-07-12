let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
//hello,this,is,a,difficult,to,read,sentence
console.log(`the length is ${myString.length}`);
//the length is 42
a = myString.replace(/,/g, " ");
//'hello this is a difficult to read sentence'
console.log(a);
//hello this is a difficult to read sentence

