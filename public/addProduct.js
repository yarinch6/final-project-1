function newProduct(){
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const tag = document.getElementById('tag').value
    const img =document.getElementById('img').value
    
    product={
        name:name,
        price:price,
        tag:tag,
        img:img
    }

    fetch("http://localhost:3000/products/add",{
        method:"POST",
        headers:  {
          'Content-Type': 'application/json',
          withCredentials: true
        },
        body:JSON.stringify(product),
      }
      ).then((response) => response.text())
      .then((data) => {
        const result =  JSON.parse(data);
        console.log('Success:', result);
        alert("Product add successful")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
    
