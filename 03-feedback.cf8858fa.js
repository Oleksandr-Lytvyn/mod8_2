const e=document.querySelector(".feedback-form");console.log(e);const t={};e.addEventListener("input",(function(e){const{name:o,value:n}=e.target;t[o]=n,function(e,t){try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}}("feedback-form-state",t),console.log(o)}));
//# sourceMappingURL=03-feedback.cf8858fa.js.map
