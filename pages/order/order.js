Page({
	data: {
    shopInfo: {
      icon: '',
      title: '',
      text: ''
    },
    kinds: [{
      id: '1',
      icon: '',
      title: '种类1'
    }, {
      id: '2',
      icon: '',
      title: '种类2'
    }, {
      id: '3',
      icon: '',
      title: '种类3'
    }],
    goods: [{
      id: '1',
      icon: '',
      title: '商品1',
      text: '描述1',
      money: 8
    }, {
      id: '2',
      icon: '',
      title: '商品2',
      text: '描述2',
      money: 8
    }, {
      id: '3',
      icon: '',
      title: '商品3',
      text: '描述3',
      money: 8
    }, {
      id: '4',
      icon: '',
      title: '商品4',
      text: '描述4',
      money: 8
    }, {
      id: '5',
      icon: '',
      title: '商品5',
      text: '描述5',
      money: 8
    }, {
      id: '6',
      icon: '',
      title: '商品6',
      text: '描述6',
      money: 8
    }, {
      id: '7',
      icon: '',
      title: '商品7',
      text: '描述7',
      money: 8
    }, {
      id: '8',
      icon: '',
      title: '商品8',
      text: '描述8',
      money: 8
    }, {
      id: '9',
      icon: '',
      title: '商品9',
      text: '描述9',
      money: 8
    }, {
      id: '10',
      icon: '',
      title: '商品10',
      text: '描述10',
      money: 8
    }, {
      id: '11',
      icon: '',
      title: '商品11',
      text: '描述11',
      money: 8
    }]
	},
	onLoad(options) {
    if (options && options.title) {
      this.setData({ shopInfo: options });
      wx.setNavigationBarTitle({
        title: options.title,
        success: function(res) {
          // success
        }
      });
    }
	}
})