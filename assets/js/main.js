function getData() {
    let container = document.querySelector(".cardCont")
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            let data = res.data;
            data.forEach((item) => {
                container.innerHTML += `
   <div class="widgetProductcards">
                        <i id="wishlist" class="fa-regular fa-heart"></i>
                        <div class="image-container">
                            <img src="${item.image}"
                                alt="">
                            </div>
                            <div class="alot">
                                <img src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg" alt="">
                                <span class="a">En Çok Değerlendirilen 7. Ürün</span>
                            </div>
                        <div class="textCont">

                            <div class="brand">
                                <span class="title">${item.title}</span>
                                <span class="description">${item.description} </span>
                            </div>
                            <div class="rating">
                                
                                <span class="rate">${item.rating.rate}</span>
                                <div class="star">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star-half-stroke"></i>
                                </div>
                                <span class="count">${item.rating.count}</span>
                            </div>
                            <div class="price">
                                <span>${item.price}</span>
                            </div>
                            <div class="badges">
                                <div class="coupon">
                                    <img class="coupon-logo" src="https://cdn.dsmcdn.com/web/production/campaign-coupon-icon.svg" alt="">
                                    <span class="titles"> <span class="prices"> 20 TL</span> Kupon</span>
                                </div>
                                <div class="coupon">
                                    <img class="coupon-logo"  src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg" alt="">
                                    <span class="titles">Çok Al Az Öde</span>
                                </div>
                            </div>
                        </div>

                    </div>
    `})
        }
        )

}
getData()








const search = document.getElementsByClassName("searchInput")
search.addEventListener('input',((e)=>{
e.preventDefault()
let card = JSON.parse(localStorage.getItem("cardCont")) ||[]
card.forEach((item)=>{
   let data= item.toLowerCase.includes(e.target.value.toLowerCase())
   if (data.len){

   }
})


}))