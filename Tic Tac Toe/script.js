let drawArr =['','','','','','','','','']
let board = document.querySelector('.board')

let createBoard = function(){
    drawArr.forEach((cell,index) => {
        console.log(index)
            let cellElement =document.createElement('div')
            cellElement.classList.add('square')
            cellElement.id =index
            cellElement.addEventListener('click', addGo)
            board.append(cellElement)

    });
}
let go ='cross'
let X=[]
let O=[]
let pingo=[]
let winArr =[
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['0','4','8'],
    ['2','4','6']
]
createBoard()
function addGo(e){
    //console.log(e.target.id)
    let displayShape =document.createElement('div')
    displayShape.classList.add(go)
    if(go ==='cross'){
        X.push(e.target.id) 
         if(X.length>=3){
            for(let j=0;j<X.length;j++){
                for(let i=j+1;i<X.length;i++){
                    for(let k=i+1;k<X.length;k++){
                   let  arr =[X[j],X[i],X[k]].sort((a,b)=>a-b)
                     pingo.push(arr)
                      //console.log(pingo)
                        if (winArr.some(win => win.every(cell => arr.includes(String(cell))))) {
                            console.log('X wins')
                           
                            setTimeout(() => {
                                 alert('X Wins')
                               location.reload()
                            }, 500);
                        }
                    }
                }
            }
        } 
        go ='circle'
    }else{
        O.push(e.target.id)
        console.log(O)
        if (O.length >= 3) {
            for (let j = 0; j < O.length; j++) {
                for (let i = j + 1; i < O.length; i++) {
                    for (let k = i + 1; k < O.length; k++) {
                        let arr = [O[j], O[i], O[k]].sort((a, b) => a - b)
                        pingo.push(arr)
                        //console.log(pingo)
                        if (winArr.some(win => win.every(cell => arr.includes(String(cell))))) {
                            console.log('O wins')
                            
                            setTimeout(() => {
                            alert('O Wins')
                            location.reload()
                            }, 500);

                        }
                    }
                }
            }
        }
        go ='cross'
    }
    e.target.append(displayShape)
    e.target.removeEventListener('click',addGo)
    if(X.length+O.length===9){
        setTimeout(() => {
            alert('draw')
            location.reload()
        }, 500);
    }
}