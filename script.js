function toggleCategory(categoryId) {
    const lists = document.querySelectorAll('.projects-list');

    // Ocultar todas
    lists.forEach(list => {
        list.style.display = 'none';
    });

    // Mostrar la seleccionada
    const selected = document.getElementById(categoryId);
    selected.style.display = 'block';

    // Esperar un poco para que el div aparezca antes del scroll
    setTimeout(() => {
        selected.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}
