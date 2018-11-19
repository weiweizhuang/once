//index.js
//获取应用实例
const app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
  Page({
    data: {
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
  })
