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
        var description_card = document.createElement('p');
        description_card.setAttribute("id","blog-description");
        console.log(description_card);
        document.getElementById('card-text').appendChild(description_card);
        description_card.innerHTML += this.detail;
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

document.getElementById('addBlog').addEventListener('click', function(){
    document.getElementById('popupContact').style.display = "block";
})


// document.getElementById('post').addEventListener('click', function(){
//     document.getElementById('popupContact').style.display = "none";
//     let title = document.getElementById('title').value;
//     let detail = document.getElementById('detail').value;
//     var blog1 = new Blog(title, detail)
// })

// when the new new blog is posted it should be displayed
let post = document.getElementById('post')
post.addEventListener('click',function(){
    document.getElementById('popupContact').style.display = 'none'
    var $img = document.createElement("img");
    $img.setAttribute("src", "./assets/java-card-image.svg");
    document.getElementById("card-text").appendChild($img);
    let $title = document.getElementById('title').value;
    let $detail = document.getElementById('detail').value;
    let blog1 = new Blog($title, $detail)
})

// when clicked on close icon the pop up should close
document.getElementById('close').addEventListener('click', function(){
    document.getElementById('popupContact').style.display="none";
})
