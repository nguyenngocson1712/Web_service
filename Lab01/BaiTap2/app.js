document.addEventListener("DOMContentLoaded", function () {
    // Đường dẫn RSS cụ thể mà bạn muốn hiển thị tin tức
    const rssUrl = 'https://vnexpress.net/rss/giao-duc.rss';

    const newsContainer = document.getElementById('news-container');

    function fetchNews() {
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`)
            .then(response => response.json())
            .then(data => displayNews(data.contents))
            .catch(error => console.error('Error fetching news:', error));
    }

    function displayNews(xmlData) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
        const items = xmlDoc.getElementsByTagName('item');

        // Hiển thị tất cả tin tức, có thể sử dụng số lượng như trong ví dụ trước
        for (let i = 0; i < items.length; i++) {
            const title = items[i].getElementsByTagName('title')[0].textContent;
            const link = items[i].getElementsByTagName('link')[0].textContent;

            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');

            const newsTitle = document.createElement('a');
            newsTitle.href = link;
            newsTitle.target = '_blank';
            newsTitle.classList.add('news-title');
            newsTitle.textContent = title;

            newsItem.appendChild(newsTitle);
            newsContainer.appendChild(newsItem);
        }
    }

    // Fetch news for the specified RSS feed
    fetchNews();
});
