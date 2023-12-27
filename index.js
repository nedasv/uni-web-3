const header = document.querySelector(".navbar");
const watcher = document.createElement("div");

watcher.setAttribute("data-scroll-watcher", "");
header.before(watcher);

const navObserver = new IntersectionObserver((entries) => {
    header.classList.toggle("sticking", !entries[0].isIntersecting);
});

navObserver.observe(watcher);