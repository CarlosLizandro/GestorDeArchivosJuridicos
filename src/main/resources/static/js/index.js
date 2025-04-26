document.addEventListener('DOMContentLoaded', function() {
    // Elementos del modal
    const addButton = document.querySelector('.add-new-button');
    const modal = document.getElementById('addModal');
    const closeModal = document.querySelector('.close-modal');
    const cancelBtn = document.querySelector('.cancel-btn');
    const form = document.getElementById('documentForm');
    
    // Abrir modal
    addButton.addEventListener('click', function() {
        modal.classList.remove('hidden');
    });
    
    // Cerrar modal
    function closeModalFunction() {
        modal.classList.add('hidden');
        form.reset();
    }
    
    closeModal.addEventListener('click', closeModalFunction);
    cancelBtn.addEventListener('click', closeModalFunction);
    
    // Cerrar al hacer clic fuera del modal
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunction();
        }
    });
    
    // Enviar formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const titulo = document.getElementById('titulo').value;
        const fecha = document.getElementById('fecha').value;
        const tomo = document.getElementById('tomo').value;
        const paginas = document.getElementById('paginas').value;
        
        // Aquí puedes añadir la lógica para guardar el documento
        console.log('Nuevo documento:', { titulo, fecha, tomo, paginas });
        
        // Cerrar modal y resetear formulario
        closeModalFunction();
    });
    
    // Búsqueda en tiempo real (tu código existente)
    const searchInput = document.querySelector('.search-input');
    const tableRows = document.querySelectorAll('.members-table tbody tr');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        tableRows.forEach(row => {
            const titleCell = row.cells[0];
            const titleText = titleCell.textContent.toLowerCase();
            row.style.display = titleText.includes(searchTerm) ? '' : 'none';
        });
    });
});