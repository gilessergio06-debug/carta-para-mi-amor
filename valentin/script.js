document.addEventListener('DOMContentLoaded', function () {
    const revealBtn = document.getElementById('revealMessageBtn');
    const secretMessage = document.getElementById('secretMessage');

    if (revealBtn && secretMessage) {
        revealBtn.addEventListener('click', function () {
            if (secretMessage.classList.contains('hidden')) {
                secretMessage.classList.remove('hidden');
                revealBtn.textContent = '¡Ya lo leíste!';
                revealBtn.disabled = true; // Deshabilita el botón después de revelar
            }
        });
    }
});