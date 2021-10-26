const request = new XMLHttpRequest()
const url = "https://api.github.com/users/porwaltz/repos"
const retorno =[]

request.open('GET', url)
request.send()


request.addEventListener("readystatechange", () =>{
    if(request.readyState === 4){
        if(request.status == 200){
            const jason = JSON.parse(request.response).map(e => e.name)
        let lista_string = ""
        lista = document.getElementById("lista")
        jason.forEach(e => {
            lista_string += '<li><a href="https://porwaltz.github.io/'+ e +'" target="blank">'+ e +'</a></li>\n'
            })
        
        lista.innerHTML = lista_string
        }
        else{
            document.getElementById("status").innerHTML = "Error " + request.status
        }
    }
    
})



