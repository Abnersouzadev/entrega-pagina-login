const botaoModal = document.querySelectorAll("[data-modal-control]") 

for( let i=0; i < botaoModal.length; i++){
    botaoModal[i].addEventListener("click", function(){
        let valueDataModalControl = botaoModal[i].getAttribute("data-modal-control")
        document.getElementById(valueDataModalControl).classList.toggle("show-modal")
    })
}


