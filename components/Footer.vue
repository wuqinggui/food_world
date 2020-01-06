<template>
    <div id="footer">
        <div class="footer-bottom ">
          <a href="javascript:void(0);">Copyright qinggui | 粤ICP备19016333号</a>
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
    .footer-bottom {
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
