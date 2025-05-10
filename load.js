document.addEventListener('DOMContentLoaded', () => {
    // 取得 Loading 過場元素
    const loadingOverlay = document.getElementById('loadingOverlay');

    // 選取頁面上所有 <a> (也可用 'a[href]' 選取有 href 屬性的)
    const links = document.querySelectorAll('a');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        // 1. 取消超連結預設行為
        e.preventDefault();

        // 2. 顯示 Loading 過場 (並自動播放影片)
        loadingOverlay.classList.add('show');

        // 如果想自動播放影片，可以加下列:
        // 取得影片元素並手動調用 play():
        const video = loadingOverlay.querySelector('video');
        video.currentTime = 0;  // 從頭開始播放
        video.play();           // 播放影片

        // 3. 等 0.8 秒後跳轉 (你可視情況更改時間或改用其他事件 e.g. 影片結束時才跳)
        setTimeout(() => {
          window.location.href = link.href;
        }, 4000);
      });
    });
  });