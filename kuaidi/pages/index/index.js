//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: [
      {
        'id':'yunda',
        'name':'韵达'
      },
      {
        'id':'shentong',
        'name':'申通'
      },
      {
        'id':'ems',
        'name':'EMS'
      },
      {
        'id':'shunfeng',
        'name':'顺丰'
      },
      {
        'id':'zhongtong',
        'name':'中通'
      },
      {
        'id':'yuantong',
        'name':'圆通'
      },
      {
        'id':'tiantian',
        'name':'天天'
      },
      {
        'id':'huitongkuaidi',
        'name':'汇通'
      },
      {
        'id':'quanfengkuaidi',
        'name':'全峰'
      },
      {
        'id':'debangwuliu',
        'name':'德邦'
      },
      {
        'id':'zhaijisong',
        'name':'宅急送'
      },
    ],
    compangy_id:'',
    inputValue:''
  },
  //事件处理函数
  // 公司选择
  bindPickerChange: function(e) {
    const val = e.detail.value;
    this.setData({
			index: val,
      compangy_id:this.data.array[val]['id']
    });
  },
  // 输入单号
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  // 点击查询
  bindquery:function (e) {
    var data={
      'type':this.data.compangy_id,
      'postid':this.data.inputValue
    };
    wx.navigateTo({
      url: '../../pages/detail/detail?type='+data.type+'&postid='+data.postid
    })
  },
})
