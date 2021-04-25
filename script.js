/* Fill your code*/
class Blog{
    constructor(title,detail){
        this.title = title;
        this.detail - detail;
    }
    addTitle(){
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title-card);
        title_card.innerHTML += this.title;
    }
    addDescription(){
        var description = document.getElementById('p');
        description.setAttribute("id","blog-description");
        console.log(description);
        document.getElementById('card-text').appendChild(description);
        description.innerHTML += this.detail;
    }
    var addBlog = document.getElementById('addBlog');
    var displayPost = addBlog.style.display;
    if(displayPost == 'block'){
        displayPost = 'none'; // to hide  
    }
    else{
        displayPost = 'block'; //to display in block
    }
}