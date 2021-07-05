/* Fill your code*/
class Blog{
    constructor(title,detail){
        this.title = title;
        this.detail = detail;
    }
    addImage() {
        var image = document.createElement('img')
        image.src = './assets/javascript.png'
        document.getElementById('flashcard').appendChild(image)
      }

    addTitle(){
        console.log(title);
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title-card);
        title_card.innerHTML += this.title;
    }
    addDescription(){
        console.log(detail);
        var description = document.getElementById('p');
        description.setAttribute("id","blog-description");
        console.log(description);
        document.getElementById('card-text').appendChild(description);
        description.innerHTML += this.detail;
    }


    // var addBlog = document.getElementById('addBlog');
    // var displayPost = addBlog.style.display;
    // if(displayPost == 'block'){
    //     displayPost = 'none'; // to hide  
    // }
    // else{
    //     displayPost = 'block'; //to display in block
    // }
}

var addPost = document.getElementById('addBlog')
addPost.addEventListener('click', function(){
    document.getElementById('popupContact').style.display = "block"
 })
// function addBlog(){
//     document.querySelector("#popupContact").style.visibility = "visible";
// }

let post = document.getElementById('post')
post.addEventListener('click',function(){
    document.getElementById('popupContact').style.display = 'none'
    let title = document.getElementById('title').value
    let detail = document.getElementById('detail').value
    let blog1 = new Blog(title, detail)
})

// function post(){
//     let blog1 = new Blog(document.querySelector('#title').value, document.querySelector('#detail1').value)
//     console.log(blog1);
//     document.querySelector("#popupContact").style.visibility="hidden";
//     let newImage = document.createElement("img");
//     newImage.src = "assets/javascript.png";
//     newImage.setAttribute("id", "blog-image")
//     console.log(newImage)
//     document.querySelector("#card-text").append(newImage)
//     blog1.addTitle()
//     blog1.addDescription()
// }
// document.querySelector("#addBlog").addEventListener("click",addBlog)
// document.querySelector('#post').addEventListener("click",post)