// function valid(event){
//     event.preventDefault
//     const para = document.getElementById('errorMessage')
//     const node= document.createTextNode("Wrong message")
    
//    var uncheck= document.getElementById('enter-password').value
//     var check = document.getElementById('check-password').value

//     if(check!==uncheck){
//        para.appendChild(node);
//     }
    
// }

document.getElementById("submitBtn").addEventListener("click", function (event) {
    event.preventDefault()
    const para = document.getElementById('errorMessage')
    const node = document.createTextNode("Wrong password")

    var uncheck = document.getElementById('enter-password').value
    var check = document.getElementById('check-password').value

    if (check !== uncheck) {
        para.appendChild(node);
        setTimeout(() => {
            para.removeChild(node)
        }, 1000);
    }
});