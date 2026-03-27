function toggleCategory(id) {
    const sections = document.querySelectorAll('.projects-list');

    sections.forEach(section => {
        if (section.id === id) {
            section.style.display = section.style.display === "block" ? "none" : "block";
        } else {
            section.style.display = "none";
        }
    });
}
