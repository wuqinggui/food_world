import Vue from 'vue'
let Hub = new Vue();
export default {
    // Event Bus
    Hub () {
        return Hub
    },
    // 对象的克隆
    cloneObj (obj) {
        var o;
        switch (typeof obj) {
            case 'undefined': break;
            case 'string': o = obj + ''; break;
            case 'number': o = obj - 0; break;
            case 'boolean': o = obj; break;
            case 'object':
                if (obj === null) {
                    o = null;
                } else {
                    if (obj instanceof Array) {
                        o = [];
                        for (var i = 0, len = obj.length; i < len; i++) {
                            o.push(this.cloneObj(obj[i]));
                        }
                    } else {
                        o = {};
                        for (var k in obj) {
                            o[k] = this.cloneObj(obj[k]);
                        }
                    }
                }
                break;
        default:
            o = obj;
            break;
        }
        return o;
    },
    // 转换时间日期格式
    addTime (m) {
        return m < 10 ? '0' + m : m
    },
    format (timeTemp) {
        let _self = this;
        let time = new Date(timeTemp);
        let y = time.getFullYear();
        let m = time.getMonth() + 1;
        let d = time.getDate();
        let h = time.getHours();
        let mm = time.getMinutes();
        let s = time.getSeconds();
        let date = y + '-' + _self.addTime(m) + '-' + _self.addTime(d);
        return date
    },
    /**
     * 匹配正则
     */
    matchFn (type, value) {
        let match = {
            // 链接
            url: /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/gi,
            // 固话
            phone: /^((\d{8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/gi,
            // 手机号码
            tel: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/gi,
            // 6位数密码验证
            passWord:/^\d{6,}$/gi,
            // 6位到16位之间，由数字和字符组成，且必须包含大、小写字母和数字
            passWord1:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/gi,
            // 正整数（不包含0）
            positiveInt: /^[1-9]\d*$/gi,
            // 非负整数（包含0）
            nonnegativeInt: /^[1-9]\d*|0$/gi,
            // 浮点
            float: /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/gi,
            // 小数点后不超过两位
            floatFixedTwo: /^\d+(\.\d{1,2})?$/gi,
            // 邮编
            postcode: /^[1-9]\d{5}(?!\d)$/gi,
            // 邮箱
            email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/gi,
            // 字母或数字
            letterOrNum: /^[a-zA-Z\d]+$/gi,
            // 10位，第一个不能为0
            // 可以输入中文，字母，数字
            room: /^[\u4e00-\u9fa5_a-zA-Z1-9_][\u4e00-\u9fa5_a-zA-Z0-9_]{0,10}$/gi,
            // 身份证
            identity_no: /^\d{15}|\d{18}$/gi
        }
        return match[type].test(value);
    }
}
