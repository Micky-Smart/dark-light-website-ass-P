
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                
                navLinks.forEach(link => link.classList.remove('active'));


                this.classList.add('active');
            });
        });



        // setting year using js
        let newdate = new Date
        let year = newdate.getFullYear()
        const span2 = document.querySelector('.span2')
        span2.textContent = year;



        const menu2 = document.querySelector('.menu2')
        const icon = document.querySelector('.js-icon')
        const menuBar = document.querySelector('.menu-bar')
        let isOpen = false;
        menuBar.addEventListener('click', () => {
            if(!isOpen) {
                menu2.classList.add("action");
                icon.classList.remove("fa-bars")
                icon.classList.add("fa-xmark")
                isOpen = true;
            } else{
                menu2.classList.remove("action");
                icon.classList.remove("fa-xmark")
                icon.classList.add("fa-bars")
                isOpen = false;
            }
        })




    












        const aref = document.querySelector(".aref")
        const bref = document.querySelector(".bref")
        const cref = document.querySelector(".cref")
        const dref = document.querySelector(".dref")
       
        

        const mname = document.querySelector('.name')
        mname.textContent = 'darkMode'


const moon = document.querySelector('.moon')
moon.style.cursor = "pointer"
moon.addEventListener('click',()=>{
    if( document.body.style.backgroundColor === "white"){
      document.body.style.backgroundColor = "#292939";
       document.body.style.color = "white";
       moon.style.color = "black"
       mname.textContent = 'darkMode'
    //    menu2.
       menu2.style.backgroundColor = "white"
       aref.style.color = "black"
       bref.style.color = "black"
       cref.style.color = "black"
       dref.style.color = "black"
  
    }

    else{
        document.body.style.backgroundColor = "white";
         document.body.style.color = "black";
        //  moon.style.backgroundColor = "#292939"
         moon.style.color = "white"
        //  moon.textContent = "darkMode"
        mname.textContent = 'lightMode'

         menu2.style.backgroundColor = "#292939"
        aref.style.color = "white"
        bref.style.color = "white"
        cref.style.color = "white"
        dref.style.color = "white"
       }
       

})
// moon.body.appendChild(Mode)