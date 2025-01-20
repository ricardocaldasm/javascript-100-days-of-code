// var test = ["red", "blue", "yellow"];

// test.forEach(function (value, index, array) {
//   console.log(value, index, array);
// });

function logItemsWithInterval(array) {
  let index = 0;

  const intervalId = setInterval(() => {
    if (index < array.length) {
      console.log(array[index]);
      index++;
    } else {
      clearInterval(intervalId); // Para o intervalo quando todos os itens forem exibidos
    }
  }, 1000); // Define o intervalo de 1 segundo (1000 ms)
}

// Exemplo de uso:
const items = ["item1", "item2", "item3", "item4"];
logItemsWithInterval(items);
