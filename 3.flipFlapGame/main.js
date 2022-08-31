//first add timer and music 
//save name in the local storage
//Start Game
document.querySelector(".control-buttons span").onclick=function(){
   
    let yourName= prompt("What Is Your Name?");

   if (yourName===null || yourName===""){
    document.querySelector(".name span").innerHTML="Unknown";

    }else{

    document.querySelector(".name span").innerHTML=yourName;  
   }
//remove the splash screen from dom

document.querySelector(".control-buttons").remove(); 
}


let duration =1000;

//slecting the blocks container
let blocksContainer=document.querySelector(".game-blocks-container");

//selecting all blocks and store them in array
let allBlocks=Array.from(blocksContainer.children);

            //=====shuffeling the Images=======//
//storing keys() of all blocks in a new array Iterator
//[Array(allBlocks.length).keys()];
//extracting the previous step into array
let orderRange= [...Array(allBlocks.length).keys()];
//shuffle order range array
shuffle(orderRange);
allBlocks.forEach((block, index)=>{
    //Add order (flexBox Property) To blocks 
    block.style.order=orderRange[index];
    //add Event On Click To the Block
    block.addEventListener("click",()=>{
        //trigger flipFlap Function
        flipFlap(block);
    })
 
});

//shuffle Function 
function shuffle(array){
    //settings variables
    var current = array.length,
        temp,
        random;
    while(current>0){
        //Get Random Number
        random=Math.floor(Math.random()*current);
        //Decrease Length By One
        current--;
        //swapping blocks
        //[1]save current  element in stash[temp]
        temp=array[current];
        //[2]Current Element = Random Element 
        array[current]=array[random];
        //[3]Random Element =Get Element From Stash [temp] 
        array[random]=temp;
    }
return array;
};
//Flip Flap Function
function flipFlap(selectedBlock){
//Add is-flipped Class 
    selectedBlock.classList.add('is-flipped');
//Collect Flipped Cards
    let allFlippedBlocks=allBlocks.filter(flippedBlock=>flippedBlock.classList.contains('is-flipped'));
// If There Is Two Selected Blocks
    if(allFlippedBlocks.length===2){
//TriggerClicking Function
        stopClicking();
// Check Matching Blocks Function
        checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1]);
    }

}

//stop Clicking function
function stopClicking(){
    //add Class No Clicking On Main Container
    blocksContainer.classList.add('no-clicking');
    setTimeout(()=>{
    //remove class no clicking After 1000ms
    blocksContainer.classList.remove('no-clicking');
    },duration)
}
//check matching blocks function 
function checkMatchedBlocks(firstBlock,secondBlock){
    let triesElement=document.querySelector('.tries span');
    if(firstBlock.dataset.number===secondBlock.dataset.number){
       //remove class is-flipped
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
        //add class has-match
        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
    }else{
       setTimeout(()=>{
           triesElement.innerHTML=parseInt(triesElement.innerHTML)+1;
           firstBlock.classList.remove('is-flipped');
           secondBlock.classList.remove('is-flipped');
       },duration)
    }
};

//Congratulations Function