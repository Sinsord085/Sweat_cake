/* Detail img */

var MainImg = document.getElementById("MainImg");
var smalling = document.getElementsByClassName("small-img");

smalling[0].onclick = function() {
    MainImg.src = smalling[0].src;
}
smalling[1].onclick = function() {
    MainImg.src = smalling[1].src;
}
smalling[2].onclick = function() {
    MainImg.src = smalling[2].src;
}
smalling[3].onclick = function() {
    MainImg.src = smalling[3].src;
}

/* rating-value */
let star = document.querySelectorAll('input');
let showValue = document.querySelector('#rating-value');

for (let i = 0; i < star.length; i++) {
    star[i].addEventListener('click', function() {
        i = this.value;

        showValue.innerHTML = i + " out of 5";
    });
}

/* review end */
const btn = document.querySelector("button");
const post = document.querySelector(".post");
const rating = document.querySelector(".rating");
const editBtn = document.querySelector(".edit");
btn.onclick = () => {
    rating.style.display = "none";
    post.style.display = "block";

    editBtn.onclick = () => {
        rating.style.display = "block";
        post.style.display = "none";
    }
    return false;
}


/* form login*/
let formBtn = document.querySelector('.submit-btn');
let loader = document.querySelector('.loader');

formBtn.addEventListener('click', () => {
    let fullname = document.querySelector('#name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let number = document.querySelector('#number');
    let tac = document.querySelector('#tc');

    //form validation
    if (fullname.value.length < 3) {
        showFormError('name must be 3 letters long');
    } else if (!email.value.length) {
        showFormError('enter your email');
    } else if (password.value.length < 8) {
        showFormError('password must be 8 letters long');
    } else if (Number(number) || number.value.length < 10) {
        showFormError('invalid number, please enter valid one');
    } else if (!tac.checked) {
        showFormError('you must aqree to our terms and condition');
    } else {
        //submit from 
        loader.getElementsByClassName.display = 'block';
    }

})