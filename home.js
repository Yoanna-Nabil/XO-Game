/*let turn = 'x';
let ele = document.querySelectorAll(".square");
ele.addEventListner('click', function(){
   if(turn === 'x' && ele.innerHTML ==''){
      ele.innerHTML = 'x';
   }
})*/



let tittle = document.querySelector('.title');
let turn = 'x';
let squ = [];
function end(num1, num2, num3){
   tittle.innerHTML = `${squ[num1]} winner`;
   document.getElementById("item"+num1).style.background = 'black';
   document.getElementById("item"+num2).style.background = 'black';
   document.getElementById("item"+num3).style.background = 'black';
   
   setInterval(function(){tittle.innerHTML +='.'}, 1000);
   setTimeout(function(){location.reload()}, 4000);
}
function winner(){
 for(let i = 1; i<10; i++){
  squ[i] = document.getElementById('item'+i).innerHTML;
 }
 if(squ[1] == squ[2] && squ[2] == squ[3] && squ[1] != ''){
   end(1,2,3);
 }
 else if(squ[4] == squ[5] && squ[5] == squ[6] && squ[5] != ''){
   end(4,5,6);
 }
 else if(squ[7] == squ[8] && squ[8] == squ[9] && squ[8] != ''){
   end(7,8,9);
 }



 else if(squ[1] == squ[4] && squ[4] == squ[7] && squ[1] != ''){
    end(1,4,7);
 }
 else if(squ[2] == squ[5] && squ[5] == squ[8] && squ[5] != ''){
    end(2,5,8);
 }
 else if(squ[3] == squ[6] && squ[6] == squ[9] && squ[6] != ''){
    end(3,6,9);
 }


 else if(squ[1] == squ[5] && squ[5] == squ[9] && squ[5] != ''){
    end(1,5,9);
 }
 else if(squ[3] == squ[5] && squ[5] == squ[7] && squ[5] != ''){
    end(3,5,7);
 }
}
let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (turn === 'x' && square.innerHTML === '') {
                square.innerHTML = 'X';
                turn = 'o';
                tittle.innerHTML = 'o';
            }
            else if(turn === 'o' && square.innerHTML == ''){
               square.innerHTML = 'o';
               turn = 'x';
               tittle.innerHTML = 'x';
            }
            winner();
        });
    });