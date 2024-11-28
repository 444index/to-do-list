class Item {
    constructor(tarea) {
        this.tarea = tarea;  
        this.crearDiv(tarea); 
    }

    crearDiv(tarea) {
        
        const inputItem = document.createElement('input');  
        inputItem.type = 'text';  
        inputItem.disabled = true;  
        inputItem.classList.add('item-input');  
        
        
        inputItem.value = tarea;  

        
        const itemDiv = document.createElement('div');  
        itemDiv.classList.add('item');  
        
        
        const botonEditar = document.createElement('button');
        botonEditar.classList.add('boton-editar'); 
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>'; 
        
        
        const botonRemover = document.createElement('button');
        botonRemover.classList.add('boton-remover'); 
        botonRemover.innerHTML = '<i class="fas fa-trash-alt"></i>'; 

        
        botonEditar.addEventListener('click', () => {
            
            inputItem.disabled = !inputItem.disabled;
            
            
            if (inputItem.disabled) {
                botonEditar.innerHTML = '<i class="fas fa-lock"></i>'; 
            } else {
                botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';  
            }
        });

        botonRemover.addEventListener('click', () => {
            container.removeChild(itemDiv); 
        });

        
        itemDiv.appendChild(inputItem);  
        itemDiv.appendChild(botonEditar); 
        itemDiv.appendChild(botonRemover); 

        
        container.appendChild(itemDiv);  
    }
}


function chequearInput() {
    const tarea = inputText.value.trim(); 
    
    if (tarea) {  
        
        new Item(tarea); 

        
        inputText.value = '';
    }
}


const inputText = document.querySelector('.input');
const botonAgregar = document.querySelector('.boton-agregar');
const container = document.querySelector('.container');


botonAgregar.addEventListener('click', chequearInput);


document.addEventListener('DOMContentLoaded', () => {
    
    const ejemploTarea = "Regar las plantas";
    
    
    new Item(ejemploTarea); 
});
