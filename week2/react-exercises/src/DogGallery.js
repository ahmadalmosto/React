import React,{useState} from 'react'
const DogGallery = ()=>{
    const [dogPhoto,setDogPhoto] = useState([])
    const GetDogPhoto = ()=>{
        const url = 'https://dog.ceo/api/breeds/image/random';
        fetch(url).then(response=>response.json())
        .then(response=>{
        console.log(response.message)
        setDogPhoto(response.message)
    })
    };
    
return(
    <div>
        <DogPhotos dogPhoto={dogPhoto}/>
        <button onClick={GetDogPhoto}>get dog</button>
       
    </div>
)

};
function DogPhotos({dogPhoto}){
    console.log(dogPhoto)
    return(
       <div>
             <img src={dogPhoto}/>
       </div>
    )
}
export default DogGallery