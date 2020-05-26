var form=document.querySelector('form')
var input=document.querySelector('#dnr_bld_grp')
var input1=document.querySelector('#dnr_taluk')
var table=document.querySelector('.limiter')
var scrollDown = document.querySelector('.Scroll-down')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    table.innerHTML = ""
    scrollDown.classList.add("result-text")
    scrollDown.innerHTML = "<h2>SCROLL-DOWN</h2>"
    const bld_grp=input.value
    const taluk=input1.value
    fetch('/donors?bld_grp='+ encodeURIComponent(bld_grp)+'&taluk='+encodeURIComponent(taluk)).then((res)=>{
        res.json().then((data)=>{
            var thead='<div class="container-table100"><div class="wrap-table100"><div class="table100 ver1 m-b-110"><div class="table100-head"><table><thead><tr class="row100 head"><th class="cell100 column1">Name</th><th class="cell100 column2">Blood Group</th><th class="cell100 column3">Mobile Number</th><th class="cell100 column4">Taluk</th><th class="cell100 column5">Town</th></tr></thead></table></div><div class="table100-body js-pscroll"><table><tbody class="donordata"></tbody></table></div></div>';
            table.insertAdjacentHTML('afterbegin',thead)
            var donordata=document.querySelector('.donordata')
            data.forEach((donor)=>{
                const tdata='<tr class="row100 body"><td class="cell100 column1">'+donor.name+'</td><td class="cell100 column2">'+donor.bld_grp+'</td><td class="cell100 column3">'+donor.mob_num+'</td><td class="cell100 column4">'+donor.taluk+'</td><td class="cell100 column5">'+donor.town +'</td></tr>'
                donordata.insertAdjacentHTML('beforeend',tdata)
            })
        })
    })
})
