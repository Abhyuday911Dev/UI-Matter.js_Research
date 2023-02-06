function () {
    bouncy.classList.add("bouncing");
    bouncy.addEventListener("animationend", function () {
        bouncy.classList.remove("bouncing");
    });
}
