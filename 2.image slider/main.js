//get slider items(Images) In Array | Array.from()
var sliderImages= Array.from(document.querySelectorAll('.slider-container img'));
//Get Images Array Length(Number Of Slides)
var slidesCount=sliderImages.length;
//Image That Starts With [Set current Index]
var currentSlide=1;
//Set Slide Number Content
var slideNumberElement=document.getElementById('slide-number');
//get prev and next buttons
var nextButton=document.getElementById('next');
var prevButton=document.getElementById('prev');
//create Indicators Element 
//[1] create Ul element
var IndicatorsElement= document.createElement('ul');
//set Id To Ul
IndicatorsElement.setAttribute('id','indicator-ul');
//create list Items li based On images Count
for(let i=0;i<sliderImages.length;i++ ) {
    var IndicatorsElementLi=document.createElement('li');
    //setting attribute to the element li 
    IndicatorsElementLi.setAttribute("data-set",i);
    //set item content
    IndicatorsElementLi.appendChild(document.createTextNode(i+1));
    //appent IndicatorsElementLi to the main Ul List
    IndicatorsElement.appendChild(IndicatorsElementLi);
};
// Add The Created Ul elemnet to the page
document.getElementById('indicators').appendChild(IndicatorsElement);
//getting the created UL element 
var IndicatorsElementUl=document.getElementById('indicator-ul');
//getting the created li element 
var IndicatorsElementLis=document.querySelectorAll("[data-set]");
console.log (IndicatorsElementLis);
//handle click on li child element
for (let i=0; i<IndicatorsElementLis.length;i++)
{
    IndicatorsElementLis[i].onclick=()=>{
        removeActiveIndicator();
        removeActiveImg();
        slideNumberElement.textContent=`Slide #  ${i+1} Of  ${slidesCount}`;
        //set active class on current slide
        sliderImages[i].classList.add('img-active');
        //setting active class on current indicator item
       IndicatorsElementLis[i].classList.add('active-indicator');  
    }    
}
//handele Click Event On Previous and Next Buttons
nextButton.onclick=()=>{
    if (currentSlide==sliderImages.length){
        nextButton.classList.add('disabled');
    } 
    else{
        currentSlide+=1;
        nextButton.classList.remove('disabled');         
        nextSlide();
    }
};
prevButton.onclick=()=>{
    if (currentSlide!=1){
        currentSlide-=1;
        prevButton.classList.remove('disabled');         
        prevSlide();
    } 
    else{
        prevButton.classList.add('disabled');
    }
};
// next slide function (return next slide)
function nextSlide(){
   removeActiveImg();
   removeActiveIndicator();
   checker();
}
// prev slide function (return next slide)
function prevSlide(){
    removeActiveImg();
    removeActiveIndicator();
    checker();
}
//create Function To check Which image is Active now and add the class active

function checker(){
    //set slide number
    slideNumberElement.textContent="Slide # " + currentSlide+" Of " +slidesCount;
    //set active class on current slide
    sliderImages[currentSlide-1].classList.add('img-active');
    //setting active class on current indicator item
    IndicatorsElement.children[currentSlide-1].classList.add('active-indicator');  
}
//funciton to remove active class from images
function removeActiveImg(){
    sliderImages.forEach(img => {
        img.classList.remove('img-active')  
    });
}
//funciton to remove active class from Indicators Lis
function removeActiveIndicator(){
    IndicatorsElementLis.forEach(li => {
 li.classList.remove('active-indicator')       
    });
}