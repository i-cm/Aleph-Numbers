player={lastTick:0,
        Numbers:0,
        Infinity:{amount:0, unlocked:0}
}

function show(x) {
  document.getElementById(elementID).style.display='block'
}

function hide(x) {
  document.getElementById(elementID).style.display='none'
}

function number(x) {
  if (x==1/0) {
    return 'Infinity'
  } else if (x===undefined) {
    return '?'
  } else if (x===null) {
    return
  } else {
    return floor(x)
  }
}

function add() {
  player.number+=1
  render()
}

function render() {
  
}
