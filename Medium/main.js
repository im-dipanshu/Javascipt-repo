// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("Yeah getting it")
//     resolve({cash:'78$',name:'Rahul'})
//   },1000)
// }).then(function(anyt){
//   console.log('Work done')
//   console.log(anyt)
// })
const promisetwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error){
            resolve({
                name:'dipanshu',
                work:'ethusiast',
                task:'enternal some',
                class:'9th',
            })
        }else{
            reject('E:not found')
        }  
    },1000)
})
promisetwo.then((users)=>{
    console.log(users)

})