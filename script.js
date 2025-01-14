const main = document.querySelector("main")
const vamosButton = document.querySelector("button")
function remove() {
    if(main){
        main.remove();
    }
    const vamos = document.createElement("img");
    vamos.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F9923f0b47deab9eaeed054e912a3c1e7%2Ftenor.gif%3Fitemid%3D16381002&f=1&nofb=1&ipt=788b9fc6462bcc21834eb49a0f060b374d57d8af199a30396a69a06789d9e905&ipo=images"
    const body = document.querySelector("body");
    vamos.width = 300;
    body.appendChild(vamos)
    const h1 = document.createElement("h1");
    h1.innerText = "Vamos então zero two, amo você"
    body.appendChild(h1)
    h1.style.fontFamily = "monospace"
    h1.style.fontSize = "12px"

}

vamosButton.onclick = remove;



