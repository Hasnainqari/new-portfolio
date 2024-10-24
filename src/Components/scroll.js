export const scroll = () => {
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(".scroll-top");
    for (let i = 0; i < sticky.length; i++) {
      const stick = sticky[i];
      if (stick) {
        if (offset > 10) {
          stick.classList.add("active-scroll-top");
        } else {
          stick.classList.remove("active-scroll-top");
        }
      }
    }
  });
};
