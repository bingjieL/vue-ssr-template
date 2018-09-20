<template>
    <section class="wrap">
        <span class="testScss">
             {{title}}
        </span>
    </section>
</template>

<script>
export default {
    data(){
         return{
            title:"测试页面数据"
         }
    }
}
</script>

<style lang="scss" scoped>
    .wrap{
        .testScss{
            font-size: 30px;
            color: red;
        }
    }
</style>


