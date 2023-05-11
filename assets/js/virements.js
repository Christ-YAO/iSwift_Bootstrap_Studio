// const data = [
//     {
//       id: 1,
//       date: '01-04-2023',
//       uetr: 'e5d0a26-37c0-42bf-916d-7b70ba59713c',
//       type: 'virement',
//       status: 'Completed',
//       bank_emetrice: 'CREDIT AGRICOLE',
//       bank_receptrice: 'CREDIT AGRICOLE',
//     },
//     {
//       id: 2,
//       date: '02-04-2023',
//       uetr: 'c77ebda6-9c80-47e1-baa1-22c4455245d5',
//       type: 'virement',
//       status: 'In progress',
//       bank_emetrice: 'CREDIT AGRICOLE',
//       bank_receptrice: 'CREDIT AGRICOLE',
//     },
//     {
//       id: 3,
//       date: '03-04-2023',
//       uetr: '8a3c03e6-7eba-4646-8259-3fb1cb11c62e',
//       type: 'virement',
//       status: 'Blocked',
//       bank_emetrice: 'ATTIJARIWAFA BANK (FORMERLY BANQUE COMMERCIALE DU MAROC)',
//       bank_receptrice: 'ATTIJARIWAFA BANK (FORMERLY BANQUE COMMERCIALE DU MAROC)',
//     },
//     {
//       id: 4,
//       date: '04-04-2023',
//       uetr: 'b9c917b1-e2ad-4b3f-8a6a-6ddae535517e',
//       type: 'virement',
//       status: 'Rejected',
//       bank_emetrice: 'ATTIJARIWAFA BANK (FORMERLY BANQUE COMMERCIALE DU MAROC)',
//       bank_receptrice: 'ATTIJARIWAFA BANK (FORMERLY BANQUE COMMERCIALE DU MAROC)',
//     },
//     {
//       id: 5,
//       date: '05-04-2023',
//       uetr: '4a79684e-668d-48d0-97f5-ff3e6fe809e2',
//       type: 'virement',
//       status: 'En attente',
//       bank_emetrice: 'DEUTSCHE BANK TRUST COMPANY AMERICAS',
//       bank_receptrice: 'DEUTSCHE BANK TRUST COMPANY AMERICAS',
//     },
// ]

let searchEntrant = document.querySelector('.search-entrant')
let searchSortant = document.querySelector('.search-sortant')
const virementsEntrant = document.querySelector('.virements-entrant')
const virementsSortant = document.querySelector('.virements-sortant')


let fetchData = () => {
  let url = 'http://localhost:3000/posts';

      fetch(url).then((resp) => resp.json()).then((data) => {
        // console.log(data)
        searchEntrant.addEventListener('input', () => {
          // search.value = e.target.value
          // console.log(search.value)
          
      virementsEntrant.innerHTML = `${data.filter((item) => {
          return searchEntrant.value.toLowerCase() === '' ? item
                        : item.uetr.toLowerCase().includes(searchEntrant.value) || item.status.toLowerCase().includes(searchEntrant.value);
      })
          .map((virement) => {
          return `<tr ${key=virement.id}>
          <td>${virement.date}</td>
          <td class="text-dark"><a href="tracker.html">${virement.uetr}</a></td>
          <td class="text-dark">${virement.status}</td>
          <td class="text-dark" style="width: 300px;">${virement.bank_emetrice}</td>
      </tr>`
      })
      }`;
      })
      
      virementsEntrant.innerHTML = `${data.map((virement) => {
          return `<tr ${key=virement.id}>
          <td>${virement.date}</td>
          <td class="text-dark"><a href="tracker.html">${virement.uetr}</a></td>
          <td class="text-dark">${virement.status}</td>
          <td class="text-dark" style="width: 300px;">${virement.bank_emetrice}</td>
      </tr>`
      })}`;
      
      
      
      searchSortant.addEventListener('input', () => {
          // search.value = e.target.value
          // console.log(search.value)
          
      virementsSortant.innerHTML = `${data.filter((item) => {
          return searchSortant.value.toLowerCase() === '' ? item
                        : item.uetr.toLowerCase().includes(searchSortant.value) || item.status.toLowerCase().includes(searchSortant.value);
      })
          .map((virementS) => {
          return `<tr ${key=virementS.id}>
          <td>${virementS.date}</td>
          <td class="text-dark"><a href="#">${virementS.uetr}</a></td>
          <td class="text-dark">${virementS.status}</td>
          <td class="text-dark" style="max-width: 300px;">${virementS.bank_receptrice}</td>
      </tr>`
      })
      }`;
      })
      
      virementsSortant.innerHTML = `${data.map((virementS) => {
          return `<tr ${key=virementS.id}>
          <td>${virementS.date}</td>
          <td class="text-dark"><a href="#">${virementS.uetr}</a></td>
          <td class="text-dark">${virementS.status}</td>
          <td class="text-dark" style="width: 300px;">${virementS.bank_receptrice}</td>
      </tr>`
      })}`;
      })
}


window.addEventListener("load", fetchData)

