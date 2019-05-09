// https://www.codewars.com/kata/dubstep/train/javascript

// const songDecoder = song => song.split('WUB').filter(word => word).join(' ');

const songDecoder = (song) => {
  console.log('song => ', song);
  console.log('splited song => ', song.split('WUB'));
  const filter = song.split('WUB').filter(e => e);
  console.log('filter => ', filter);
  console.log('filter + join => ', filter.join(' '));
};

songDecoder('WUBAWUBBWUBCWUB');
