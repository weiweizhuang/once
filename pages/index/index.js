//index.js
//获取应用实例
const app = getApp()

  Page({
    data: {
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
    }
  })
