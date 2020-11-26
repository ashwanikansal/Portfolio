const superior = () => {
    const navbar=document.querySelector('.navbar');
    const logo=document.querySelector('.navbar .logo a');
    const menu= document.querySelector('.navbar .menu');
    const menuitem=document.querySelectorAll('.navbar .menu li');
    const menuitemlink=document.querySelectorAll('.navbar .menu li a');
    const burger= document.querySelector('.burger');
    const burgerline= document.querySelectorAll('.burger div');
    window.addEventListener('scroll', ()=>{
        const y=window.scrollY;
        if(y>20){
            navbar.classList.add('sticky');
            logo.classList.add('sticky');
            menuitemlink.forEach((link)=> {
                link.classList.add('sticky');
            })
            burgerline.forEach((lines)=> {
                lines.classList.add('sticky');
            })
            
        }else{
            navbar.classList.remove('sticky');
            logo.classList.remove('sticky');
            menuitemlink.forEach((link)=> {
                link.classList.remove('sticky');
            })
            burgerline.forEach((lines)=> {
                lines.classList.remove('sticky');
            })
        }
    });
    burger.addEventListener('click',() => {
        menu.classList.toggle('active');

        menuitem.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation="";
            }
            else{
                link.style.animation = `navLinkFade 0.5s forwards ${index/7+0.2}s`;
            }
        });

        burger.classList.toggle('toggle');
        
});
    
//     
//     
//     
}

superior();
