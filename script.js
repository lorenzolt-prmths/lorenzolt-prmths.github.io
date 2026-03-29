function toggleCategory(categoryId) {
    const lists = document.querySelectorAll('.projects-list');

    // Ocultar todas las listas
    lists.forEach(list => {
        list.style.display = 'none';
    });

    // Mostrar la lista seleccionada
    const selected = document.getElementById(categoryId);
    selected.style.display = 'block';

    // Scroll suave hacia los proyectos
    setTimeout(() => {
        window.scrollTo({
            top: selected.offsetTop - 80,
            behavior: 'smooth'
        });
    }, 100);
}
