import{S as m,i as p}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const u="41702545-5a959d1a868233ac463ab5270",f=document.getElementById("search-form"),y=document.getElementById("search-input"),a=document.getElementById("image-gallery"),l=document.getElementById("loader");l.style.visibility="hidden";let c;f.addEventListener("submit",async t=>{t.preventDefault();const r=y.value.trim();if(r!==""){l.style.visibility="visible";try{const o=await fetch(`https://pixabay.com/api/?key=${u}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`);if(!o.ok)throw new Error("Network response was not ok");const n=await o.json();h(n.hits)}catch{d()}finally{l.style.visibility="hidden"}}});function h(t){if(t.length===0){d();return}a.innerHTML="";const r=t.map(n=>g(n));a.append(...r);let o={image_type:"photo",orientation:"horizontal",safesearch:!0};c=new m(".gallery a",o),c.refresh()}function g(t){const r=document.createElement("a");return r.href=t.largeImageURL,r.setAttribute("data-lightbox","image-gallery"),r.innerHTML=`
  <div class="galery-item">
    <img src="${t.webformatURL}" alt="${t.tags}">
    <div class="image-info">
      <div class="img-info-item">
        <p>Likes:</p>
        <p> ${t.likes}</p>
      </div>
      <div class="img-info-item">
        <p>Views: </p>
        <p>${t.views}</p>
      </div>
      <div class="img-info-item">
        <p>Comments: </p>
        <p>${t.comments}</p>
      </div>
      <div class="img-info-item">
        <p>Downloads: </p>
        <p>${t.downloads}</p>
      </div>
    </div>
  </div>
  `,r}function d(){a.innerHTML="",p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
