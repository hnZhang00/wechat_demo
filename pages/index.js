//index.js
//获取应用实例
const app = getApp();

var QQMapWX = require('../libs/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({
  data: {
  	title: 'index Page',
    province: '',
    city: '',
    district: ''
  },
  onLoad: function () {
    qqmapsdk = new QQMapWX({
      key: '7R5BZ-GFXR3-6AB3S-364UQ-BUYJ3-YIBVO' //这里自己的key秘钥进行填充
    });
  },
  onShow: function () {
    this.getSetting()
    	.then(this.getLocation)
    	.then(this.getLocal)
    	.then(this.showLocal);
  },
  getSetting: function () {
    let self = this;
    return new Promise((resolve, reject) => {
	    wx.getSetting({
	      success: (res) => {
	        // console.log(JSON.stringify(res))
	        // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
	        // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
	        // res.authSetting['scope.userLocation'] == true    表示 地理位置授权

	        if (res.authSetting['scope.userLocation'] == undefined || res.authSetting['scope.userLocation'] == true)
	        	return resolve();

          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
            	console.log(res)
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                });
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      });
                      return resolve();
                    }
                    wx.showToast({
                      title: '授权失败',
                      icon: 'none',
                      duration: 1000
                    });
                  }
                });
              }
            }
          });
	      }
	    });
    });
  },
  // 微信获得经纬度
  getLocation: function () {
    let self = this;
    return new Promise((resolve, reject) => {
	    wx.getLocation({
	      type: 'wgs84',
	      success: function (res) {
	      	console.log(res)
	        // var latitude = res.latitude
	        // var longitude = res.longitude
	        // var speed = res.speed
	        // var accuracy = res.accuracy;
	        return resolve(res);
	      },
	      fail: function (res) {
	        console.log('fail' + JSON.stringify(res))
	      }
	    });
    });
  },
  // 获取当前地理位置
  getLocal: function (location) {
    let self = this;
    return new Promise((resolve, reject) => {
	    qqmapsdk.reverseGeocoder({
	      location,
	      success: function (res) {
	        console.log(res);
	        return resolve(res.result.ad_info);
	      },
	      fail: function (res) {
	        console.log(res);
	      },
	      complete: function (res) {
	        // console.log(res);
	      }
	    });
    });
  },
  getCityList() {
  	qqmapsdk.getCityList({
	    success: function(res) {
        console.log(res);
	    },
	    fail: function(res) {
        console.log(res);
	    },
	    complete: function(res) {
        console.log(res);
	    }
		});
  },
  showLocal: function(localInfo) {
    this.setData({
      province: localInfo.province,
      city: localInfo.city,
      district: localInfo.district
    });
  //   wx.switchTab({
		// 	url: './home/home'
		// });
  },
  goPageList() {
  	app.globalData.city = this.data.city;
  	wx.switchTab({
			url: `./home/home`
		});
  }
})