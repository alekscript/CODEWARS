function shortcut(str) {
    return str.split('').filter(function(e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
    }).join('')
  }

  console.log(shortcut('how are you'));

  // удалить гласные а е o u i