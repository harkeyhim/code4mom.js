
    /* this is code for mom js
    * simple library to work wioth dom easily 
    * access your web cam easily code4mom.js
    /created by Ejeh obiabo immanuel/
    created in the year 2020 
    */
   "use strict"

  console.warn('code4mom.js has been linked to your file successfully ')
  console.info('code4mom.js easily let you manipulate dom eaily .....check the docs at https://code4mom-js.netlify.app')
    const el= selector =>{
        this.flow={
            tag:document.querySelector(selector),
            print:(val)=>flow.tag.innerHTML=`${val}`,
            hide:()=>flow.tag.style.display='none',
            block:()=>flow.tag.style.display='block',
            on:(ev,caller)=>flow.tag.addEventListener(ev ,caller),
            color:(col)=>flow.tag.style.color=`${col}`,
            text:(letter)=>flow.tag.textContent=`${letter}`,
            cls:( list )=>flow.tag.classList.add( list ),
            remove:( list )=>flow.tag.classList.remove( list ),
            webCam:()=>{
                if(navigator.mediaDevices.getUserMedia){
                    navigator.mediaDevices.getUserMedia({
                        video:true
                    }).then( stream =>{
                        video=flow.tag
                        video.srcObject=stream
                    }).catch(err => alert('failed'))
                } else {
                    alert(' webcam not supported in your device')
                }
            },
         
            //get input value
            value:(input)=>flow.tag.value ,
            //prevent form action
            prevent(){
                flow.tag.onsubmit=e=>e.preventDefault()
            }
        }
        return flow    
   }

//create element 
const create= theEle =>{
   const node={
    elem:(text)=>{
        let creat=document.createElement(theEle);
    let append=document.createTextNode(text);
      creat.appendChild(append);
      const body=document.querySelector('body');
      body.appendChild(creat)
    }
   }
   return node
    
}
el('form').prevent()

//viberate 
const app=()=>{
  const vib={
    shake(duration){
        navigator.vibrate([duration]);
    }

   }
   return vib;

}

console.log(el('input').value())


  

 
  
