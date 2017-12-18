//detail.js
//获取应用实例
var app = getApp()
Page({
  data: {
    list:[],
    haslist:false,
    errmsg:''
  },
  //事件处理函数
  onLoad:function (options) {
  	var that = this;
    wx.request( {
      url: 'https://www.kuaidi100.com/query',
      data: options,
      header: {
        'Content-Type': 'application/json'
      },
      success: function( res ) {
        // console.log( res.data );
        var msg=res.data.message;
        var data=res.data.data;
        if(msg==="ok"){
        	that.setData({
        	  list: data,
        	  haslist:true
        	});
        	// console.log(that.data.list);
        }else{
        	that.setData({
        		errmsg:'请正确输入快递公司和单号'
        	});
        }
      }
    })
  }

})