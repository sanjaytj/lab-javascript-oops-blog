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


let post = document.getElementById('post')
post.addEventListener('click',function(){
    document.getElementById('popupContact').style.display = 'none'
    let title = document.getElementById('title').value
    let detail = document.getElementById('detail').value
    let blog1 = new Blog(title, detail)
})
