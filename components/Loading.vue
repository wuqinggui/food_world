<template>
    <div class="showLoading">
        <!-- 第一种动效 -->
        <!-- <div class="wrap center">
            <img class="wrap-logo" src="../assets/images/load-logo.png">
            <div class="img1 move1"></div>
            <div class="img2 move2"></div>
            <div class="img3 move3"></div>
        </div> -->
        <!-- 第二种动效 -->
        <div class="loader">
            <div class="loading-2">
                <i></i>
                <i></i>
                <i></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {

        }
    },
    mounted () {

    },
    created () {

    },
    methods: {

    }
}
</script>

<style lang="scss">
   // 加载动效
.showLoading{
    position:fixed;
    top:0;
    left:0;
    z-index:10000;
    background-color: #fcfcfc;
    // -webkit-transition-duration: .2s; 
    height: 100%;
    width: 100%;
    // -moz-transition:background-color 1s;
    // -moz-transition-timing-function:ease-in-out;
    //  第一种动效      
    // .wrap {
    //     width: 40%;
    //     height: 40%;
    //     .wrap-logo{
    //         position: absolute;
    //         top: 50%;
    //         left: 50%;
    //         transform: translate(-50%, -50%);
    //     }
    // }
   
    // .center {
    //     position: absolute;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    // }
    
    // .img1 {
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    //     background: url(../images/img1.png) no-repeat center center;
    // }
    
    // .img2 {
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    //     background: url(../images/img2.png) no-repeat center center;
    // }
    
    // .img3 {
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    //     background: url(../images/img3.png) no-repeat center center;
    // }
    
    // .move1 {
    //     animation: myMove1 5s ease-in infinite alternate;
    //     -webkit-animation: myMove1 5s ease-in infinite alternate;
    // }
    
    // .move2 {
    //     animation: myMove2 3s ease infinite alternate;
    //     -webkit-animation: myMove1 3s ease infinite alternate;
    // }
    
    // .move3 {
    //     animation: myMove3 2s ease-in infinite alternate;
    //     -webkit-animation: myMove1 2s ease-in infinite alternate;
    // }
    
    // @keyframes myMove1 {
    //     from {transform: rotate(0deg);}
    //     to {transform: rotate(360deg);}
    // }
    
    // @-webkit-keyframes myMove1 {
    //     from {transform: rotate(0deg);}
    //     to {transform: rotate(360deg);}
    // }
    // @keyframes myMove2 {
    //     from {transform: rotate(0deg);}
    //     to {transform: rotate(360deg);}
    // }
    
    // @-webkit-keyframes myMove2 {
    //     from {transform: rotate(0deg);}
    //     to {transform: rotate(360deg);}
    // }
    // @keyframes myMove3 {
    //     from {transform: rotate(0deg);}
    //     to {transform: rotate(360deg);}
    // }
    
    // @-webkit-keyframes myMove3 {
    //     from {transform: rotate(0deg);}
    //     to {transform: rotate(360deg);}
    // }
    // 第一种动效结束




    // 第二种动效开始
    .box{
        width: 100%;
        padding: 3%;
        box-sizing: border-box;
        overflow: hidden;
    }
    .loader{
        width: 30%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        float: left;
        margin-left: 3%;
        height: 200px;
        display: flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
    }
    @keyframes loading-2{
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(0.4);
        }
        100%{
            transform: scale(1);
        }
    }
    .loading-2 i{
        display: inline-block;
        width: 4px;
        height: 35px;
        margin: 0 2px;
        background: #595959;
        border-radius: 2px;
        animation: loading-2 1s ease-in 0.1s infinite;
    }
    .loading-2 i:nth-child(1){
        animation: loading-2 1s ease-in 0.1s infinite;
    }
    .loading-2 i:nth-child(2){
        animation: loading-2 1s ease-in 0.2s infinite;
    }   
    .loading-2 i:nth-child(3){
        animation: loading-2 1s ease-in 0.3s infinite;
    }   
    .loading-2 i:nth-child(4){
        animation: loading-2 1s ease-in 0.4s infinite;
    }   
    .loading-2 i:nth-child(5){
        animation: loading-2 1s ease-in 0.5s infinite;
    }  
    
    // 第二种动效结束
}
</style>
