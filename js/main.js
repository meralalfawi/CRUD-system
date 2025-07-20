var nameInput = document.getElementById('productName');
var priceInput = document.getElementById('productPrice');
var typeInput = document.getElementById('productType');
var descInput = document.getElementById('productDesc');
var searchInput = document.getElementById('searchInput');
var addButton = document.getElementById('addButton');
var nameError = document.getElementById('nameError');
var priceError = document.getElementById('priceError');
var typeError = document.getElementById('typeError');
var descError = document.getElementById('descError');

var productList = JSON.parse(localStorage.getItem('productList')) || [];
var currentIndex = null;

display();

function addProduct() {
    if (validateName() & validatePrice() & validateType() & validateDesc()) {
        var product = {
            name: nameInput.value,
            price: priceInput.value,
            type: typeInput.value,
            desc: descInput.value
        };

        if (currentIndex === null) {
            productList.push(product);
        } else {
            productList[currentIndex] = product;
            currentIndex = null;
            addButton.innerText = 'Add Product';
        }

        localStorage.setItem('productList', JSON.stringify(productList));
        clearInput();
        display();
    }
}

function clearInput() {
    nameInput.value = '';
    priceInput.value = '';
    typeInput.value = '';
    descInput.value = '';

    nameInput.classList.remove("is-valid", "is-invalid");
    priceInput.classList.remove("is-valid", "is-invalid");
    typeInput.classList.remove("is-valid", "is-invalid");
    descInput.classList.remove("is-valid", "is-invalid");

    nameError.classList.add("d-none");
    priceError.classList.add("d-none");
    typeError.classList.add("d-none");
    descError.classList.add("d-none");
}

function display() {
    var box = "";
    for (let i = 0; i < productList.length; i++) {
        box += `
        <tr>
            <th>${i + 1}</th>
            <td>${productList[i].name}</td>
            <td>${productList[i].type}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].desc}</td>
            <td>
                <button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button>
                <button onclick="editProduct(${i})" class="btn btn-warning">Edit</button>
            </td>
        </tr>`;
    }
    document.getElementById('tableBody').innerHTML = box;
}

function deleteProduct(index) {
    productList.splice(index, 1);
    localStorage.setItem('productList', JSON.stringify(productList));
    display();
}

function search() {
    var searchValue = searchInput.value.toLowerCase();
    var box = '';
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().includes(searchValue)) {
            box += `
            <tr>
                <th>${i + 1}</th>
                <td>${productList[i].name}</td>
                <td>${productList[i].type}</td>
                <td>${productList[i].price}</td>
                <td>${productList[i].desc}</td>
                <td>
                    <button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button>
                    <button onclick="editProduct(${i})" class="btn btn-warning">Edit</button>
                </td>
            </tr>`;
        }
    }
    document.getElementById('tableBody').innerHTML = box;
}

function editProduct(index) {
    var product = productList[index];
    nameInput.value = product.name;
    priceInput.value = product.price;
    typeInput.value = product.type;
    descInput.value = product.desc;
    currentIndex = index;
    addButton.innerText = 'Update';
}

function validateName() {
    var regex = /^[A-Z][a-z]{3,8}$/;
    var text = nameInput.value;
    var result = regex.test(text);
    if (result) {
        nameError.classList.add('d-none');
        nameInput.classList.add("is-valid");
        nameInput.classList.remove("is-invalid");
        return true;
    } else {
        nameError.classList.remove('d-none');
        nameInput.classList.add("is-invalid");
        nameInput.classList.remove("is-valid");
        return false;
    }
}

function validatePrice() {
    var regex = /^(10000|[1-9][0-9]{3})$/;
    var text = priceInput.value;
    var result = regex.test(text);
    if (result) {
        priceError.classList.add('d-none');
        priceInput.classList.add("is-valid");
        priceInput.classList.remove("is-invalid");
        return true;
    } else {
        priceError.classList.remove('d-none');
        priceInput.classList.add("is-invalid");
        priceInput.classList.remove("is-valid");
        return false;
    }
}

function validateType() {
    var regex = /^(Mobile|Watch|Screen)$/;
    var text = typeInput.value;
    var result = regex.test(text);
    if (result) {
        typeError.classList.add('d-none');
        typeInput.classList.add("is-valid");
        typeInput.classList.remove("is-invalid");
        return true;
    } else {
        typeError.classList.remove('d-none');
        typeInput.classList.add("is-invalid");
        typeInput.classList.remove("is-valid");
        return false;
    }
}

function validateDesc() {
    var text = descInput.value.trim();
    var result = text.length >= 5 && text.length <= 100;
    if (result) {
        descError.classList.add('d-none');
        descInput.classList.add("is-valid");
        descInput.classList.remove("is-invalid");
        return true;
    } else {
        descError.classList.remove('d-none');
        descInput.classList.add("is-invalid");
        descInput.classList.remove("is-valid");
        return false;
    }
}
