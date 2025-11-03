const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModalLink');
const closeBtn = document.getElementById('closeModal');
const firstInput = document.getElementById('loginId');

openBtn.addEventListener('click', function(e) {
  e.preventDefault();
  modal.setAttribute('aria-hidden', 'false');
  modal.focus();
  firstInput.focus();
  document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
});

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});
modal.addEventListener('click', function(e) {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  openBtn.focus();
  document.body.style.overflow = ''; // 스크롤 원상복구
}

modal.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
      return;
    }
  
    if (e.key === 'Tab') {
      const focusableElements = modal.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
  
      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else { // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });  
  document.querySelectorAll('.clearBtn').forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (input) {
        input.value = '';
        input.focus();  // 내용 지우고 해당 입력창에 포커스를 이동
      }
    });
  });
  
  