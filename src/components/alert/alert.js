const alertWrapper = document.querySelectorAll('.alert');

if (alertWrapper.length) {
  alertWrapper.forEach(($e) => {
    const alertCloseBtn = $e.querySelector('.alert__close-icon');
    if (alertCloseBtn) {
      alertCloseBtn.addEventListener('click', () => {
        $e.style.display = 'none';
      });
    }
  });
}
