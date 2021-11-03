const request = new XMLHttpRequest()
const url = "https://api.github.com/users/porwaltz/repos"
const retorno =[]
const code = 'https://github.com/porwaltz/'
const page = 'https://porwaltz.github.io/'


request.open('GET', url)
request.send()


request.addEventListener("readystatechange", () =>{
    if(request.readyState === 4){
        if(request.status == 200){
            const jason = JSON.parse(request.response).map(e => e.name)
        let lista_string = ""
        lista = document.getElementById("lista")
        jason.forEach(e => {
            let line = 0
            lista_string += '<code></code><li><a href="'+ page + e +'" target="blank">'+ e +'</a>'
            while(line < 50 - e.length){ 
                lista_string += "-"
                line ++
                console.log(e)
             }
            lista_string += '<a href="'+ code + e +'" target="blank">code</a></li</code>'
            })
        
        lista.innerHTML = lista_string
        }
        else{
            document.getElementById("status").innerHTML = "Error " + request.status
        }
    }
    
})



