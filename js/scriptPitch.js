document.getElementById('downloadPitch').addEventListener('click', function(){
    let video = document.getElementById('video');
    let source = document.getElementsByTagName('source',[0]);
    let videoURL = source.getAttribute('src');
    let a = document.createElement('a')
    a.href = videoURL;
    a.download = 'https://www.youtube.com/watch?v=KVjBCT2Lc94&list=RDL2QTtdeL3dE&index=27';
    a.click();
})
/*function downloadVideo() {
    let videoUrl = 'https://www.youtube.com/watch?v=KVjBCT2Lc94&list=RDL2QTtdeL3dE&index=27';
    
    let video = document.createElement('video');
    video.src = videoUrl;
    video.controls = true;
    
    let anchor = document.createElement('a');
    anchor.href = videoUrl;
    anchor.target = '_blank';
    anchor.download = '';
    anchor.appendChild(video);
    
    let container = document.getElementById('videoContainer');
    container.innerHTML = '';
    container.appendChild(anchor);
  }
  */
  /*function downloadVideo() {
    let videoUrl = 'https://www.youtube.com/watch?v=KVjBCT2Lc94&list=RDL2QTtdeL3dE&index=27';
    window.open(videoUrl);
  }*/
  