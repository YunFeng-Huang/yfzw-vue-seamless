<template>
    <div class="seamless-warp">
        <ul class="item" @mouseover="stop" @mouseout="start" :style="{transform:`${trans}(-${translateValue}px)`}">
            <slot v-for="(item,index) in value"  :item="item" :index="index"></slot>
        </ul>
    </div>
</template>

<script>
    export default {
      name:'v-seamless',
      props:{
        listData:{
          type:Array,
          required:true,
        },
        option:{
          type:Object,
          required:true,
        },
        speed:{
          type:Number,
          default:0.5
        }
      },
        data () {
            return {
                translateValue:0,
                int:null,
                value : [],
                initwidth:0
            }
        },
        computed: {
            trans(){
                if(this.option.direction == 1){
                    return 'translateY'
                }else{
                    return 'translateX'
                }
            },
        },
        methods: {
            stop(){
                clearInterval(this.int)
            },
            start(){
                this.int = setInterval(() => {
                    this.translateValue+=this.speed;
                    if(this.initwidth/2 < Math.abs(this.translateValue)){
                        this.translateValue = 0
                    }
                }, 10);
            }
        },
        mounted() {
            this.value = [...this.listData,...this.listData]
            this.$nextTick(()=>{
                this.start();
                let childNode = document.querySelector(".seamless-warp .item").childNodes;
                if(this.option.direction == 1){
                    for(let i of childNode){
                        let top = getComputedStyle(i,null).marginTop.replace(/px/,'')
                        this.initwidth += (i.offsetHeight+top)
                    }
                }else{
                    document.querySelector(".seamless-warp .item").style.whiteSpace="nowrap";
                    for(let i of childNode){
                        i.style.display ='inline'
                        let right = getComputedStyle(i,null).marginRight.replace(/px/,'')
                        this.initwidth += (i.offsetWidth+Number(right))
                    }
                }
                
            })
        },
       }
</script>
<style lang="scss" scoped>
    .seamless-warp {
        overflow: hidden;
        ul.item {
            margin: 0;
            padding: 0;
        }
    }
</style>
