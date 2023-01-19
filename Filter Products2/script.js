let products =[
        {
        name1:'jeans',
        price:'120$',
        imgUrl: "imgs/1.jpg"

        },
        {
            name1: 'watch',
            price: '223$',
            imgUrl: "imgs/2.jpg"

        },
        {
            name1: 'watch',
            price: '129$',
            imgUrl: "imgs/3.jpg"

        },
        {
            name1: 'jeans',
            price: '87$',
            imgUrl: "imgs/4.jpg"

        },
        {
            name1: 'jeans',
            price: '140$',
            imgUrl: "imgs/5.jpg"

        },
        {
            name1: 'headphone',
            price: '89$',
            imgUrl: "imgs/6.jpg"

        },
        {
            name1: 'headphone',
            price: '263$',
            imgUrl: "imgs/7.jpg"

        },
        {
            name1: 'headphone',
            price: '60$',
            imgUrl: "imgs/8.jpg"

        },
        {
            name1: 'headphone',
            price: '125$',
            imgUrl: "imgs/9.jpg"

        },
        {
            name1: 'headphone',
            price: '80$',
            imgUrl: "imgs/10.jpg"

        },
        {
            name1: 'tshirt',
            price: '40$',
            imgUrl: "imgs/11.jpg"

        },
        {
            name1: 'tshirt',
            price: '25$',
            imgUrl: "imgs/12.jpg"

        }
]   
/*
for(let j=0;j<products.length;j++){
    let el1 = document.createElement('div')
    let el2 =document.createElement('img')
    let el3 =document.createElement('h2')
    let el4 = document.createElement('h4')
    el3.textContent =products[j].name1
            el1.className = 'product'
    el4.textContent = products[j].price
    el2.setAttribute("src", products[j].imgUrl);
    document.querySelector('.product-container').appendChild(el1)
    document.querySelector('.product-container').appendChild(el1).appendChild(el2)
    document.querySelector('.product-container').appendChild(el1).appendChild(el3)
    document.querySelector('.product-container').appendChild(el1).appendChild(el4)
}
document.querySelector('.all').addEventListener('click',function(e){
    //debugger
    var x = document.querySelector(".product-container");
    if (x.style.display === "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }
})
document.querySelector('.watch').addEventListener('click', function (e) {
    //debugger
    var x = document.querySelector(".product-container");
    if (x.style.display === "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }
})
*/


//display items on screen
window.addEventListener("DOMContentLoaded", function () {
displayMenu(products)
})

let displayMenu = function (p) {
  let display = p.map(function (item) {
    return `
    <div class="container page-wrapper">
  <div class="page-inner">
    <div class="row">
      <div class="el-wrapper">
        <div class="box-up">
          <img class="img" src=${item.imgUrl} alt="">
          <div class="img-info">
            <div class="info-inner">
              <span class="p-name">${item.name1}</span>
              <span class="p-company">Yeezy</span>
            </div>
            <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
          </div>
        </div>
        <div class="box-down">
          <div class="h-bg">
            <div class="h-bg-inner"></div>
          </div>
          <a class="cart" href="#">
            <span class="price">${item.price}</span>
            <span class="add-to-cart">
              <span class="txt">Add in cart</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`
  })
  display = display.join('')
  this.document.querySelector('.kol7aga').innerHTML = display
}

document.querySelectorAll('.btn').forEach(function(btn){
  btn.addEventListener('click',function(e){
    //console.log(e.currentTarget.dataset.id)
    let category = e.currentTarget.dataset.id
    let menuCategory = products.filter(function(menuItem){
      //console.log(menuItem.name1)
      if(menuItem.name1 === category){
         return menuItem
      }
    })
      console.log(menuCategory)
      if(category==='all'){
     
        displayMenu(products)
      }else{
        displayMenu(menuCategory)
      }
  })
})
