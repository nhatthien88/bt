window.onload = function() {
    let main = document.getElementById("mainImg");
    let images = document.querySelectorAll(".thumb img");
    for (let im of images)
        im.onclick = function() {
            main.src = this.src;
        }


    let products = document.querySelectorAll(".product > div");
    let buttons = document.querySelectorAll(".buttons > button");
    for (let b of buttons)
        b.onclick = function() {
            let txt = this.getAttribute("rel");
            main.setAttribute("src", `images/galaxys8/${txt}1.jpg`);

            for (let i = 0; i < images.length; i++)
                images[i].src = `images/galaxys8/${txt}${i + 1}.jpg`;

            for (let p of products)
                p.style.background = `linear-gradient(lightblue, ${txt.slice(0, -1)})`;
        }

    let search = document.querySelector("input[type=search]");
    search.onchange = function() {
        for (let p of products)
            p.style.border = "initial";

        let texts = document.querySelectorAll(`.product h2`);
        for (let t of texts)
            if (t.innerText.includes(this.value) === true)
                t.parentElement.style.border = "2px solid red";
    }
}