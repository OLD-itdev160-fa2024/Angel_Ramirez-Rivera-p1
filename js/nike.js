function nikeFunction(){
    window.onload = () => {
        let content = '';
        for (let i = 0; i < nikeList.length; i++) {
          content += `<div class="wrapper"><a class="card" href="/productdetails/Productdetail.html">
            <h3 class="one">Title: ${nikeList[i].itemTitle}</h3>
            <p class="two">Product: ${nikeList[i].itemType}</p>
            </div>`;
        }
        document.getElementById("content").innerHTML = content;
      };
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
};

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
};

let nikeList = [
    {
        itemID: 0,
        itemType: "Shoe",
        itemTitle: "Airforce 1",
    },
    {
        itemID: 1,
        itemType: "Shoe",
        itemTitle: "Air Max",
    },
    {
        itemID: 2,
        itemType: "Shirt",
        itemTitle: "Nike Teeshirt",
    },
    {
        itemID: 3,
        itemType: "Pants",
        itemTitle: "Gray Sweat Pants",
    },
];