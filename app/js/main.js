const messageField=document.querySelector('.tasks__field')
const messageCount=document.querySelector('.tasks__rule-info span')
const tasksSendBtn=document.querySelector('.tasks__btn')
const tasksList=document.querySelector('.tasks__list')
const templateListItem=document.querySelector("#list-item").content
const priorityBtn=document.querySelector('.tasks__priority-btn')
let textInfo=document.createElement('p')
textInfo.textContent='Список задач пуст!'
textInfo.classList.add('text-center' ,'font-weight-bold', 'text-light')

if(tasksList.children.length==0){ tasksList.appendChild(textInfo)}
// if(messageField.value.length<=5){
//     tasksSendBtn.setAttribute('disabled','disabled')
// }
let addClosehandler=(closeBtn,element)=>{
    closeBtn.addEventListener('click',()=>{
        element.remove()
        if(tasksList.children.length==0){
            tasksList.appendChild(textInfo)
        }
    })
}

let createElement=()=>{
    let clonedTemplate=templateListItem.cloneNode('true')
    let item=clonedTemplate.querySelector('.tasks__item')
    let listMessage=item.querySelector('.tasks__text')
    let closeMessage=item.querySelector('.close-span')
    listMessage.textContent=messageField.value
    addClosehandler(closeMessage,item)
    tasksList.appendChild(item)
    messageField.value=''
    messageCount.textContent='0'
    if(tasksList.children.length!=0){
        textInfo.remove()
    }
    if(priorityBtn.classList.contains('btn-warning')){
        item.classList.add('bg-warning')
        
    }
    tasksSendBtn.setAttribute('disabled','disabled')
    

}
priorityBtn.addEventListener('click',()=>{
    
    priorityBtn.classList.toggle('btn-warning')
    console.log();
    if(priorityBtn.classList.contains('btn-warning')){
        priorityBtn.textContent="Важная задача"
    }else{
        priorityBtn.textContent='Обычная задача'
    }
    
})
messageField.addEventListener('input',()=>{
    messageCount.textContent=messageField.value.length
    if(messageField.value.length>50||messageField.value.length<=3){
        tasksSendBtn.setAttribute('disabled','disabled')
    }
    if(messageField.value.length>50){
        messageField.style.borderColor='red'
        messageField.style.color='red'
        messageCount.style.color='red'
        
    }else{
        messageField.style.borderColor=''
        messageField.style.color=''
        messageCount.style.color=''
        if(messageField.value.length>3){
            tasksSendBtn.removeAttribute('disabled')
        }
        
    }
})
messageField.addEventListener('keydown',(e)=>{
    
    if(e.key==='Enter'){
        e.preventDefault()
        console.log('press');
        createElement()
    }
})
tasksSendBtn.addEventListener('click',createElement)

// GALLERY code

const bigImgae=document.querySelector('.gallery__big-image img')
const previewsImages=document.querySelectorAll('.gallery__item img')
// console.log(bigImgae,prewiewsImages);
let addСlickHandler=(item)=>{
    item.addEventListener('click',()=>{
        bigImgae.src=item.src 
        for (let i = 0; i < previewsImages.length; i++) {
            previewsImages[i].classList.remove('active')
        }
        item.classList.add('active')
    })
}
for (let i = 0; i < previewsImages.length; i++) {
    addСlickHandler(previewsImages[i])  
}