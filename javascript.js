let list = document.querySelectorAll('.navigation a');
function active(){
    list.forEach((i)=>
    i.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((i)=>
i.addEventListener('click',active));