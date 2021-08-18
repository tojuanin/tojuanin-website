let aboutSection = document.getElementById("about-section");
let skillsSection = document.getElementById("skills-section");
let educationSection = document.getElementById("education-section");
let experienceSection = document.getElementById("experience-section");

const menuLinks = document.querySelectorAll(".menu .menu-item");

menuLinks.forEach((el) => {
  el.addEventListener("click", function () {
    let sectionToGo = aboutSection;

    switch (this.id) {
      case "skills":
        sectionToGo = skillsSection;
        break;
      case "education":
        sectionToGo = educationSection;
        break;
      case "experience":
        sectionToGo = experienceSection;
        break;
    }
    sectionToGo.scrollIntoView({ behavior: "smooth" });
  });
});
