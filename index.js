const pass =  document.getElementById("pass")
const val =  document.getElementById("val")
const len =  document.getElementById("len")
const capscb =  document.getElementById("capscb")
const smallcb =  document.getElementById("smallcb")
const numcb =  document.getElementById("numcb")
const sccb =  document.getElementById("sccb")
const btn =  document.getElementById("btn")
    val.innerText = len.value
    const passset = ()=>{
           const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
           const sm = "abcdefghijklmnopqrstuvwxyz"
           const num = "0123456789"
           const sc = "-!@#$&*_"
           let password =""
           let genpass =""
           password += capscb.checked ? cap : ""
           password += smallcb.checked ? sm : ""
           password += numcb.checked ? num : ""
           password += sccb.checked ? sc : ""
           
        let i=0
        for (i=0;i<len.value; i++) {
                 genpass += password.charAt(Math.floor(Math.random()*password.length))
             }
         pass.value=genpass
    }
     
    const changeval = ()=>{
        val.innerText = len.value
    }

    copy = ()=>{
        if(pass.value!=""){
        navigator.clipboard.writeText(pass.value)
        alert("Copied Password : "+pass.value)
        btn.title = "Copied!"
        btn.innerText = "Done"
        setTimeout(() => {
            btn.title = ""
            btn.innerText = "Copy"
        }, 3000);
}
       }