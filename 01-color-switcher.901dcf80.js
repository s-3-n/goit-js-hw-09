!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),a=document.querySelector("body"),d=function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))};t.disabled=!0;var n=null;e.addEventListener("click",(function(){n=setInterval(d,1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(n),e.disabled=!1,t.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.901dcf80.js.map