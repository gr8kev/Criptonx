const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky" ,window.scrollY > 50)
})
const observer = new   IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items")
        }
    })
})

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')


if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('activ')

})
}
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('activ')

})
}