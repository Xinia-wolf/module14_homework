function returnUrl() {
  const formItem = document.querySelector(".form__item");
  const data = new FormData(formItem);
  const value1 = data.get("page");
  const value2 = data.get("limit");
  if (+value1 >= 1 && +value1 <= 10 && +value2 >= 1 && +value2 <= 10) {
    let params = new URLSearchParams();
    params.set("page", value1);
    params.set("limit", value2);
    let currentUrl = `https://picsum.photos/v2/list?`;
    let returnedUrl = currentUrl + params;
    return returnedUrl;
  } else if ((+value1 < 1 || +value1 > 10 || isFinite(value1)===false) && (+value2 >= 1 && +value2 <= 10)) {
    alert( 'Номер страницы вне диапазона от 1 до 10' );
  } else if ((+value1 >= 1 && +value1 <= 10) && (+value2 < 1 || +value2 > 10 || isFinite(value2)===false)) {
    alert( 'Лимит вне диапазона от 1 до 10');
  } else {
    alert( 'Номер страницы и лимит вне диапазона от 1 до 10' );
  }
};

 // Ищем ноду для вставки результата запроса
 const resultNode = document.querySelector('.j-result');
 // Ищем кнопку, по нажатии на которую будет запрос
 const btnNode = document.querySelector('.j-btn-request');

 // Функция, которая возвращает fetch
const useRequest = () => {
return fetch(returnUrl())
.then((response) => {
  console.log('response', response);
  const result = response.json();
  console.log('result', result);
  return result;
})
.catch(() => { console.log('error') });
}

function displayResult(requestResult) {
  let cards = '';
    
    requestResult.forEach(item => {
      const cardBlock = `
      <div class="card">
      <img
      src="${item.download_url}" class="card-image"/>
  </div>
  `;
  cards = cards + cardBlock;
    });
  
    resultNode.innerHTML = cards;
  }

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', async() => {
    const requestResult = await useRequest();
    displayResult(requestResult);
    let requsJ = JSON.stringify(requestResult);
    localStorage.setItem('myJSON',requsJ);
});

document.addEventListener("DOMContentLoaded", async () => {

	let myJSON = localStorage.getItem('myJSON');
	let obiJ = JSON.parse(myJSON);
	
	console.log(obiJ);
	let cards = '';
		obiJ.forEach(item => {
			const cardBlock = `
      <div class="card">
      <img
      src="${item.download_url}" class="card-image"/>
  </div>
  `;
  cards = cards + cardBlock;
    });
  
    resultNode.innerHTML = cards;
  });