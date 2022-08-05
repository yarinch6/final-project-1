function displayProduct() {
    let productsItem = localStorage.getItem("productsInCart");
    productsItem = JSON.parse(productsItem);
    let productContainer = document.querySelector(".container");
    let cartCost = localStorage.getItem('totalCost');
    fetch("http://localhost:3000/products/all").then((res)=>products = res.json()).then((productsItem)=>{
       
        console.log(productsItem)
        if(productsItem && productContainer) {
            productContainer.innerHTML = '';
            Object.values(productsItem).map(item => {
                productContainer.innerHTML += `
            <div class="image">
            <img src=${item.img} width="204px" >
            <h3>${item.name}</h3>
            <h3>${item.price}</h3>
            <a class="add-cart cart4" href="#">Add Cart</a>
            </div>
              
                `;
            });

        }
    })
}
    displayProduct()