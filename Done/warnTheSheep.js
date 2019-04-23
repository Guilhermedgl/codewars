function warnTheSheep(queue) {
  let count = 0;
  if (queue.lastIndexOf('wolf') === queue.length -1) return 'Pls go away and stop eating my sheep'
  for (let i = queue.length - 1; i >= 0; i -= 1) {
    if (queue[i] === 'wolf') return `Oi! Sheep number ${count}! You are about to be eaten by a wolf!`
    count += 1;
  }
 }


 console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
 console.log(warnTheSheep(["sheep", "sheep", "wolf"]));