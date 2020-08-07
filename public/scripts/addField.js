//procura o botão pelo ID no html
document.querySelector("#add-time") 
//verifica se houve um click e chama a função
.addEventListener("click",cloneField) 

//função de duplicar os campos
function cloneField() {
    //pega o campo a ser duplicado e duplica
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    
    
    const fields = newFieldContainer.querySelectorAll("input")
    // limpa campos duplicados
    fields.forEach(function(field){
        field.value = ""
    })

    //coloca o campo na página
    document.querySelector("#schedule-itens").appendChild(newFieldContainer)

}