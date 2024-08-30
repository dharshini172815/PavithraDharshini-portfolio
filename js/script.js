/*toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Scroll section active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()  => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)  {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* sticky navbar */

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* scroll reveal */
ScrollReveal({
    /*reset: true,*/
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .about-img', {origin: 'top'});
ScrollReveal().reveal('.images, .skills, .education-row, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1', {origin: 'left'});
ScrollReveal().reveal('.about-content', {origin: 'right'});

/*typed js */
const typed = new Typed('.multiple-text', {
    strings: ['FrontEnd Developer!', 'Web Designer!', 'Java Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const form = document.querySelector('form');

const fullname = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){

    const bodyMsg = `Full name: ${fullname.value}<br> Email: ${email.value}<br> Mobile no: ${mobile.value}<br>
    Message: ${message.value}<br>`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "dharshini172815@gmail.com",
        Password : "FAC5C7421874BC82D9ED9E8B7C327E06756B",
        To : 'dharshini172815@gmail.com',
        From : "dharshini172815@gmail.com",
        Subject : subject.value,
        Body : bodyMsg
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "SUCCESS!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
});