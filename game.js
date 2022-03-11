player={lastTick:0,
        Numbers:0,
        Infinity:{amount:0,
                  unlocked:false},
        Version:{MajorUpdate:0,
                 MinorUpdate:0,
                 VeryMinorUpdate:0}
}

function show(x) {
  document.getElementById(x).style.display='block'
}

function hide(x) {
  document.getElementById(x).style.display='none'
}

function add() {
  player.Numbers+=1
  render()
}

function infinity() {
  if (Math.log(player.Numbers)>=1) {
    player.Infinity.amount+=Math.log(player.numbers)
    player.Numbers=0
    player.Infinity.unlocked=true
    render()
  }
}

function render() {
  document.getElementById('num').textContent=player.Numbers
  document.getElementById('inf').textContent=player.Infinity.amount
  if (player.Infinity.unlocked) {
    show('infunlockable')
  } else {
    hide('infunlockable')
  }
}

render()
