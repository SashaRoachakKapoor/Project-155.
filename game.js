AFRAME.registerComponent('game-play',{
    schema:{
        elementId:{type:'string',default:'#coin1'}
    },
    update:function(){
        this.isCollided(this.data.elementId)
    },
    isCollided:function(elementId){
        const element=document.querySelector(elementId)
        element.addEventListener('collide',()=>{
            if(elementId.includes('#treasure')){
                console.log(elementId+'collided')
            }
            else if(elementId.includes('#fish')){
                console.log('fish collision')
            }
        })
    }
})