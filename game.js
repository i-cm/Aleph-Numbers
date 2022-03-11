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

function number(x) {
  if (x==1/0 or x==-1/0) {
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
  player.Numbers+=1
  render()
}

function render() {
  document.getElementById('num')=number(player.Numbers)
}

catch(e) {
  alert(e)
}
