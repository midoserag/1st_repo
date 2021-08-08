




var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var productsContainer ;
var mainBtn = document.getElementById("mainBtn");
if(localStorage.getItem("myProducts")==null)
{
    productsContainer = [];
}
else
{
    productsContainer = JSON.parse(localStorage.getItem("myProducts"));
    displayProducts();
}

function addProduct()
{
    var product = {
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescInput.value
    }

     productsContainer.push(product);

     localStorage.setItem("myProducts", JSON.stringify(productsContainer) );
     
     displayProducts();
     clearForm();
}

function clearForm()
{
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
}

function displayProducts()
{
    var cartona = "";
    for(i = 0; i < productsContainer.length; i++)
    {
        cartona += `<tr>
        <td>`+i+`</td>
        <td>`+productsContainer[i].name+`</td>
        <td>`+productsContainer[i].price+`</td>
        <td>`+productsContainer[i].category+`</td>
        <td>`+productsContainer[i].desc+`</td>
        <td><button onclick="changeFormForUpdate(`+i+`)" class="btn btn-warning">Update</button></td>
        <td><button onclick="deleteProduct(`+i+`)" class="btn btn-danger">Delete</button></td>
    </tr>`
    }

    document.getElementById("tableBody").innerHTML = cartona;
}

function deleteProduct(productIndex)
{
    productsContainer.splice(productIndex,1);
    localStorage.setItem("myProducts", JSON.stringify(productsContainer) );
    displayProducts();
}

function searchProduct(searchTerm)
{
    var cartona = ``;
    for(var i = 0; i < productsContainer.length; i++)
    {
        if(productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true)
        {
            cartona += `<tr>
            <td>`+i+`</td>
            <td>`+productsContainer[i].name+`</td>
            <td>`+productsContainer[i].price+`</td>
            <td>`+productsContainer[i].category+`</td>
            <td>`+productsContainer[i].desc+`</td>
            <td><button class="btn btn-warning">Update</button></td>
            <td><button onclick="deleteProduct(`+i+`)" class="btn btn-danger">Delete</button></td>
            </tr>`
        }
        else
        {
            console.log("m4 mawgood");
        }
    }
    document.getElementById("tableBody").innerHTML = cartona;
}

function changeFormForUpdate(productIndex)
{
    productNameInput.value = productsContainer[productIndex].name;
    productPriceInput.value = productsContainer[productIndex].price;
    productCategoryInput.value = productsContainer[productIndex].category;
    productDescInput.value = productsContainer[productIndex].desc;
    mainBtn.innerHTML = "Update"
}
