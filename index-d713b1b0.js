(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();let g=document.getElementById("imagee"),T=document.getElementsByClassName("targetSpecific"),m=document.getElementById("targetImg"),E=document.getElementById("productName"),M=document.getElementById("productName"),p=document.getElementById("category"),y=document.getElementById("rate"),f=document.getElementById("count"),l=document.getElementById("dots"),a=document.getElementById("more"),u=document.getElementById("myBtn"),h=document.getElementById("mainDesc"),I=document.getElementById("price"),s,b=e=>{let n=`<div class="container flex justify-center  p-2">
    <img id=${e.id} class="h-[100px] targetSpecific rounded hover:cursor-pointer" src="${e.image}" alt="">
    </div>`;g.innerHTML=g.innerHTML+n;let i=document.getElementById(e.id);i.dataset.title=e.title,i.dataset.price=e.price,i.dataset.description=e.description,i.dataset.category=e.category,i.dataset.image=e.image,i.dataset.rate=e.rate,i.dataset.count=e.count,console.log(i)},B=async()=>{try{return await(await fetch("https://api-ayush.onrender.com/products")).json()}catch(e){return console.log("Error:",e),[]}};u.addEventListener("click",()=>{l.getAttribute("class")==="inline"?(l.setAttribute("class","hidden"),u.innerHTML="Read less",a.setAttribute("class","inline")):(l.setAttribute("class","inline"),u.innerHTML="Read More",a.setAttribute("class","hidden"))});async function H(){if(s=await B(),s.length>0){m.setAttribute("src",s[0].image),E.textContent=s[0].title,p.innerHTML="Category : "+s[0].category,y.innerHTML="Rating   : "+s[0].rate,f.innerHTML="Reviews  : "+s[0].count;let e=s[0].description.split(" ");h.innerHTML=e.slice(0,18).join(" "),a.innerHTML=e.slice(18,e.length).join(" "),l.setAttribute("class","inline"),a.setAttribute("class","hidden"),I.innerHTML=`BUY NOW $ ${s[0].price}`,s.forEach(n=>{b(n)}),Array.from(T).forEach(n=>{n.addEventListener("click",A)})}}const A=e=>{const n=e.target.getAttribute("src");e.target.getAttribute("id"),m.setAttribute("src",n);let i=e.target.dataset.title,o=e.target.dataset.price,t=e.target.dataset.category,r=e.target.dataset.description,c=e.target.dataset.rate,L=e.target.dataset.count;M.innerHTML=i.split(" ").slice(0,7).join(" "),p.innerHTML="Category : "+t,y.innerHTML="Rating   : "+c,f.innerHTML="Reviews  : "+L,o.innerHTML=`BUY NOW $ ${o}`;let d=r.split(" ");h.innerHTML=d.slice(0,18).join(" "),a.innerHTML=d.slice(18,d.length).join(" "),l.setAttribute("class","inline"),a.setAttribute("class","hidden")};H();
