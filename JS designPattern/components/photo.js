export function createPhoto(){
    const photo = document.createElement('div');
    photo.classList.add('photo');
    photo.appendChild(createImage());
    return photo;
}