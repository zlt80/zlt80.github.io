document.addEventListener("DOMContentLoaded", () => {
    
    // ========== Pagination 처리 부분 시작 ==========
    const container = document.querySelector(".container");
    const sections = document.querySelectorAll("section");
    const pagination = document.querySelector(".pagination ul");

    sections.forEach((section, index) => {
        const li = document.createElement("li");
        li.dataset.index = index;
        pagination.appendChild(li);
    });

    const paginationItems = document.querySelectorAll(".pagination li");
    const filterColors = ['#f0f2fa', '#fbf1ee', '#ede7df']

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const index = [...sections].indexOf(entry.target);

                if (entry.isIntersecting) {
                    console.log(index);
                    // container.style.backgroundImage = `url('./images/background${index}.png')`;
                    container.style.backgroundColor = filterColors[index];
                    paginationItems.forEach((item) => item.classList.remove("active"));
                    if (paginationItems[index]) {
                        paginationItems[index].classList.add("active");
                    }
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    sections.forEach((section) => observer.observe(section));

    paginationItems.forEach((li, index) => {
        li.addEventListener("click", () => {
            sections[index].scrollIntoView({
                behavior: "smooth",
            });
        });
    });
});
// ========== Pagination 처리 부분 끝 ==========