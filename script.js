let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
};

//Page to page-------------------------------------//
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navlist a");
  const sections = document.querySelectorAll(
    ".home-section, .events-section, .subclubs-section, .alumni-section, .gallery-section, .teams-section, .contacts-section"
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetSectionId = link.getAttribute("href");
      const targetSection = document.querySelector(targetSectionId);

      menuIcon.classList.remove("bx-x");
      navlist.classList.remove("open");

      window.scroll(0, 0);

      sections.forEach((section) => {
        if (section === targetSection) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });

      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
});

////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const headerHomePageLink = document.querySelector(".header-home-page");
  headerHomePageLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.reload();
  });
});

////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const footerContactLink = document.querySelector(".footer-contact-us");
  const navA7Link = document.querySelector("#nav-a7");
  const sections = document.querySelectorAll(
    ".home-section, .events-section, .subclubs-section, .alumni-section, .gallery-section, .teams-section, .contacts-section"
  );
  const navLinks = document.querySelectorAll(".navlist a");
  const contactsSection = document.querySelector("#contacts-section");
  function showContactsSection() {
    sections.forEach((section) => {
      if (section === contactsSection) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    navA7Link.classList.add("active");
  }
  footerContactLink.addEventListener("click", function (event) {
    event.preventDefault();
    showContactsSection();
    contactsSection.scrollIntoView({ behavior: "smooth" });
  });
});

///////////////////////////////////////
function openModal(title, content) {
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  modalTitle.textContent = title; // Set the modal title
  modalContent.textContent = content; // Set the modal content
}

//////////////////////////////////////////////////
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwYYh2c7I7goWQzgQ3xPdEck8PmBP246eksQnWGZs3KqGsliFVhBd2AaTvXrN3Zpesy/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));
    alert("Thank you... Someone will be contacting you soon");
  }
});

function validateForm() {
  var name = document.getElementById("name_input").value;
  var email = document.getElementById("email_input").value;
  var phone = document.getElementById("telephone_input").value;

  var phonePattern = /^\d{10}$/;

  if (name === "" || email === "" || phone === "") {
    alert("All fields are required.");
    return false;
  }

  if (!emailIsValid(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!phone.match(phonePattern)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  return true;
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//Events----------------------------------//
document
  .getElementById("openModalLink1")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog1.showModal();
  });

document
  .getElementById("openModalLink2")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog2.showModal();
  });

document
  .getElementById("openModalLink3")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog3.showModal();
  });

document
  .getElementById("openModalLink4")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog4.showModal();
  });

document
  .getElementById("openModalLink5")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog5.showModal();
  });

document
  .getElementById("openModalLink6")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog6.showModal();
  });

document
  .getElementById("openModalLink7")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog7.showModal();
  });

document
  .getElementById("openModalLink8")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog8.showModal();
  });

document
  .getElementById("openModalLink9")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog9.showModal();
  });

document
  .getElementById("openModalLink10")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog10.showModal();
  });

document
  .getElementById("openModalLink11")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog11.showModal();
  });

document
  .getElementById("openModalLink12")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog12.showModal();
  });

document
  .getElementById("openModalLink13")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog13.showModal();
  });

document
  .getElementById("openModalLink14")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog14.showModal();
  });

document
  .getElementById("openModalLink15")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog15.showModal();
  });

document
  .getElementById("openModalLink16")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.dialog16.showModal();
  });
