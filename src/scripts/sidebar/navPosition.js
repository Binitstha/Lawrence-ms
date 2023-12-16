const sideBarButtons=document.querySelectorAll('.side-nav-buttons');

sideBarButtons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        changePosition(e);
    })
})

const changePosition=(e)=>{
    sideBarButtons.forEach((btn)=>{
        if(btn.classList.contains('border-l-8')){
            btn.classList.remove('border-l-8');
            return;
        }
    })
    console.log(e.target);
}