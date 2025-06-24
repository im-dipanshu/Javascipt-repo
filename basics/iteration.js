for (let i = 1; i < 10; i++) {
    // console.log(`The number is ${i}`);
    
    for (let j = 1; j < 10; j++) {
        const number = j;
        // console.log(`${i} X ${j} = ${i*j}`);
        
    }
} 
lists=['Bat','Sparrow','Swan','Eagel']
for (let index = 0; index < lists.length; index++) {
    const element = lists[index];
    // console.log(element)
}
// node basics/iteration.js

//********************** While loops ****************************
iteration=0
ls=[]
while (iteration<10) {
    // console.log(`The number is ${iteration}`)
    iteration=iteration+2
    if (iteration%2==0) {
        // console.log(`The number is ${iteration}`)
        ls.push(iteration)
    }
}
// console.log(ls)
object="Dipanshu Singh"
for (const element of object) {
    if (element==' ') {
        continue;
    }else{
        console.log(element)
    }
}