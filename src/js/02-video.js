import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('play', function (evt) {
  console.log('played the video!', evt.seconds);
  localStorage.setItem('TimePlayed', JSON.stringify(evt.seconds));
});

// player.off('play', function (evt) {
//   console.log('stop');
// });

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
