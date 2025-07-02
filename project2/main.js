const clock = document.querySelector('#clock');
setInterval(function(){
  let dt = new Date();
  clock.innerHTML=dt.toLocaleTimeString()
},1000)