const Memegeneratebtn= document.querySelector('.meme-generator-btn');
const MemeIMG= document.querySelector(' .meme-generator img');
const MemeTitle= document.querySelector(' .meme-generator  .meme-title');
const MemeAuthor= document.querySelector(' .meme-generator  .meme-author');


const ubdateDetails=(url,title,author) =>{
    MemeIMG.setAttribute('src',url)
    MemeTitle.innerHTML=title;
    MemeAuthor.innerHTML= `this made by  ${author}`
}
const generateMeme= () =>{
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((Response) => Response.json())
    .then((data)=>{
        ubdateDetails(data.url,data.title,data.author);
    })
} 



Memegeneratebtn.addEventListener('click',generateMeme)


generateMeme();