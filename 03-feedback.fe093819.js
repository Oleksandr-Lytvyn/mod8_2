!function(){var e=document.querySelector(".feedback-form");console.log(e);var t={};e.addEventListener("input",(function(e){var o=e.target,r=o.name,a=o.value;t[r]=a,function(e,t){try{var o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}}("feedback-form-state",t),console.log(r)}))}();
//# sourceMappingURL=03-feedback.fe093819.js.map
