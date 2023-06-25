let forms = []
let deletedPositions = []
const formCointainer = document.querySelector('.form-container')
const addBtn = document.querySelector('#add')
let delBtns = document.querySelectorAll(`.delete`)
let currentformName = 0





addBtn.addEventListener('click', () => {
    if(deletedPositions.length === 0) 
    {
        forms.push({
            id: currentformName,
            content: ` <form class="form" >
            <span>form ${currentformName}</span>
            Họ và Tên:<input class="name" type="text"/>
            Địa chỉ:<input  class="adresse" type="text"/>
            Năm sinh:<input class="birth" type="text"/>
            <button class='delete' data-index=${currentformName} type="button">delete</button>
        </form>`
        })

        formCointainer.innerHTML = forms.map((form) => {
            return form.content
        }).join(" ")
        currentformName++
    } 
    else
    {
        const pos = deletedPositions.shift() * 1
        forms.splice(pos, 0, {
            id: pos,
            content:`<form class="form">
            <span>form ${pos}</span>
            Họ và Tên:<input class="name" type="text"/>
            Địa chỉ:<input  class="adresse" type="text"/>
            Năm sinh:<input class="birth" type="text"/>
            <button class='delete' data-index=${pos} type="button">delete</button>
            </form>`       
        })
        
        formCointainer.innerHTML = forms.map((form) => {
            return form.content
        }).join(" ")
    }

})


formCointainer.onclick = (e) => {

    const delBtn = e.target.closest(`.delete`)

    const formIndex = delBtn.dataset.index

    if (delBtn && formIndex) {
        deletedPositions.push(formIndex)
        deletedPositions.sort()
        forms = forms.filter((form) => { return form.id !== formIndex * 1 })
        formCointainer.innerHTML = forms.map((form) => {
            return form.content
        }).join(" ")
    }


}






