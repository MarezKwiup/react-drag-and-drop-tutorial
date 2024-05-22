let knightPosition=[0,0]
let observer=null


function emitChange(){
   observer(knightPosition)
}


export function observe(o) {
   if(observer){
       throw new Error('Multiple Observers')
   }
   observer=o
   emitChange()
}


export function moveKnight(tox,toy){
   knightPosition=[tox,toy];
   emitChange()
}


export function canMoveKnight(tox,toy){
   const [x,y]=knightPosition
   const dx=tox-x;
   const dy=toy-y;
   return (
       (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
       (Math.abs(dx) === 1 && Math.abs(dy) === 2)
   )
}
