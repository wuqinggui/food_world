<template>
    <div id="footer">
        <div class="box-container f14 p20">
            <div class="row ju-b">
                <div class="flex-1 verticle-center">
                    <img :src="logoUrl" alt="">
                    <span class="f16 fw ml20">美食天下 - 让吃更美好！</span>
                </div>
                <div class="clearfix">
                    <div class="mb10">更多方式关注</div>
                    <div class="mr20 pull-left">
                        <img :src="qrcoodUrl" alt="" class="wx-cood-img">
                        <div class="text-center mt5">关注微信公众号</div>
                    </div>
                    <div class="pull-left">
                        <img :src="smallRoutineUrl" alt="" class="wx-smallRoutine-img">
                        <div class="text-center mt5">微信扫一扫</div>
                    </div>
                </div>
            </div>
            <div class="direction-center gray6 lh100 f14 p10 mt20">
                <span>版权所有 © 2004-2019 美食天下 保留所有权利 -</span>
                <img :src="copyrightUrl" alt="" class="copyright-icon">
                <span>京公网安备 11010502031041号 / 京ICP证090244号 / 京ICP备10020153号</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            logoUrl:require('@/assets/images/food-world-logo.jpg'),
            qrcoodUrl:require('@/assets/images/wx-qrcood.jpg'),
            smallRoutineUrl:require('@/assets/images/wx-smallRoutine.jpg'),
            copyrightUrl:require('@/assets/images/copyright-icon.jpg')
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
    width: 100%;
    background-color: #f2f2f2;
    .wx-cood-img, .wx-smallRoutine-img {
        width: 100px;
        height: 100px;
    }
    .copyright-icon{
        width: 26px;
        height: 26px;
    }
}
</style>
