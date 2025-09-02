//used for exporting the images dynamically
//make it easier to dynamically import images into our components
//variable "path" is the picture file name
export const getImageUrl = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href; //string interperlation, href returns the url as a string
};