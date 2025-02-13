document.addEventListener("DOMContentLoaded", function() {
            document.querySelectorAll(".dropdown button").forEach(button => {
                button.addEventListener("click", function() {
                    this.parentElement.classList.toggle("active");
                });
            });
        });