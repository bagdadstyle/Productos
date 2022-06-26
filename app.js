class Product {
    constructor(name, price, year){
            this.name = name;
            this.price = price;
            this.year = year;

        }

}
class UI{
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
        <div class="card-body">
                <strong>Product name</strong>: ${product.name}
                <strong>Product price</strong>: ${product.price}
                <strong>Product year</strong>: ${product.year}
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
        </div>
        </div>
        `;
        productList.appendChild(element);
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct(element){
        if (element.name === 'delete'){
           element.parentElement.parentElement.parentElement.remove();
           this.showMessage('Product deleted', 'danger')
        }
    }
    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`; 
        div.appendChild(document.createTextNode(message));
        //DOM message   
        const container = document.querySelector('.container');
        const app = document.querySelector('app');
        container.insertBefore(div, app)
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000)
    }
}

// DOM
document.getElementById('product-form')
        .addEventListener('submit', function(e){
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;
        console.log(name, price, year)

        const product = new Product(name, price, year);
        const ui  = new UI();
        if(name === '' || price === '' || year === ''){
          return  ui.showMessage('Complete el formulario', 'danger');
        }

        ui.addProduct(product);
        ui.resetForm();
        e.preventDefault();
        ui.showMessage('Producto Agregado', 'success');

})
document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
     ui.deleteProduct(e.target);
})