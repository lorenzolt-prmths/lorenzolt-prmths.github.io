function toggleCategory(categoryId) {
    const lists = document.querySelectorAll('.projects-list');
    lists.forEach(list => {
        list.style.display = 'none';
    });

    const selected = document.getElementById(categoryId);
    selected.style.display = 'block';

    window.scrollTo({
        top: selected.offsetTop - 80,
        behavior: 'smooth'
    });
}
