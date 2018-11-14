//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    title: `首页`,
    city: '',
    list: [{
      icon: '',
      title: '店家一',
      text: '描述一'
    }, {
      icon: '',
      title: '店家二',
      text: '描述二'
    }, {
      icon: '',
      title: '店家三',
      text: '描述三'
    }, {
      icon: '',
      title: '店家四',
      text: '描述四'
    }, {
      icon: '',
      title: '店家五',
      text: '描述五'
    }, {
      icon: '',
      title: '店家六',
      text: '描述六'
    }, {
      icon: '',
      title: '店家七',
      text: '描述七'
    }, {
      icon: '',
      title: '店家八',
      text: '描述八'
    }]
  },
  onLoad: function (options) {
    this.setData({
      city: app.globalData.city || ''
    });
  },
  goOrderPage(e) {
    let item = e.currentTarget.dataset.item;
    console.log(item)
    wx.navigateTo({
      url: `../order/order?title=${item.title}`
    });
  }
})
