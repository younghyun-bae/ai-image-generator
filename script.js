const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');

generateBtn.addEventListener('click', () => {

  if (gridContainer.children.length >= 30) {
    const confirmed = confirm("You have reached the maximum number of images. Would you like to delete all of them?");
    if (confirmed) {
      gridContainer.innerHTML = "";
    }
  } else {  
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    const imgUrl = `https://picsum.photos/300?random=${randomNumber}`;
  
    const img = document.createElement('img');
    img.src = imgUrl;
  
    gridContainer.appendChild(img);
  }
});