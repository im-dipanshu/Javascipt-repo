// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];
// const newls=books.filter((bs) => bs.publish==2011)
// const publishes=books.filter((bk) =>  bk.publish >= 1995)
// const ne=books.filter((bl) => bl.genre=="History")
// console.log(newls)
// console.log(publishes,ne)

const ls=[1,2,3,4,5]
function add(num1){
    console.log(num1+10)
}
ls.forEach((value, index, array) => {
  array[index] = value + 10;
});
// console.log(ls)