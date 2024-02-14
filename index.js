
// var for sun moon

const sun = document.getElementById("sun");
const moon = document.getElementById("moon")

// theme vars

const userTheme = localStorage.getItem("theme");
const sysTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const toggleLight =() =>{
    moon.style.display = "none";
    sun.style.display = "flex";
}

const toggleDark =() =>{
    sun.style.display = "none";
    moon.style.display = "flex";
}

const ThemeCheck = () => {
if (userTheme === 'dark' || (!userTheme && sysTheme)) {
    document.documentElement.classList.add('dark')
    toggleLight();
    return;
  } 
}

ThemeCheck()

const ThemeSwitch = () =>{
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme","light");
        toggleDark();
        return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem("theme","dark");
    toggleLight();
}

moon.addEventListener("click",function(){
    ThemeSwitch();
})

sun.addEventListener("click",function(){
    ThemeSwitch();
})
// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
//     console.log(document.documentElement.classList.add('dark'))
      
     
// }


const edubtn = document.getElementById("edubtn")
const workbtn = document.getElementById("workbtn")
const voulntrbtn = document.getElementById("vbtn")

const edu_container = document.getElementById("education")
const work_container = document.getElementById("work")
const skills_container = document.getElementById("volunteering")

workbtn.addEventListener("click",function () {
    skills_container.style.display = "none";
    edu_container.style.display = "none";
    work_container.style.display = "flex";
    
})

edubtn.addEventListener("click",function () {
    work_container.style.display = "none";
    skills_container.style.display = "none";
    edu_container.style.display = "flex";
    
})


voulntrbtn.addEventListener("click",function () {
    edu_container.style.display = "none";
    work_container.style.display = "none";
    skills_container.style.display = "flex";
    
})


// console.log(edubtn)
// console.log(workbtn)
// console.log(voulntrbtn)
// console.log(edu_container)
// console.log(work_container)
// console.log(skills_container)


