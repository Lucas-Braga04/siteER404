document.getElementById('downloadPitch').addEventListener('click', function(){
    let video = document.getElementById('video');
    let source = document.getElementsByTagName('source',[0]);
    let vieoURL = source.getAttribute('src');
    
    let a = document.createElement('a')
    a.href = videoURL;
    a.download = 'video.mp4';
    a.click();
})