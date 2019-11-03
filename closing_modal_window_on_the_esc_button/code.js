// close CTA section on the ESC button
document.body.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelector('.modal__close').click();
  }
});