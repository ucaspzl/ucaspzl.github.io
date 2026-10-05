(() => {
  const toggle = document.getElementById('language-toggle');
  function setLanguage(language) {
    const chinese = language === 'zh';
    document.documentElement.lang = chinese ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach(element => {
      element.textContent = element.dataset[chinese ? 'zh' : 'en'];
    });
    toggle.textContent = chinese ? 'English' : '中文';
    toggle.setAttribute('aria-label', chinese ? 'Switch to English' : '切换到中文');
    document.title = chinese ? '彭忠龙' : 'Zhonglong Peng';
    try { localStorage.setItem('homepage-language', language); } catch {}
  }
  let preferred = 'en';
  try { preferred = localStorage.getItem('homepage-language') === 'zh' ? 'zh' : 'en'; } catch {}
  setLanguage(preferred);
  toggle.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en'));
})();
