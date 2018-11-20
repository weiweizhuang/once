//index.js
const time = require('../../utils/util.js');
//获取应用实例
const app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
    Page({
        data: {
            times:'',
            toView: 'red',
            scrollTop: 100,
            imgUrls: [
                '../../imgs/cs1.jpg',
                '../../imgs/cs2.jpg',
                '../../imgs/cs3.jpg',
                '../../imgs/cs4.jpg'
            ],
            indicatorDots: false,
            autoplay: true,
            interval: 3000,
            duration: 1000,
            circular:true
        },
        onShow:function(){
            console.log(111)
            this.setData({
                times: time.formatTime(new Date())
            })
        },
        tap: function (e) {
            for (var i = 0; i < order.length; ++i) {
                if (order[i] === this.data.toView) {
                    this.setData({
                        toView: order[i + 1]
                    })
                    break
                }
            }
        },
        goToPhoto:function(e){
            console.log(e);
            wx.reLaunch({
                url: '../photo/photo'
            })
        },
        goToMenu:function(e){
            console.log(e);
            wx.reLaunch({
                url: '../menu/menu'
            })
        },
        onReachBottom: function () {
            // 页面上拉触底事件的处理函数
            console.log("test1 onReachBottom");
            wx.showToast({
                title: '别拉了，到底啦',
                icon: 'clear',
                duration:2000,
                mask:true
            })
        }
    })
