let addFriend = document.getElementById("add")
let stranger = document.querySelector("h5")
let remove = document.querySelector("#remove")

let check = 0
addFriend.addEventListener("click",function(){
 if (check==0) {
    stranger.innerHTML ="Friends"
 stranger.style.color = 'blue'
 addFriend.innerHTML = 'Remove Friend'
 check = 1
 } else {
    stranger.innerHTML = "Stranger"
    stranger.style.color = 'red'
 addFriend.innerHTML = 'Add Friend'
 
    check = 0


 }
 
})

// remove.addEventListener("click",function(){
//     stranger.innerHTML = "stranger"
//     stranger.style.color = 'red'
// })

