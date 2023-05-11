let search = document.querySelector('.search')
const table = document.querySelector('.table')


let fetchData = () => {
  let url = 'http://localhost:3000/posts';

      fetch(url).then((resp) => resp.json()).then((data) => {
        // console.log(data)
        search.addEventListener('input', () => {
          // search.value = e.target.value
          // console.log(search.value)
          
      table.innerHTML = `${data.filter((item) => {
          return search.value.toLowerCase() === '' ? item
                        : item.bank.toLowerCase().includes(search.value) || item.account.toLowerCase().includes(search.value);
      })
          .map((item) => {
          return `<tr ${key=item.id} style="line-height: 20px;">
          <td>${item.account}</td>
          <td style="max-width: 100px;"><a href="/transactions.html" style="font-size: 12px;color: BLUE;">${item.bank}</a></td>
          <td>${item.country}</td>
          <td>${item.city}</td>
      </tr>`
      })
      }`;
      })
      
      table.innerHTML = `${data.map((item) => {
          return `<tr ${key=item.id} style="line-height: 20px;">
          <td>${item.account}</td>
          <td style="max-width: 300px;"><a href="/transactions.html" style="font-size: 12px;color: BLUE;">${item.bank}</a></td>
          <td>${item.country}</td>
          <td>${item.city}</td>
      </tr>`
      })}`;
      })
}


window.addEventListener("load", fetchData)