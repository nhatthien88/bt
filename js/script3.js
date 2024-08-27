window.addEventListener("load", function() {
    let p = this.document.querySelector(".products")
    let closes = this.document.getElementsByClassName("close");
    for(let c of closes)
        c.addEventListener("click", function(){
            if(confirm("cho mày cơ hội cuối cùng") === true){
                p.removeChild(this.parentElement.parentElement);
            }
        });

        let form = this.document.querySelector(".add-form");
        let insert = this.document.querySelector(".insert");
        insert.addEventListener("click", function(){
            form.classList.toggle("show");
        });
        let btn = this.document.querySelector(".btn");
        btn.addEventListener("click", function(){
            let name = document.getElementById("name").value;
            let price = document.getElementById("price").value;
            let image = document.getElementById("image").value;

            let h = `
            <div class="product">
                <div>
                    <img src="${image}" alt="${name}" />
                    <h2>${name}</h2>
                    <div class="price">${price}<sup>đ</sup></div>
                    <a href="#" class="close">&times;</a>
                </div>
            </div>
            `;
            p.innerHTML = h + p.innerHTML;
        });
});