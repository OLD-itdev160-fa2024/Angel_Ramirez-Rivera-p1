function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
if (!e.target.matches('.dropbtn')) {
var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
    myDropdown.classList.remove('show');
        }
    }
}

window.onload = () => {
    let content = '';
    for (let i = 0; i < adidasList.length; i++) {
        content += `<div class="wrapper">
        <h3 class="one">Title: ${adidasList[i].itemTitle}</h3>
        <p class="two">Product: ${adidasList[i].itemType}</p>
        </div>`;
    }
    document.getElementById("content").innerHTML = content;
};

let adidasList = [
    {
        itemID: 0,
        itemType: "Shoe",
        itemTitle: ""
    },
    {
        itemID: 1,
        itemType: "Shoe",
        itemTitle: ""
    },
    {
        itemID: 3,
        itemType: "Shirt",
        itemTitle: "Adidas Teeshirt"
    },
    {
        itemID: 4,
        itemType: "Shirt",
        itemTitle: "Adidas Teeshirt"
    },
];