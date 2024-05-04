const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const aboutImg =document.querySelector(".about-img img");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  console.log('id',id)
  if (id) {
    
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");   
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    
    element.classList.add("active");
    // Imagen de cada pestaña
    if (id === "history") {
      aboutImg.src = "history.jpeg";
    } else if (id === "vision") {
      aboutImg.src = "vision.jpeg";
    } else if (id === "flora") {
      aboutImg.src = "flora.jpeg";
    } else if(id === "planeta"){
      aboutImg.src ="planeta.jpeg";
    }else{
      aboutImg.src="fauna.jpg";
    }
  }
});
