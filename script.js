
// button, word, containers
var button = document.getElementById('button');
var word = document.getElementById('opening');
var firstcloudcontainer = document.getElementById('firstcloudcontainer')
var openingcontainer = document.getElementById('openingcontainer')
var closing = document.getElementById('closingcontainer')


//first cloud words
var firstcloud = document.getElementById('firstCloud');
var smallwords = document.getElementsByClassName('small')
var mediumwords = document.getElementsByClassName('medium')
var largewords = document.getElementsByClassName('large')
var xlwords = document.getElementsByClassName('extraLarge')
var closing = document.getElementById('closing')
var closingcontainer = document.getElementById('closingcontainer')
var firstCloudElement = document.getElementById("firstCloud")
var firstCloudList = document.getElementsByTagName("li")

//if button is pressed
function pressed2() {
    console.log("pressed")
    firstcloud.classList.add('fadeout');
    button.classList.add('fadeout');
    
    function closings() {
    closing.classList.add('fadein')
    closing.style.display = "block";
    closingcontainer.style.placeItems = 'center';
    }
    setTimeout(closings,500)
}


//switching from opening to wordcloud
function showfirstcloud() {
  console.log("showfirstcloud");
  firstcloud.style.visibility = "visible";
  for(let i = 0; i<firstCloudList.length; i++){
    console.log("forlooprunning");
     var curWord = firstCloudList[i]; 
     curWord.style.opacity = "0%"; 
     curWord.classList.add('fadein'); 
     var delay = Math.random()*10; 
     curWord.style.animationDelay = delay + "s"; 
     curWord.style.animationFillMode = "forwards"; 
    console.log('wordsfadein');
  }

  word.style.display = 'none';
  openingcontainer.style.display = 'none';
  button.style.visibility = 'visible';
  firstcloudcontainer.style.display = 'block';
}