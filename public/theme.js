const root = document.documentElement;

if (localStorage.getItem('theme') === 'light') {
    root.classList.remove('dark');
} else {
    root.classList.add('dark');
}

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');

    toggle.textContent = root.classList.contains('dark') ? '🌙' : '☀️';

    toggle.addEventListener('click', () => {
        const isDark = root.classList.toggle('dark');
        toggle.textContent = isDark ? '🌙' : '☀️';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});