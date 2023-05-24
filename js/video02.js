$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'u675N-Z2ECo',
        containment: '#main_visual',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,

    });

    $('#bgm1').YTPlayer({
        videoURL: 'https://youtu.be/-mkuPvg45Ug',
        containment: 'self',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,

    });

    $('#bgm2').YTPlayer({
        videoURL: 'https://youtu.be/-mkuPvg45Ug',
        containment: 'self',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });


    $('#bgm3').YTPlayer({
        videoURL: 'https://youtu.be/-mkuPvg45Ug',
        containment: 'self',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });



    $('#main_visual .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    })
    $('#main_visual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    })
})