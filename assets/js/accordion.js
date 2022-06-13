let acc = document.getElementsByClassName("main-footer__nav-title");
let index;

for (index = 0; index < acc.length; index++) {
  acc[index].addEventListener("click", function () {
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
