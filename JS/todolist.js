
let ullength = document.getElementsByTagName("li")
let btnDOM = document.querySelector("#liveToastBtn") 
let listDOM = document.querySelector("#list") 


btnDOM.addEventListener('click', newElement)

for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span")
    closeButton.textContent = "\u00D7"
    closeButton.classList.add("close")
    closeButton.onclick = removeButton
    ullength[i].append(closeButton)
    ullength[i].onclick = check
}
function check(){
    this.classList.toggle("checked")
  }
  
  function removeButton(){
    this.parentElement.remove()
  }


function newElement(){
    let InputName = document.querySelector("#task")
    if (InputName.value){
       

        let liDOM = document.createElement('li') 
        listDOM.appendChild(liDOM) 
        liDOM.innerHTML = InputName.value 
        InputName.value = ""
      
        $('.success').toast("show")
        
        
       
       //SONRADAN EKLENEN MADDELERİ SİLMEK İÇİN AYNI İŞLEMLERİN TEKRARI
             liDOM.onclick = check
            
        let closeButton = document.createElement("span")
            closeButton.textContent = "\u00D7"
            closeButton.classList.add("close")
            closeButton.onclick = removeButton
            
            liDOM.append(closeButton)
            listDOM.append(liDOM)
            inputElement.value = ("")
            
    }
     else  {
        $('.error').toast("show")
    }
    
}