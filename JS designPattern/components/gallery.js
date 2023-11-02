import {createPhoto} from "./photo";

export async function createGallery(){
    const gallery = document.createElement('div');
    gallery.classList.add('gallery');
    
    let photos;
    try{
        photos = await fetchImages();//later
    }catch(error){
        console.log("Error fetching images:", error);
        photos = await fetchBackupImages();
    }

    for(const photo of photos){
        const photoElement = await createPhoto(photo.url,"img");//later
        gallery.appendChild(photoElement);
    }


   //choose favorite photo 
   const favoriteButton = document.createElement('button');
   favoriteButton.textContent = 'Select your favorite pic';
   favoriteButton.classList.add('favorite-button');
   favoriteButton.addEventListener('click', async()=>{
    const{addFavoriteCheckboxes} = await import('./favorite.js');
    addFavoriteCheckboxes(gallery);
    favoriteButton.remove();
   })

   gallery.appendChild(favoriteButton);


    return gallery;

}

 //fetch images
 async function fetchImages(){
    const response = await fetch("");//fetch image from api
    const data = await response.json();
    return data.message.map(url=>({url}));
}

async function fetchBackupImages(){
    const response = await fetch("");//fetch image from api
    const data = await response.json();
    return data.message.map(url=>({url}));
}