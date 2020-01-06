<template>
    <div id="footer">
        <div class="box-container">
            <div class="row ju-b">
                <div class="flex-1">ssaasd</div>
                <div class="">
                    <div>更多方式关注</div>
                    <div class="mr20 pull-left">
                        <img src="../assets/images/wx-qrcood.png" alt="" class="wx-cood-img">
                        <div class="f14 text-center">关注微信公众号</div>
                    </div>
                    <div class="pull-left">
                        <img src="../assets/images/wx-smallRoutine.png" alt="" class="wx-smallRoutine-img">
                        <div class="f14 text-center">微信扫一扫</div>
                    </div>
                </div>

            </div>
            <div class="footer-copyright ">
                <a href="javascript:void(0);">版权所有 © 2004-2019 美食天下 保留所有权利 - 京公网安备 11010502031041号 / 京ICP证090244号 / 京ICP备10020153号</a>
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
    created () {},
    methods: {}
}
</script>

<style lang="scss">
/* 公共底部 */
#footer {
    // width: 100%;
    min-width: 1024px;
    
    .wx-cood-img,
    .wx-smallRoutine-img {
            width: 100px;
            height: 100px;
    }
    .footer-copyright {
        height: 48px;
        line-height: 48px;
        background: rgba(50, 50, 50, 1);
        text-align: center;
        a{
            font-size:14px;
            font-family:PingFangSC-Light;
            font-weight:300;
            color:rgba(154,154,154,1);
        }
    }
}
</style>
