const cep = document.getElementById("cep")

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){

            document.querySelector("#"+campo).value = result[campo];
        }
    }
}

cep.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter') {
        let search = cep.value.replace("-", "")

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{response.json()
        .then(data => showData(data))
    })
    .catch(e => console.log('Deu erro: ' + e.message)) 
    }    
})