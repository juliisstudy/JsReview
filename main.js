//images gallery
const displayedImage = document.querySelector('.display-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = [`Beef Stuffed Poblano`,`Meatball Subs`,`Raspberry honey dessert cake`,`Sushi-Sashimi Combination`];

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `image/${image}.jpg`);
    newImage.setAttribute('width','100px');
    newImage.setAttribute('height','100px');

    newImage.setAttribute('alt', images[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }

btn.addEventListener('click',()=>{
    const btnClass = btn.getAttribute('class');
    if(btnClass ==='dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});