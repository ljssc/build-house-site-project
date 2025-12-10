document.addEventListener('DOMContentLoaded',()=>{
const heroImg=document.querySelector('.hero__image img');
if(heroImg) setTimeout(()=>heroImg.classList.add('show'),220);


const appear=new IntersectionObserver((entries,obs)=>{
entries.forEach((e,i)=>{
if(!e.isIntersecting) return;
const el=e.target;
setTimeout(()=>{
el.style.opacity='1';
el.style.transform='translateY(0)';
},80*(i+1));
obs.unobserve(el);
});
},{threshold:0.12});


document.querySelectorAll('.promo-card').forEach(c=>appear.observe(c));
document.querySelectorAll('.company').forEach(c=>appear.observe(c));
});