

let comment = document.querySelectorAll(".comment")



comment.forEach((element, index) => {
    element.children[1].children[0].children[1].addEventListener("click", () => {
        let recommentInput = element.parentElement.children[1]
        recommentInput.classList.remove("noneDisply")
        element.parentElement.children[1].children[1].value = `@${element.children[1].children[0].children[0].children[1].children[0].textContent} `
        console.log(element.parentElement.children[1].children[1])
    })
    element.parentElement.children[1].children[2].addEventListener("click", () => {
        // element.parentElement.children[1]
        console.log(element.parentElement.children[2].children[1])
        let comments = element.parentElement.children[2].children[1]
        let input = element.parentElement.children[1].children[1]
        // console.log(Data + " " + input.value)?
      if (!input.value == "") {
          element.parentElement.children[1].classList.add("noneDisply")
            comments.innerHTML += `
          <div class="commentreply comment">
            <div class="likes">
              <span class="likes_count_plus">+</span>
              <span class="likes_count">0</span>
              <span class="likes_count_minus">-</span>
            </div>
            <div class="body_comment">
              <div class="user">
                <div class="left_side_up_comment_user">
                  <div class="image">
                    <img src="./images/avatars/image-juliusomo.png" alt="avatar"> 
                  </div>
                  <div class="user_info">
                    <p class="username">juliusomo</p>
                    <p class="date">${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}</p>
                  </div>
                </div>
                <div class="options" id="options">
                  <div class="editBtn">
                    <i class="fa-solid fa-pen"></i>
                    <p class="edit">Edit</p>
                  </div>
                  <div class="deleteBtn">
                    <i class="fa-regular fa-trash-can"></i>
                    <p class="delete">delete</p>
                  </div>
                </div>
              </div> 
              <div class="content_comment">
                <p>${input.value}</p>
              </div>
            </div>
        </div>            
            `
        }
      })
})

let myComments = document.getElementById("myComments");
let myComment = document.getElementById("myComment");
let comments = document.getElementById("comments");
let mycomment = document.getElementById("input_mycomment");
let sendcomment = document.getElementById("sendcomment");
sendcomment.addEventListener("click", () => {
    myComment.innerHTML += `
    <div class="cont_comment">
    <div class="comment">
        <div class="likes">
            <span class="likes_count_plus">+</span>
            <span class="likes_count">0</span>
            <span class="likes_count_minus">-</span>
        </div>
        <div class="body_comment">
            <div class="user">
                <div class="left_side_up_comment_user">
                    <div class="image">
                        <img src="./images/avatars/image-juliusomo.png" alt="">
                    </div>
                    <div class="user_info">
                        <p class="username">juliusomo</p>
                        <p class="date">${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}</p>
                    </div>
                </div>
                <div class="options" id="options">
                  <div>
                    <i class="fa-solid fa-pen"></i>
                    <p class="edit">Edit</p>
                  </div>
                  <div class="deleteBtn">
                    <i class="fa-regular fa-trash-can"></i>
                    <p class="delete">delete</p>
                  </div>
                </div>
            </div> 
            <div class="content_comment">
                <p>${mycomment.value}</p>
            </div>
        </div>
      </div>  
    </div>
    `
    mycomment.value = ""
})

let countplus = document.querySelectorAll(".likes .likes_count_plus")
let countminus = document.querySelectorAll(".likes .likes_count_minus")
let count = document.querySelectorAll(".likes .likes_count")

countplus.forEach((element) => {
    element.addEventListener("click", () => {
      // console.log(element.parentElement.children[1])
      element.parentElement.children[1].innerHTML++
    })
})
countminus.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.parentElement.children[1].innerHTML > 0) {
        element.parentElement.children[1].innerHTML--
        
    }
    else {
        element.parentElement.children[1].innerHTML = 0
    }
    })
})