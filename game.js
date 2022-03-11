player={lastTick:0,
        Numbers:0,
        Infinity:{amount:0,unlocked:0},
        Version:{MajorUpdate:0,MinorUpdate:0,VeryMinorUpdate:0}
}

function show(x) {
  document.getElementById(elementID).style.display='block'
}

function hide(x) {
  document.getElementById(elementID).style.display='none'
}

function add() {
  player.Numbers+=1
  render()
}

function render() {
  document.getElementById('num').textContent=player.Numbers
}
