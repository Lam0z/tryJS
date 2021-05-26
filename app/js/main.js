// const messageField=document.querySelector('.tasks__field')
// const messageCount=document.querySelector('.tasks__rule-info span')
// const tasksSendBtn=document.querySelector('.tasks__btn')
// const tasksList=document.querySelector('.tasks__list')
// const templateListItem=document.querySelector("#list-item").content
// const priorityBtn=document.querySelector('.tasks__priority-btn')
// let textInfo=document.createL('p')
// textInfo.textContent='Список задач пуст!'
// textInfo.classList.add('text-center' ,'font-weight-bold', 'text-light')

// if(tasksList.children.length==0){ tasksList.appendChild(textInfo)}
// // if(messageField.value.length<=5){
// //     tasksSendBtn.setAttribute('disabled','disabled')
// // }
// let addClosehandler=(closeBtn,L)=>{
//     closeBtn.addEventListener('click',()=>{
//         L.remove()
//         if(tasksList.children.length==0){
//             tasksList.appendChild(textInfo)
//         }
//     })
// }

// let createL=()=>{
//     let clonedTemplate=templateListItem.cloneNode('true')
//     let item=clonedTemplate.querySelector('.tasks__item')
//     let listMessage=item.querySelector('.tasks__text')
//     let closeMessage=item.querySelector('.close-span')
//     listMessage.textContent=messageField.value
//     addClosehandler(closeMessage,item)
//     tasksList.appendChild(item)
//     messageField.value=''
//     messageCount.textContent='0'
//     if(tasksList.children.length!=0){
//         textInfo.remove()
//     }
//     if(priorityBtn.classList.contains('btn-warning')){
//         item.classList.add('bg-warning')
        
//     }
//     tasksSendBtn.setAttribute('disabled','disabled')
    

// }
// priorityBtn.addEventListener('click',()=>{
    
//     priorityBtn.classList.toggle('btn-warning')
//     console.log();
//     if(priorityBtn.classList.contains('btn-warning')){
//         priorityBtn.textContent="Важная задача"
//     }else{
//         priorityBtn.textContent='Обычная задача'
//     }
    
// })
// messageField.addEventListener('input',()=>{
//     messageCount.textContent=messageField.value.length
//     if(messageField.value.length>50||messageField.value.length<=3){
//         tasksSendBtn.setAttribute('disabled','disabled')
//     }
//     if(messageField.value.length>50){
//         messageField.style.borderColor='red'
//         messageField.style.color='red'
//         messageCount.style.color='red'
        
//     }else{
//         messageField.style.borderColor=''
//         messageField.style.color=''
//         messageCount.style.color=''
//         if(messageField.value.length>3){
//             tasksSendBtn.removeAttribute('disabled')
//         }
        
//     }
// })
// messageField.addEventListener('keydown',(e)=>{
    
//     if(e.key==='Enter'){
//         e.preventDefault()
//         console.log('press');
//         createL()
//     }
// })
// tasksSendBtn.addEventListener('click',createL)

// // GALLERY code

// const bigImgae=document.querySelector('.gallery__big-image img')
// const previewsImages=document.querySelectorAll('.gallery__item img')
// // console.log(bigImgae,prewiewsImages);
// let addСlickHandler=(item)=>{
//     item.addEventListener('click',()=>{
//         bigImgae.src=item.src 
//         for (let i = 0; i < previewsImages.length; i++) {
//             previewsImages[i].classList.remove('active')
//         }
//         item.classList.add('active')
//     })
// }
// for (let i = 0; i < previewsImages.length; i++) {
//     addСlickHandler(previewsImages[i])  
// }

// const sliderBtns=document.querySelectorAll('.slider__btn')
// const slider=document.querySelector('.slider__container')
// const wrapper=document.querySelector('.slider')
// const sliderItem=document.querySelectorAll('.slider__item')
// const slidesToShow=3



// for(let item of sliderItem){
//     item.style.minWidth=wrapper.offsetWidth/slidesToShow+'px'

// }

// console.log(sliderItem[1].offsetWidth);
// let pixels=0
// sliderBtns[0].disabled=true
// for(let btn of sliderBtns){
//     btn.addEventListener('click',(e)=>{
        

//         if(e.target.classList.contains('next')){
//             slider.style.transform+=`translateX(-${sliderItem[0].offsetWidth}px)`
//             pixels+=sliderItem[0].offsetWidth
//             if(pixels>0){

//                 sliderBtns[0].disabled=false
//             }
//             if(pixels===600){
//                 sliderBtns[1].disabled=true

//             }
            
//         }

//         if(e.target.classList.contains('prev')){
            
//             slider.style.transform+=`translateX(${sliderItem[0].offsetWidth}px)`
//             pixels-=sliderItem[0].offsetWidth
//             if(pixels==0){
//                 sliderBtns[0].disabled=true
//             }
//             if(pixels<=600){
//                 sliderBtns[1].disabled=false
//             }
//         }
//     })
// }

// const sliderLinks=document.querySelectorAll('.simple-slider__link')
// const slides=document.querySelectorAll('.simple-slider__slide')
// for (const i of slides) {
//     i.classList.add('hidden')
// }

// let linkOver=(link,slide)=>{
//     link.addEventListener('mouseover',(event)=>{
//         for (let index = 0; index < slides.length; index++) {
//             slides[index].classList.remove('active')
//             slides[index].classList.add('hidden')
//             sliderLinks[index].classList.remove('active-link')
            
            
//         }
        
//         link.classList.add('active-link')
//         slide.classList.add('active')
        
// }
//     )}
// for(let i =0;i<sliderLinks.length;i++){
//     linkOver(sliderLinks[i],slides[i])
//     // linkOut(sliderLinks[i],slides[i])

// }

const accordeonLinks=document.querySelectorAll('.accordeon__link')
const accordeonText=document.querySelectorAll('.accordeon__text')


// for (let i=0;i<accordeonLinks.length;i++){
//     // console.log(accordeonLinks[i]);
    
// }
let showText=(link,text)=>{
    link.addEventListener('click',(event)=>{
        // console.log(text.dataset.accordionIndexText);

        if(event.target.dataset.accordionIndexLink===text.dataset.accordionIndexText){
            text.classList.toggle('accordeon-show-text')
            link.classList.toggle('accordeon-link-active')
        }
    })
}
for (let i = 0; i < accordeonLinks.length; i++) {
    accordeonLinks[i].dataset.accordionIndexLink=i
    accordeonText[i].dataset.accordionIndexText=i
    showText(accordeonLinks[i],accordeonText[i])
}