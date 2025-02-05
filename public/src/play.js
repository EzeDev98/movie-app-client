document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('videoId');
    
    if (videoId) {
        const iframe = document.getElementById('videoIframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else {
        window.location.href = '/pages/search.html';
    }
});
