const menuHamburguer = document.getElementById('btn-mobile');
const listUl = document.getElementById('list-ul');

menuHamburguer.addEventListener('click', ()=>{
    listUl.classList.toggle('active');
})