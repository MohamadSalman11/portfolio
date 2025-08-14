export function initLoadingScreen() {
  const loader = document.querySelector('.loading-screen') as HTMLElement;
  const htmlEl = document.documentElement;
  const bodyEl = document.body;

  const startTime = performance.now();

  bodyEl.style.overflow = 'hidden';

  const hideLoader = () => {
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
      bodyEl.style.overflow = '';
      bodyEl.style.paddingRight = '';
      htmlEl.style.scrollbarGutter = '';
    }, 800);
  };

  const applyScrollbarFix = () => {
    const hasScrollbar = window.innerHeight < htmlEl.scrollHeight;
    if (hasScrollbar) {
      htmlEl.style.scrollbarGutter = 'stable';
    }
  };

  const maxTimeout = setTimeout(hideLoader, 10000);

  window.addEventListener('load', () => {
    clearTimeout(maxTimeout);

    applyScrollbarFix();

    const loadTime = performance.now() - startTime;
    const delay = loadTime < 2000 ? 2000 : 0;

    setTimeout(hideLoader, delay);
  });
}
