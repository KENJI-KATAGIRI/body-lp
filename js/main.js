// FAQ アコーディオン
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    // 全部閉じる
    document.querySelectorAll('.faq-question').forEach(b => {
      b.classList.remove('open');
      b.nextElementSibling.classList.remove('open');
    });
    // クリックしたものを開く
    if (!isOpen) {
      btn.classList.add('open');
      answer.classList.add('open');
    }
  });
});

// スクロール時のナビ影
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.site-nav');
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 2px 16px rgba(26,20,16,0.12)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
