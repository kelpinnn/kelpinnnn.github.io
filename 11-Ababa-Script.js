// IMAGE SLIDER 1
setInterval(()=>{
    let homeimageSlideshow = $("#home-imageslider").width() 
    let left = $("#homeimage-slidechild").css("left").split("px")[0]
    let imgCount = 8

    if(left == homeimageSlideshow * -1 * (imgCount - 1)){
        $("#homeimage-slidechild").animate({left: 0})
    }else{
        $("#homeimage-slidechild").animate({left:left-homeimageSlideshow})
    }

}, 2000)

// IMAGE SLIDER2
var indexgallery = 1;
slideshowgallery(indexgallery);

function plusSlides(n){
  slideshowgallery(indexgallery+=n);
}

function slideshowgallery(n)
{
  var i;
  var imgindex = document.getElementsByClassName("gallery-slides");
  
  if (n>imgindex.length) {indexgallery=1}    
  if (n<1) {indexgallery=imgindex.length}
  
  for (i=0; i<imgindex.length; i++){
    imgindex[i].style.display = "none"
  }
 
  imgindex[indexgallery-1].style.display="block"  
}