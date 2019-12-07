# seamless

> A Vue.js project

## Build Setup

``` 

npm i yfzw-vue-seamless

import seamless from 'yfzw-vue-seamless'
Vue.used(seamless)


<v-seamless :listData="listData" :option="option" class="seamless">
    <template slot-scope="props" >
        <div class="li">{{props.index}}-{{props.item.nickname}}消费${{props.item.order_amount}},收益+${{props.item.customer_income}}</div>
    </template>
</v-seamless>

computed: {
      option(){
          return {
              direction:2,  //方向   必填 1从下往上 ， 2从右往左
              speed:0.5     //速率  默认0.5
          }
      }
  },
```