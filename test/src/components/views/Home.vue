<template>
    <div>
        <h3>bootstrap 버전문제로 bootstrapVue 적용 x</h3>
        <h1>Welcome to {{title}}!</h1>
        <h1>Welcome to {{title2}}!</h1>

        <input type="text" v-model="input1">
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>

        <select class="form-control" v-model="region"  @change="changeRegion">
        <!--default : J : jeju-->
            <option :key="i" :value="d.v" v-for="(d, i) in options">{{d.t}}</option>
            <!-- d: data, i : index -->
        </select>
        <!-- v-show : v-if와 비슷하게 화면에 보이는지 결정 
            차이점 : if는 조건 불만족시 아예 렌더링x show는 렌더링은함-->
        <table class="table table-bordered" v-if="tableShow">
            <tr :key="i" v-for="(d, i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
//data control
export default{
    data(){
        return {
            title: "김채록 Vue 연습",
            title2: "Seoul",
            input1: "abcd",
            options: [
                {v:"S", t:"Seoul"},
                {v:"J", t:"Jeju"},
                {v:"B", t:"Busan"}
            ],
            region: "J",
            tableShow: false,
        };
    },
    watch: { //data명을 가지고 function 형식으로 변경
        input1() { //input1 변경시  
            console.log(this.input1) //작업지시
        },
        title(){

        }
    },
    methods: {
        getData(){
            alert(this.input1);
        },
        setData(){
            this.input1="12345";
        },
        changeRegion(){
            alert(this.region)
        }
    },

    beforeCreate(){
            console.log("beforeCreate");
    },
    created(){
        console.log("created"); //db 콜 데이터 가져옴
    },
    beforeMount(){
        console.log("beforeMount");
    },
    mounted(){
        console.log("mounted"); //화면에 출력
    },
    beforeUpdate(){
        console.log("beforeUpdate")
    },
    updated(){
        console.log("updated")
    },
    beforeDestroy(){
        console.log("beforeDestroy");
    },
    destroyed(){
        console.log("destroyed");
    }
}
</script>