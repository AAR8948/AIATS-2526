(function () {
    if (document.getElementById('aa0105-css-core')) return;

    const style = document.createElement('style');
    style.id = 'aa0105-css-core';
    style.textContent = `
:root{--aa0105-primary:#4361ee;--aa0105-secondary:#3f37c9;--aa0105-success:#4cc9f0;--aa0105-danger:#e11735;--aa0105-warning:#f8961e;--aa0105-info:#4895ef;--aa0105-light:#f8f9fa;--aa0105-dark:#212529;--aa0105-purple:#7209b7;--aa0105-pink:#f72585;--aa0105-gradient-primary:linear-gradient(135deg, var(--aa0105-primary), var(--aa0105-secondary));--aa0105-gradient-success:linear-gradient(135deg, var(--aa0105-success), #38b000);--aa0105-gradient-warning:linear-gradient(135deg, var(--aa0105-warning), #f3722c);--aa0105-gradient-danger:linear-gradient(135deg, var(--aa0105-danger), #d00000);--aa0105-shadow-sm:0 2px 4px rgba(0, 0, 0, 0.1);--aa0105-shadow-md:0 4px 6px rgba(0, 0, 0, 0.1);--aa0105-shadow-lg:0 10px 15px -3px rgba(0, 0, 0, 0.1);--aa0105-shadow-xl:0 20px 25px -5px rgba(0, 0, 0, 0.1);--aa0105-radius-sm:4px;--aa0105-radius-md:8px;--aa0105-radius-lg:12px;--aa0105-radius-xl:16px;--aa0105-radius-full:9999px;--aa0105-transition-fast:0.15s ease;--aa0105-transition-normal:0.3s ease;--aa0105-transition-slow:0.5s ease;--aa0105-spacing-xs:4px;--aa0105-spacing-sm:8px;--aa0105-spacing-md:16px;--aa0105-spacing-lg:24px;--aa0105-spacing-xl:32px;--aa0105-spacing-2xl:48px}*{margin:0;padding:0;box-sizing:border-box}body{font-family:Inter,'Segoe UI',system-ui,-apple-system,sans-serif;background:linear-gradient(135deg,#667eea 0,#764ba2 100%);color:var(--aa0105-dark);line-height:1.6;min-height:100vh;overflow-x:hidden}.aa0105-container{max-width:1200px;margin:0 auto;padding:var(--aa0105-spacing-md);position:relative;z-index:1}
`;
    document.head.appendChild(style);
})();
