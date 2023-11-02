let favorite =[];

export function toggleFavorite(photo){
    photo.classList.toggle('favorite');

    const photoUrl = photo.querySelector('img').getAtrribute('src');
    if(photo.classList.contains('favorite')){
        favorite.push(photoUrl);
    }else{
        favorite = favorite.filter(url=>url!==photoUrl);
    }
}
export function addFavoriteCheckboxes(gallery){
    const photos = gallery.querySelectorAll('.photo');
    photos.forEach(photo=>{
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('favorite-box');
        checkbox.addEventListener('change',()=>toggleFavorite(photo));
        photo.appendChild(checkbox);
    });
}