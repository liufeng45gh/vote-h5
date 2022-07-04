import wx from 'weixin-js-sdk'
import {getWxConfig} from   '@/apis/moduleA';


export function configWX(data){

    const shareContent = "快来投上宝贵的一票!";
    const shareTitle = "天然气销售分公司首届文创评选展示活动";
    const appid = "wx1b792045969d2147";
    const shareImgUrl = "https://vote.klny.xyz/web/icon/share-icon.jpg";

    let lineLink = window.location.href;
    if(lineLink.indexOf("?") != -1)
    {
        lineLink = lineLink.split("?")[0];
        console.log(lineLink);
    }

    wx.config({
        debug: false,
        appId: appid,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 功能列表，我们要使用JS-SDK的什么功能
    });

    wx.ready(function(){
        // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
        //alert("wx.ready");

         wx.updateTimelineShareData({
            title: shareTitle, // 分享标题
            link: lineLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: shareImgUrl, // 分享图标
            success: function () {
              // 设置成功
              //alert("updateTimelineShareData success");
            }
          })


        // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）


        wx.updateAppMessageShareData({
            title: shareTitle, // 分享标题
            desc: shareContent, // 分享描述
            link: lineLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: shareImgUrl, // 分享图标
            success: function () {
              // 设置成功
              //alert("updateAppMessageShareData success");
            }
          })
     });

    wx.error(function(res){

        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
       alert("微信设置错误");
       alert(res);
    });


}

export function wxShare(): any {
 
      const lineLink = location.href.split('#')[0];
  
    getWxConfig(lineLink).then(res => {
        console.log(res.data)
        configWX(res.data)
    })
}