var thumbBar = document.querySelector('.thumb-bar');
var button = document.querySelector('.dark');
var overlay = document.querySelector('.overlay');
button.onclick = function () {
  if(this.textContent === 'Darken') {
    overlay.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    this.textContent = 'Lighten';
  } else {
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    this.textContent = 'Darken';
  }
  
}

function createImg() {
  for(var i = 1; i <= 5; i++) {
    var img = document.createElement('img');
    img.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(img);
    (function (i) {
      img.onclick = function (e) {
        var displayedImg = document.querySelector('.displayed-img');
        displayedImg.setAttribute('src', 'images/pic' + i + '.jpg');
      };
    })(i);
  }
}

createImg();