document.querySelectorAll("li").forEach(function(e){var t=document.createElement("span"),n=e.childNodes[0].textContent.trim();n.toUpperCase()===n.toLowerCase()&&(t.textContent=n,e.childNodes[0].replaceWith(t),t.addEventListener("click",function(){var t=e.querySelector("ul");t&&(t.hidden=!t.hidden)}))});
//# sourceMappingURL=index.208bf79b.js.map
