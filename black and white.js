const toggleSwich =document.querySelector('input[type="checkbox"]');
const nav =document.getElementById('nav');
const toggleAicon =document.getElementById('toggle-icon');
const image1 =document.getElementById('image1');
const image2 =document.getElementById('image2');
const image3 =document.getElementById('image3');
const textBox =document.getElementById('text-box');

//ممكن نعمل ال function دي علشان نختصر الكود
/*function imageMode(color){
    image1.src =`./undraw_proud_coder_re_exuy${color}.svg`;
    image2.src =`./undraw_feeling_proud_qne1${color}.svg`;
    image3.src =`./undraw_conceptual_idea_xw7k ${color}.svg`;
}
*/

// dark mode theme
function  darkMode(){
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor='rgb(255 255 255 / 50%)';
    toggleAicon.children[0].textContent='dark mode';
    toggleAicon.children[1].classList.replace('fa-sun' ,'fa-moon');
    image1.src ='./undraw_proud_coder_re_exuydark.svg';
    image2.src ='./undraw_feeling_proud_qne1dark.svg';
    image3.src ='./undraw_conceptual_idea_xw7k dark.svg';

}
//light mode theme
function  lightMode(){
    nav.style.backgroundColor='rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor='rgb(0 0 0 / 50%)';
    toggleAicon.children[0].textContent='light mode';
    toggleAicon.children[1].classList.replace('fa-moon' ,'fa-sun');
    image1.src ='./undraw_proud_coder_re_exuy light.svg';
    image2.src ='./undraw_feeling_proud_qne1 light.svg';
    image3.src ='./undraw_conceptual_idea_xw7k (1) light.svg';
}


function switchTheme(event){
   if (event.target.checked){
    document.documentElement.setAttribute('data-theme','dark');
    localStorage.setItem('theme','dark');
    darkMode();
   }else{
    document.documentElement.setAttribute('data-theme','light');
    localStorage.setItem('theme','light');
    lightMode();
   }
}


//event listener

toggleSwich.addEventListener('change', switchTheme);

