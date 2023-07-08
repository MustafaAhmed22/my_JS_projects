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
let x=[]
let o=[]
let arr =[]
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
         
        x.push(e.target.id)
       // console.log(x)
        if(x.length>=3){
            for(let j=0;j<x.length;j++){
                for(let i=j+1;i<x.length;i++){
                    for(let k=i+1;k<x.length;k++){
                     arr =[x[j],x[i],x[k]].sort((a,b)=>a-b)
                     pingo.push(arr)
                       // console.log(arr)
                       console.log(arr)
                        if (winArr.includes(pingo)) {
                            console.log('x wins')
                        }
                    }
                }
            }
        }
        go ='circle'
    }else{
        o.push(e.target.id)
     //   console.log(o)
        go ='cross'
    }
    e.target.append(displayShape)
    e.target.removeEventListener('click',addGo)
}