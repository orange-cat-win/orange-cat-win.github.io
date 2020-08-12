const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: 'unravel ',
        artist: 'TK from 凛として時雨',
        url: 'http://music.163.com/song/media/outer/url?id=537012213.mp3',
      },
      {
        name: "Ref:rain",
        artist: 'Aimer',
        url: 'http://music.163.com/song/media/outer/url?id=536623501.mp3',
      },
      {
        name: 'ninelie',
        artist: 'Aimer / EGOIST',
        url: 'http://music.163.com/song/media/outer/url?id=409872504.mp3',
        cover: '/images/zjsam.jpg',
      },
    
    ]
});