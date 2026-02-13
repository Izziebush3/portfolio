const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector("i");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("darkTheme");
    icon.className = "fa fa-sun-o";
} else {
    icon.className = "fa fa-moon-o";
}

themeToggle.addEventListener('click', function () {
    document.body.classList.toggle("darkTheme");

    let theme;
    if (document.body.classList.contains("darkTheme")) {
        theme = "dark";
        icon.className = "fa fa-sun-o";
    } else {
        theme = "light";
        icon.className = "fa fa-moon-o";
    }
    localStorage.setItem("theme", theme);
});

