//Add click to each cell

const game = () => {
    let marker = "markO";
    const winConArray = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
                         [2,5,8], [1,4,7], [0,4,8], [2,4,6]];

    const cellTacs = document.querySelectorAll('.cell');
    cellTacs.forEach(cell => {
        cell.addEventListener('click', (e)=>{
            if (marker === "markO") {
                cell.classList.add('markX');
                marker = "markX";
            }
            else{
                cell.classList.add('markO');
                marker = "markO";
            }

            if (winConFunction(marker)){
                result(marker);
            }
        }, {once:true});
    });

    const winConFunction = (mark) => {
        return winConArray.some(combos => {
            return combos.every(index => {
                return cellTacs[index].classList.contains(mark)
            });
        });
    };

    const result = (player)=> {
        const div = document.createElement('div');
        div.classList.add('result');
        if (player === "markX"){
            div.textContent = 'Player X Wins'
        }
        else{
            div.textContent = 'Player O Wins!'
        }
        const button = document.createElement('button');
        button.textContent = "Clear"
        button.classList.add('result');
        button.addEventListener('click', () => {
            clean(div, button);
        })
        document.querySelector('body').appendChild(div);
        document.querySelector('body').appendChild(button);

    }

    const clean = (el1, el2) =>{
        document.querySelector('body').removeChild(el1)
        document.querySelector('body').removeChild(el2)
        cellTacs.forEach(cell => {
            cell.classList.remove("markX", "markO");
        }) 
    }
}
const start = game();



