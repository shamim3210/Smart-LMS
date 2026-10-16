window.LIBRARYMS_IS_LOCAL = ["localhost", "127.0.0.1"].includes(window.location.hostname);
// Use the same local server during development and Render after Netlify deploy.
window.LIBRARYMS_API_BASE = window.LIBRARYMS_IS_LOCAL ? "" : "https://libraryms-backend.onrender.com";
