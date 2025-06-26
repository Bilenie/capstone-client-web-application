document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('themeToggle');

    function setThemeIcon(isDark) {
        toggle.textContent = isDark ? '☾' : '☼';
    }

    const savedTheme = localStorage.getItem('theme');
    const isDarkSaved = savedTheme === 'dark';

    if (isDarkSaved) {
        document.body.classList.add('dark-mode');
    }

    setThemeIcon(isDarkSaved);

    toggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        setThemeIcon(isDark);
    });
});
