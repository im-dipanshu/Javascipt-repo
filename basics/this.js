user_info={
    username:"Dipanshu",
    price:299,
    Welcome: function(){
        console.log(`${this.username}, have logged in!`);
        
    }
}
user_info.Welcome()
user_info.username="Dev"
console.log(user_info)
user_info.Welcome()