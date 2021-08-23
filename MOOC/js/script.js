window.onload=function(){
    // 图片轮播
    // 获取图片和小圆点
    var imgs = document.querySelectorAll(".img");
    var dots = document.querySelector(".dots").querySelectorAll("span");
    
    // 遍历所有img图片，给img图片设置data-index，好判断当前的图片是哪一张

    for (var i = 0; i < imgs.length; i++){
        imgs[i].setAttribute("data-index",i);
    }

    var currentImg = document.querySelector(".current");
    var currentIndex = currentImg.getAttribute("data-index");


    var timer = setInterval(changeImage,3000);

    function changeImage(){
        imgs[currentIndex].classList.remove("current");
        dots[currentIndex].classList.remove("square");

        currentIndex = (currentIndex+1)%5;

        imgs[currentIndex].classList.add("current");
        dots[currentIndex].classList.add("square");
       
    }


  
    for (var k=0; k<dots.length; k++){
        // 给所有的小圆点设置属性
        dots[k].setAttribute("data-index",k);
        dots[k].addEventListener("click",
        function(){
            // 获取当前点击的小圆点的索引
            var index = this.getAttribute("data-index");
            // 根据索引获取当前img图片
            //console.log(index);
            if (index != currentIndex){
                imgs[currentIndex].classList.remove("current");
                imgs[index].classList.add("current");
                dots[currentIndex].classList.remove("square");
                dots[index].classList.add("square");
                currentIndex = index;
            }
            var img = imgs[index];
            img.classList.add("current");
        })

    }


    var aList = document.getElementsByClassName("list_nav");
        aTab = document.getElementsByClassName("productBox");
        cityIndex = 0;

    for (var a = 0; a < aList.length; a++){
         (function(a){
             aList[a].onclick = function(){
                aList[cityIndex].classList.remove("current_option");
                aTab[cityIndex].classList.remove("on");
                cityIndex = a;
                aList[a].classList.add("current_option");
                aTab[a].classList.add("on"); 
                 

             }
         })(a)
    }


}