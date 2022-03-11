player={lastTick:0,
        Numbers:0,
        Infinity:{amount:0,
                  unlocked:false
                  Upgrades:{c1:{u1:false,u2:false,u3:false,u4:false},
                            c2:{u1:false,u2:false,u3:false,u4:false},
                            c3:{u1:false,u2:false,u3:false,u4:false},
                            c4:{u1:false,u2:false,u3:false,u4:false},
                            MetaUpgrades:{u1:false,u2:false,u3:false,u4:false}}},
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
  document.getElementById('infgain').textContent=player.Numbers/10
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

function buyUpgrade(c, u, cost) {
  if (player.Infinity.amount>=cost) {
    player.Infinity.amount-=cost
    if (c==1) {
      if (u==1) {
        if (player.Infinity.Upgrades.c1.u1==false) {
          player.Infinity.Upgrades.c1.u1=true
        } else {
          player.Infinity.amount+=cost
        }
      }
      if (u==2) {
        if (player.Infinity.Upgrades.c1.u2==false) {
          player.Infinity.Upgrades.c1.u2=true
        } else {
          player.Infinity.amount+=cost
        }
      }
      if (u==3) {
        if (player.Infinity.Upgrades.c1.u3==false) {
          player.Infinity.Upgrades.c1.u3=true
        } else {
          player.Infinity.amount+=cost
        }
      }
      if (u==4) {
        if (player.Infinity.Upgrades.c1.u4==false) {
          player.Infinity.Upgrades.c1.u4=true
        } else {
          player.Infinity.amount+=cost
        }
      }
    }
    if (c==2) {
      if (u==1) {
        if (player.Infinity.Upgrades.c2.u1==false) {
          player.Infinity.Upgrades.c2.u1=true
        } else {
          player.Infinity.amount+=cost
        }
      }
      if (u==2) {
        if (player.Infinity.Upgrades.c2.u2==false) {
          player.Infinity.Upgrades.c2.u2=true
        } else {
          player.Infinity.amount+=cost
        }
      }
      if (u==3) {
        if (player.Infinity.Upgrades.c2.u3==false) {
          player.Infinity.Upgrades.c2.u3=true
        } else {
          player.Infinity.amount+=cost
        }
      }
      if (u==4) {
        if (player.Infinity.Upgrades.c2.u4==false) {
          player.Infinity.Upgrades.c2.u4=true
        } else {
          player.Infinity.amount+=cost
        }
      }
    }
    if (c==3) {
      if (u==1) {
        if (player.Infinity.Upgrades.c3.u1==false) {
          player.Infinity.Upgrades.c3.u1=true
        } else {
          player.Infinity.amount+=cost
        }
      }
      if (u==2) {
        if (player.Infinity.Upgrades.c3.u2==false) {
          player.Infinity.Upgrades.c3.u2=true
        } else {
          player.Infinity.amount+=cost
        }
      }
      if (u==3) {
        if (player.Infinity.Upgrades.c3.u3==false) {
          player.Infinity.Upgrades.c3.u3=true
        } else {
          player.Infinity.amount+=cost
        }
      }
      if (u==4) {
        if (player.Infinity.Upgrades.c3.u4==false) {
          player.Infinity.Upgrades.c3.u4=true
        } else {
          player.Infinity.amount+=cost
        }
      }
    }
    if (c==4) {
      if (u==1) {
        if (player.Infinity.Upgrades.c4.u1==false) {
          player.Infinity.Upgrades.c4.u1=true
        } else {
          player.Infinity.amount+=cost
        }
      }
      if (u==2) {
        if (player.Infinity.Upgrades.c4.u2==false) {
          player.Infinity.Upgrades.c4.u2=true
        } else {
          player.Infinity.amount+=cost
        }
      }
      if (u==3) {
        if (player.Infinity.Upgrades.c4.u3==false) {
          player.Infinity.Upgrades.c4.u3=true
        } else {
          player.Infinity.amount+=cost
        }
      }
      if (u==4) {
        if (player.Infinity.Upgrades.c4.u4==false) {
          player.Infinity.Upgrades.c4.u4=true
        } else {
          player.Infinity.amount+=cost
        }
      }
    }
    if (c==5) {
      if (u==1) {
        if (player.Infinity.Upgrades.MetaUpgrades.u1==false) {
          player.Infinity.Upgrades.MetaUpgrades.u1=true
        }
      }
      if (u==2) {
        if (player.Infinity.Upgrades.MetaUpgrades.u2==false) {
          player.Infinity.Upgrades.MetaUpgrades.u2=true
        } else {
          player.Infinity.amount+=cost
        }
      }
      if (u==3) {
        if (player.Infinity.Upgrades.MetaUpgrades.u3==false) {
          player.Infinity.Upgrades.MetaUpgrades.u3=true
        }
      }
      if (u==4) {
        if (player.Infinity.Upgrades.MetaUpgrades.u4==false) {
          player.Infinity.Upgrades.MetaUpgrades.u4=true
        }
      }
    player.Infinity.amount+=cost
    }
  }
}
