const superior = () => {
    const navbar=document.querySelector('.navbar');
    const logo=document.querySelector('.navbar .logo a');
    const menu= document.querySelector('.navbar .menu');
    const menuitem=document.querySelectorAll('.navbar .menu li');
    const menuitemlink=document.querySelectorAll('.navbar .menu li a');
    const burger= document.querySelector('.burger');
    const burgerline= document.querySelectorAll('.burger div');

    const backupmove=document.querySelector('.home .max-width');
    const para=document.querySelector('.about .content .paragraph');

    const skill = document.querySelector('.skills .main');
    const photoshop=document.querySelector('.skills .content .property .skill .photoshop');
    const illustrator=document.querySelector('.skills .content .property .skill .illustrator');
    const canva=document.querySelector('.skills .content .property .skill .canva');

    const work=document.querySelector('.work');
    const picbox=document.querySelectorAll('.work .pic');
    const pics=document.querySelectorAll('.work .pic img');

    const contact = document.querySelector('.contact');
    const detail = document.querySelectorAll('.contact .detail');

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
        backupmove.style.backgroundColor = `rgba(10,10,10, ${0.5+y*0.004})`;
        

        if(y > para.offsetTop/1.8 ){
            para.classList.add('showing');
            console.log(para);
        }

        if(y > skill.offsetTop/1.3){
            skill.classList.add('showing');
            photoshop.style.animation = `aphotoshop 3s ease 0.6s forwards`;
            illustrator.style.animation = `aillustrator 4s ease 0.8s forwards`;
            canva.style.animation = `acanva 3.5s ease 1s forwards`;
        }

        if(y > work.offsetTop/1.8){

            picbox.forEach((photo,index)=>{
                if(y > photo.offsetTop/1.5){
                    photo.style.animation = `workappear 1s forwards ${index/7}s, fromsepia 1s forwards ${index/7+1}s ease`;
                }
                
            })

        }

        if(y > contact.offsetTop/1.2){

            detail.forEach(det=>{
                det.classList.add('showing');
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
       
}



superior();
