function timberlinFunction(){
    window.onload = () => {
        let content = '';
        for (let i = 0; i < timberlinList.length; i++) {
          content += `<div class="wrapper"><a class="card" href="/productdetails/Productdetail.html">
            <h3 class="one">Title: ${timberlinList[i].itemTitle}</h3>
            <p class="two">Product: ${timberlinList[i].itemType}</p>
            </div>`;
        }
        document.getElementById("content").innerHTML = content;
      };
}

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
};

let TimberlinList = [
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
        itemID: 2,
        itemType: "Shoe",
        itemTitle: ""
    },
    {
        itemID: 3,
        itemType: "Jacket",
        itemTitle: ""
    },
];