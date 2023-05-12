let steps = document.querySelector(".steps");
let infos = document.querySelector(".tracker-infos");

//function to fetch data from api

let fetchData = () => {
    let url = 'http://localhost:3000/posts';

        fetch(url).then((resp) => resp.json()).then((data) => {
                    infos.innerHTML = `
                <div class="row">
                    <div class="col-md-6 col-xl-3 mb-4">
                        <div class="card text-white bg-success shadow border-start-primary py-2" style="padding: 0 10px;"><small>Final Status <span style="float: right;">${data.value_date}</span></small>
                            <div class="card-body">
                                <div class="row align-items-center no-gutters">
                                    <div class="col-auto"><i class="fas fa-check fa-2x text-gray-300"></i></div>
                                    <div class="col"><strong>${data.latest_status}</strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3 mb-4">
                        <div class="card text-white bg-dark">
                            <div class="card-body">
                                <h4 class="card-title"><strong>54 180.8 EUR</strong></h4>
                                <p class="card-text">Instructed: 54 200 EUR
                                  <label style="float:right; font-weight:bold">SHAR</label>
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-2 mb-4">
                        <div class="card text-white bg-dark shadow border-start-primary py-2"><small>Total duration</small>
                            <div class="card-body">
                                <div class="row align-items-center no-gutters">
                                    <div class="col-auto"><i class="far fa-clock fa-2x text-gray-300" style="font-size: 22px;"></i>
                                      <label class="col"><strong class="fs-6">${data.elapsed_time}</strong></label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3 mb-4">
                        <div class="card text-white bg-dark shadow border-start-primary py-2"><small>Tracking number</small>
                            <div class="card-body">
                                <div class="row align-items-center no-gutters">
                                    <div class="col"><strong>${data.uetr}</strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row bg-white border-1" style="border:1px solid lightgray;  color: grey !important;">
                    <marquee class="col">${data.status_description}</marquee>
                </div>
                    `

                const senderData = data.sender_data;
                const intermediaryData = data.intermediary_data
                const receiveryData = data.receiver_data;


                    steps.innerHTML = `
                <div class="col-md-auto col-xl-auto mb-auto tracker-grid step" icon="fa fa-checkmark" >
                <div class="circle"><i class="fas fa-check" title="Completed"></i></div>
                <div class="card text-white bg-white shadow border-start-primary tracker-card">
                  <div class="card-header bg-dark" style="color:white"><label class="bank-title ">
                    <i class="fa fa-building"></i>
                    &nbsp;${senderData.event_data.bank_name}</label></div>
                  <div class="card-body bg-white">
                     <div class="card-body-item-lg card-body-item-bottom">
                       <p style="float: left; font-size: 12px; font-weight: bold; color:black"><i class="fa fa-globe"></i>  ${senderData.event_data.bic}</p>
                       <p style="float: right; font-size:10px; color: black; max-width: 100px; overflow: hidden !important; white-space: nowrap; text-overflow: ellipsis;">${senderData.event_data.bank_name}</p>
                       <div class="row col-12" style="color:black">
                          <i class="col-1 fa fa-map-marker"></i>
                           <label class="col-11">
                             ${senderData.event_data.city},</br>
                             Paris,</br>
                             ${senderData.event_data.country}
                           </label>
                       </div>
                     </div>
                    <div class="card-body-item-lg card-body-item-bottom" style="padding: 15px; text-align: center">
                      <p><i class="fa fa-arrow-right"></i> <i class="fa fa-clock"></i></p>
                        <p>
                          <span>
                            ${senderData.event_data.last_update_time}
                          </span>
                        </p>
                    </div>
                    <div class="card-body-item card-body-item-bottom  row col-12">
                      <p class="col-4">
                        <label style=" font-size: 14px"><i class="fa fa-money-bill"></i> <i class="fa fa-arrow-right"></i>  </label>
                      </p>
                      <p class="col-8" style="display: block">
                        <label style="font-weight: bold; font-size: 14px">54 178 EUR</label>
                      </p>
                    </div>
                    <div class="card-body-item card-body-item-bottom  row col-12">
                      <p class="col-4">
                        <label style=" font-size: 14px"><i class="fa fa-money-bill"></i> <i class="fa fa-arrow-down"></i>  </label>
                      </p>
                      <p class="col-8" style="display: block">
                        <label style="font-weight: bold; font-size: 14px; "> 22 EUR</label>
                      </p>
                    </div>
                    <div class="card-body-item p-4" style="text-align: center";>
                       <b >${senderData.event_data.instruction_identification}</b>
                    </div>
                  </div>
                </div>
              </div>

                <div class="col-md-auto col-xl-auto mb-auto tracker-grid step" icon="fa fa-checkmark" >
                <div class="circle"><i class="fas fa-check" title="Completed"></i></div>

                <div class="card text-white bg-white shadow border-start-primary tracker-card">
                  <div class="card-header bg-dark" style="color:white"><label class="bank-title ">
                    <i class="fa fa-building"></i>
                    &nbsp;${intermediaryData[0].event_data.bank_name}</label></div>
                  <div class="card-body bg-white">
                     <div class="card-body-item-lg card-body-item-bottom">
                       <p style="float: left; font-size: 12px; font-weight: bold; color:black"><i class="fa fa-globe"></i>  ${intermediaryData[0].event_data.bic}</p>
                       <p style="float: right; font-size:10px; color: black; max-width: 120px; overflow: hidden !important; white-space: nowrap; text-overflow: ellipsis;">${intermediaryData[0].event_data.bank_name}</p>
                       <div class="row col-12" style="color:black">
                          <i class="col-1 fa fa-map-marker"></i>
                           <label class="col-11">
                             ${intermediaryData[0].event_data.city},</br>
                             Paris,</br>
                             ${intermediaryData[0].event_data.country}
                           </label>
                       </div>
                     </div>
                    <div class="card-body-item-lg card-body-item-bottom" style="padding: 15px; text-align: center">
                      <p><i class="fa fa-arrow-right"></i> <i class="fa fa-clock"></i></p>
                        <p>
                          <span>
                            ${intermediaryData[0].event_data.last_update_time}
                          </span>
                        </p>
                    </div>
                    <div class="card-body-item card-body-item-bottom  row col-12">
                      <p class="col-4">
                        <label style=" font-size: 14px"><i class="fa fa-money-bill"></i> <i class="fa fa-arrow-right"></i>  </label>
                      </p>
                      <p class="col-8" style="display: block">
                        <label style="font-weight: bold; font-size: 14px">54 178 EUR</label>
                      </p>
                    </div>
                    <div class="card-body-item card-body-item-bottom  row col-12">
                      <p class="col-4">
                        <label style=" font-size: 14px"><i class="fa fa-money-bill"></i> <i class="fa fa-arrow-down"></i>  </label>
                      </p>
                      <p class="col-8" style="display: block">
                        <label style="font-weight: bold; font-size: 14px; "> 22 EUR</label>
                      </p>
                    </div>
                    <div class="card-body-item p-4" style="text-align: center";>
                       <b >${intermediaryData[0].event_data.instruction_identification}</b>
                    </div>
                  </div>
                </div>
              </div>

                <div class="col-md-auto col-xl-auto mb-auto tracker-grid step" icon="fa fa-checkmark" >
                <div class="circle"><i class="fas fa-check" title="Completed"></i></div>
                <div class="card text-white bg-white shadow border-start-primary tracker-card">
                  <div class="card-header bg-dark" style="color:white"><label class="bank-title ">
                    <i class="fa fa-building"></i>
                    &nbsp;${receiveryData.event_data.bank_name}</label></div>
                  <div class="card-body bg-white">
                     <div class="card-body-item-lg card-body-item-bottom">
                       <p style="float: left; font-size: 12px; font-weight: bold; color:black"><i class="fa fa-globe"></i>  ${receiveryData.event_data.bic}</p>
                       <p style="float: right; font-size:10px; color: black; max-width: 120px; overflow: hidden !important; white-space: nowrap; text-overflow: ellipsis;">${receiveryData.event_data.bank_name}</p>
                       <div class="row col-12" style="color:black">
                          <i class="col-1 fa fa-map-marker"></i>
                           <label class="col-11">
                             ${receiveryData.event_data.city},</br>
                             Paris,</br>
                             ${receiveryData.event_data.country}
                           </label>
                       </div>
                     </div>
                    <div class="card-body-item-lg card-body-item-bottom" style="padding: 15px; text-align: center">
                      <p><i class="fa fa-arrow-right"></i> <i class="fa fa-clock"></i></p>
                        <p>
                          <span>
                            ${receiveryData.event_data.last_update_time}
                          </span>
                        </p>
                    </div>
                    <div class="card-body-item card-body-item-bottom  row col-12">
                      <p class="col-4">
                        <label style=" font-size: 14px"><i class="fa fa-money-bill"></i> <i class="fa fa-arrow-right"></i>  </label>
                      </p>
                      <p class="col-8" style="display: block">
                        <label style="font-weight: bold; font-size: 14px">54 178 EUR</label>
                      </p>
                    </div>
                    <div class="card-body-item card-body-item-bottom  row col-12">
                      <p class="col-4">
                        <label style=" font-size: 14px"><i class="fa fa-money-bill"></i> <i class="fa fa-arrow-down"></i>  </label>
                      </p>
                      <p class="col-8" style="display: block">
                        <label style="font-weight: bold; font-size: 14px; "> 22 EUR</label>
                      </p>
                    </div>
                    <div class="card-body-item p-4" style="text-align: center;">
                       <b >${receiveryData.event_data.instruction_identification}</b>
                    </div>
                  </div>
                </div>
              </div>
                `;



        })
        .catch(() => {
            result.innerHTML = `<h3 class="msg">Error Occured</h3>`
        })
    }

    fetchData();
//window.addEventListener("load", fetchData)
