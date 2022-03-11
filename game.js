player={lastTick:0,
        Numbers:0,
        Infinity:{amount:0,
                  unlocked:false},
        Version:{MajorUpdate:0, // new prestige layer
                 MinorUpdate:0, // new features/subtab within a prestige layer
                 VeryMinorUpdate:0} // bug fixes
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
  if (player.Numbers>=10) {
    player.Infinity.amount+=player.Numbers/10
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

var forv = window.setInterval(function() {
  render()
}, 50)
