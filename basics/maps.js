// ls=[12,6,7,56,21]
// for (const list of ls) {
//     console.log(list);
// }


// maps=new Map()
// maps.set("Rs","Ruppes")
// maps.set("Dl","Dollar")
// maps.set("Yn","Yen")
// maps.set("Gr","Germany")
// for (const [key,values] of maps) {
//     console.log(`${key} :- ${values}`)
// }



// const object1={
//     city1:"Delhi",
//     city2:"Mumbai",
//     city3:"Prayagraj",
//     city4:"Lucknow"
// }
// for (const obj in object1) {
//     console.log(`${obj} stand for ${object1[obj]}`)
// }

// l=[1,24,5,7,8]
// for (const key in l) {
//     console.log(l[key])
// }


coding=["Python","Java","C++","Ruby","C#"]
coding.forEach( function (value){
    // console.log(value);
    
} );



cs=[{
    name:"Sahil",
    work:"Driver"
},{
    name:"Rudra",
    work:"Engineer"
},{
    name:"Gaurab",
    work:"Pshycatrist"
},{
    name:"Astitva",
    work:"Pipeline Management"
}]
cs.forEach( (el) => {
    console.log(`The name is ${el.name} and the work is ${el.work}`)
})
// node basics/maps.js