!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body"),o=function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))};t.addEventListener("click",(function(){colorInterval=setInterval((function(){o()}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(colorInterval),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.f741fa6e.js.map