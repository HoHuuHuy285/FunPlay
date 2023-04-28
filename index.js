let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}


function thongbao() {
    alert("Chưa cập nhật, hãy quay lại sau nhé !");
}


var date = new Date();
document.getElementById("year").innerHTML = date;

function Copyright() {
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;
}



