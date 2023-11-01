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

   const favoriteButton = document.createElement('button');


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