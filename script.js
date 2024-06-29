document.addEventListener("DOMContentLoaded", () => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
  
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target.classList.contains("main-heading")) {
          if (entry.isIntersecting) {
            entry.target.classList.add("h-in-view");
          } else {
            entry.target.classList.remove("h-in-view");
          }
        } else if (entry.target.classList.contains("para")) {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("p-in-view");
            }, 200);
            setTimeout(() => {
                entry.target.classList.add("p-vis");
            }, 1200);
            entry.target.classList.remove("p-in-view");
          }
        } else if (entry.target.classList.contains("button")) {
          entry.target.classList.add("btn");
          if (entry.isIntersecting) {
            entry.target.classList.add("btn-in-view");
            // Perform any actions for the button when it intersects
          } else {
            entry.target.classList.remove("btn-in-view");
            // Revert button state or perform other actions when it doesn't intersect
          }
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    observer.observe(document.querySelector(".main-heading"));
    setTimeout(() => {
      observer.observe(document.querySelector(".para"));
      observer.observe(document.querySelector(".button"));
    }, 500);
  });