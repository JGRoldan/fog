const header = document.querySelector('header'),
    stickyNav = document.querySelectorAll('.sticky-bottom a')

window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky', window.scrollY>0)
    stickyNav.forEach(el => {
        if(window.scrollY>0){
            el.style.color = '#000'
        }else{
            el.style.color = '#FFF'
        }
        
    });
})
