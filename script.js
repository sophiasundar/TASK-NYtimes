// api key    3YjscbYWqrPA9j776Ult8m8qcvBvLdAM
//  app id 1d2c67ce-3c1e-40f5-97a1-69e290fb87e1 


let url= "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=3YjscbYWqrPA9j776Ult8m8qcvBvLdAM"

let ny = async ()=>{
    
    try{
       let res = await fetch(url)
        console.log(res)
        let datum= await res.json()
         result(datum)
        }catch(err){
        console.log('refresh the page')
       }
    }
   ny()


   function result(data){
         console.log(data)

  let main= document.querySelector(".container")


  let row= document.createElement("div")
  row.setAttribute("class","row")

   
 data.results.books.forEach(element => {

      let col= createMyElement("div","col-sm-12 col-md-6 col-lg-4")

      let cardBg= createMyElement("div","card bg-dark text-white")

      let img=createMyElement("img","card-img")
      img.src=element.book_image;  //book_image

      let cardImage=createMyElement("div","card-img-overlay")

      let h3=createMyElement("h3","card-title")
      h3.innerHTML=element.author;  //author

      let para=createMyElement("p","card-text")
      para.innerHTML=element.description;  //description

      let publish=createMyElement("p","card-text")
      publish.innerHTML=element.publisher; //publisher
      
      cardImage.append(h3,para,publish)
      cardBg.append(img,cardImage)
      col.append(cardBg)
      row.append(col)
      main.append(row)
    
            
        });
    

}

function createMyElement(a,classb,elemId){


    let nytimes= document.createElement(a)
    nytimes.setAttribute("class",classb)
    nytimes.setAttribute("id",elemId)
    return nytimes;

}
    