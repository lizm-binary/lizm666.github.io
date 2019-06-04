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
    frame.height = 80;
    //frame.style.marginTop = '-19px';
    frame.style.marginBottom = '10px';
    frame.style.display = 'none';
    frame.src = '/assets/music/' + musicTag.value;
    frame.onload = function () {
        var css = frame.contentWindow.document.createElement('link');
        css.rel = 'stylesheet';
        css.href = '/assets/css/music.css';
        var head = frame.contentWindow.document.getElementsByTagName('head')[0];
        head.appendChild(css);
        frame.contentWindow.document.getElementsByTagName('video')[0].loop = true;
        frame.style.display = 'block';
    };
}
