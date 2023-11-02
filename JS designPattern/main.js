import { createHeader } from "./components/header";
import { createGallery } from "./components/gallery";

(async function(){
    document.body.appendChild(createHeader());
    document.body.appendChild(await createGallery());
});