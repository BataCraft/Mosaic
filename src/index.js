const mdl = document.getElementById("middle")
const mbl = document.getElementById("mbl")
const toogle = document.getElementById("toogle")

let a = 0
toogle.addEventListener('click', ()=>{
    if( a == 0)
    {
        mbl.style.left = "0%"
        
        a = 1

    }
    else{
        mbl.style.left = "-100%"
        a = 0
    }
})


