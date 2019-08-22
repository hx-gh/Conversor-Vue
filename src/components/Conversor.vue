<template>
    <div class="conversor">
        <h1></h1>
        <div class="card">
            <div class="card-body">     
                <h2>{{moedaA}} to {{moedaB}} </h2>
                <input type="text" v-model="moedaA_value" v-bind:placeholder="moedaA">
                <input type="button" class="btn btn-success mt-1" value="Converter" v-on:click="converter">
                <h2 class="mt-2">{{moedaB_value}}</h2>
            </div> 
        </div>
    </div>
</template>
<script>
export default {
  name: 'Conversor',
  props: ["moedaA","moedaB"],
    data(){
        return {
            moedaA_value: "",
            moedaB_value: 0
        }
    },
    methods: {
        converter(){
            let de_para = this.moedaA + "_" + this.moedaB;
            let url = "https://free.currconv.com/api/v7/convert?q="+de_para+"&compact=ultra&apiKey=2c0644844cd555858ba0";
        fetch(url).then(res => { 
            return res.json(); 
            
            }).then(json =>{
            let cotacao = Object.values(json);
            this.moedaB_value = (cotacao * parseFloat(this.moedaA_value)).toFixed(2)
            })
        }
    }
}
</script>

<style scoped>
.conversor{
    padding: 10px;
    max-width: 300px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    display: inline-block;
    margin: 10px;
    
} 
</style>
