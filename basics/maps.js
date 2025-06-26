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



// cs=[{
//     name:"Sahil",
//     work:"Driver"
// },{
//     name:"Rudra",
//     work:"Engineer"
// },{
//     name:"Gaurab",
//     work:"Pshycatrist"
// },{
//     name:"Astitva",
//     work:"Pipeline Management"
// }]
// cs.forEach( (el) => {
//     console.log(`The name is ${el.name} and the work is ${el.work}`)
// })

// const number=[12,45,67,89,34,23]
// const sum10=number.map((num) => {
//     return num+10
// })
// console.log(sum10)







const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const Total_Price=shoppingCart.reduce((acc,pri) => acc+pri.price,0)

console.log(Total_Price)


// node basics/maps.js