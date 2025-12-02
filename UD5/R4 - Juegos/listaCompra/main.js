// Elementos del DOM (variables globales para facilidad de acceso)
const alert = document.getElementById('alert');
const form = document.querySelector('.grocery-form');
const groceryInput = document.getElementById('grocery');
const groceryList = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
const container = document.querySelector('.grocery-container'); // Para mostrar/ocultar

// Variables de estado
let editElement; 
let editFlag = false; 
let editID = ''; 

// --- Funciones Auxiliares y de Lógica ---

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // Eliminar alerta después de 3 segundos
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 3000);
}

function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

function setBackToDefault() {
    groceryInput.value = '';
    editFlag = false;
    editID = '';
    document.querySelector('.submit-btn').textContent = 'Submit';
}

function clearItems() {
    // Borra todos los hijos del DOM
    while (groceryList.firstChild) {
        groceryList.removeChild(groceryList.firstChild);
    }
    container.classList.remove('show-container');
    displayAlert('lista vacía', 'danger');
    localStorage.removeItem('list');
    setBackToDefault();
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    
    // Eliminar del DOM
    groceryList.removeChild(element);
    
    // Ocultar lista si está vacía
    if (groceryList.children.length === 0) {
        container.classList.remove('show-container');
    }
    
    removeFromLocalStorage(id);
    displayAlert('item eliminado', 'danger');
    setBackToDefault();
}

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    
    editElement = e.currentTarget.parentElement.previousElementSibling;
    groceryInput.value = editElement.textContent;
    editFlag = true;
    editID = element.dataset.id;
    
    document.querySelector('.submit-btn').textContent = 'Edit';
}

// --- LocalStorage Funciones ---

function addToLocalStorage(id, value) {
    const grocery = { id, value };
    let list = getLocalStorage();
    list.push(grocery);
    localStorage.setItem('list', JSON.stringify(list));
}

function removeFromLocalStorage(id) {
    let list = getLocalStorage();
    list = list.filter(item => item.id !== id);
    localStorage.setItem('list', JSON.stringify(list));
}

function editLocalStorage(id, value) {
    let list = getLocalStorage();
    list = list.map(item => {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('list', JSON.stringify(list));
}

// --- Creación de Ítem en el DOM ---

function createListItem(id, value) {
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    element.setAttribute('data-id', id); // Usamos setAttribute para simplificar
    
    element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">Edit</button>
            <button type="button" class="delete-btn">Delete</button>
        </div>
    `;
    
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);
    
    groceryList.appendChild(element);
    container.classList.add('show-container'); // Muestra la lista
}

// --- Manejador de Formulario ---

function handleSubmit(e) {
    e.preventDefault();
    const value = groceryInput.value;
    const id = new Date().getTime().toString(); 

    if (value && !editFlag) {
        // Modo Añadir Ítem
        createListItem(id, value);
        addToLocalStorage(id, value);
        displayAlert('item añadido a la lista', 'success');
        
    } else if (value && editFlag) {
        // Modo Editar Ítem
        editElement.textContent = value;
        editLocalStorage(editID, value);
        displayAlert('valor cambiado', 'success');
    } else {
        // Valor vacío
        displayAlert('por favor, introduce un valor', 'danger');
    }

    setBackToDefault();
}

// --- Inicialización ---

function setupItems() {
    let items = getLocalStorage();

    if (items.length > 0) {
        items.forEach(item => {
            createListItem(item.id, item.value);
        });
        container.classList.add('show-container');
    }
}

const main = () => {
    // Event Listeners Principales
    form.addEventListener('submit', handleSubmit);
    clearBtn.addEventListener('click', clearItems);

    // Cargar ítems guardados al iniciar
    setupItems();
};

document.addEventListener('DOMContentLoaded', main);