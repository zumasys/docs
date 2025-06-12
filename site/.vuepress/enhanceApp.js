export default ({
    Vue,
    options,
    router,
    siteData,
    isServer
}) => {
    // Google Tag Manager integration
    //www.analyticsmania.com/post/single-page-web-app-with-google-tag-manager/#developers-help
    if (process.env.NODE_ENV === 'production' && process.env.VUE_APP_GOOGLE_TAG_MANAGER && typeof window !== 'undefined') {
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0];
            var j = d.createElement(s);
            var dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', process.env.VUE_APP_GOOGLE_TAG_MANAGER);

        router.afterEach(function (to) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'Pageview',
                'pagePath': to.fullPath
                //'pageTitle': 'Contact us'
            });
        })
    }

    if (typeof window !== 'undefined') {
        const applyTheme = mode => {
            if (mode === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        const stored = localStorage.getItem('theme');
        if (stored) {
            applyTheme(stored);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            applyTheme('dark');
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });

        const insertToggle = () => {
            const repo = document.querySelector('.repo-link');
            if (repo && !document.querySelector('.dark-mode-toggle')) {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'dark-mode-toggle';
                btn.setAttribute('aria-label', 'Toggle dark mode');
                const setIcon = () => {
                    btn.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
                };
                setIcon();
                btn.addEventListener('click', () => {
                    const dark = document.documentElement.classList.contains('dark');
                    applyTheme(dark ? 'light' : 'dark');
                    localStorage.setItem('theme', dark ? 'light' : 'dark');
                    setIcon();
                });
                repo.parentNode.insertBefore(btn, repo.nextSibling);
            }
        };

        router.afterEach(() => {
            setTimeout(insertToggle, 200);
        });
        setTimeout(insertToggle, 200);
    }
}
