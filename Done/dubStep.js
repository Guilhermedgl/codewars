// https://www.codewars.com/kata/dubstep/train/javascript

function songDecoder(song) {
  const newSong = song.split('WUB');
  const noSpace = () => {
    newSong.forEach((item, idx) => {
      if (item === '') {
        newSong.splice(idx, 1);
        return noSpace();
      }
    });
  };
  if (!newSong.includes('')) {
    return newSong.join(' ');
  } noSpace();
  return newSong.join(' ');
}
