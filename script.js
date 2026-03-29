function toggleCategory(categoryId) {
    // Ocultar todas las listas
    const lists = document.querySelectorAll('.projects-list');
    lists.forEach(list => {
        list.style.display = 'none';
    });

    // Mostrar la lista seleccionada
    const selected = document.getElementById(categoryId);
    selected.style.display = 'block';

    // Scroll hacia la lista
    selected.scrollIntoView({
        behavior: 'smooth'
    });
}
