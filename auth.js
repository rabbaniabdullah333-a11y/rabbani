// ============================================
// AUTH GUARD - Redirect to login if not logged in
// ============================================
(function () {
    // Pages that don't need login (avoid redirect loop)
    const currentPage = window.location.pathname.split('/').pop().toLowerCase();
    const publicPages = ['login.html', 'register.html'];

    // If on a public page, don't check auth
    if (publicPages.includes(currentPage)) return;

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('rabbani_logged_in');

    if (!isLoggedIn) {
        // Redirect to login page
        window.location.href = 'login.html';
    }
})();

// Logout function (can be called from any page)
function logoutUser() {
    localStorage.removeItem('rabbani_logged_in');
    localStorage.removeItem('rabbani_user_email');
    window.location.href = 'login.html';
}
