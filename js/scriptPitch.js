window.onload = function() {
    let downloadBtn = document.getElementById('downloadBtn');
    let video = document.getElementById('myVideo');
  
    downloadBtn.addEventListener('click', function() {
      let videoUrl = video.getAttribute('src');
      let videoName = getVideoName(videoUrl);
  
      let anchor = document.createElement('a');
      anchor.href = videoUrl;
      anchor.download = videoName;
      anchor.click();
    });
  
    function getVideoName(url) {
      let parts = url.split('/');
      return parts[parts.length - 1];
    }
  };
  