/**
 * Created with JetBrains WebStorm
 * FileName: music.js
 * Author: lizm
 * Date: 2019/6/4
 * Time: 12:21
 * Description:
 **/


var musicTag = document.getElementById('music-tag');
if (musicTag) {
    var frame = document.createElement('iframe');
    musicTag.parentNode.insertBefore(frame, musicTag);
    frame.frameBorder = 0;
    frame.width = '100%';
    frame.height = 100;
    frame.style.marginBottom = '20px';
    frame.style.display = 'none';
    var musicInfo = musicTag.value.split(',');
    frame.src = '/assets/music/' + musicInfo[0];
    frame.onload = function () {
        var css = frame.contentWindow.document.createElement('link');
        css.rel = 'stylesheet';
        css.href = '/assets/css/music.css';
        var head = frame.contentWindow.document.getElementsByTagName('head')[0];
        head.appendChild(css);
        var video = frame.contentWindow.document.getElementsByTagName('video')[0];
        video.loop = true;
        var span = document.createElement('span');
        span.innerText = '♬：' + (musicInfo[1] || '未知');
        span.style.marginLeft = '20px';
        video.parentNode.insertBefore(span, video);
        frame.style.display = 'block';
    };
}
