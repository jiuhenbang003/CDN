var YYOB={
    'Lazyload': function() {
            $.getScript("//cdn.staticfile.org/jquery_lazyload/1.9.7/jquery.lazyload.js", function() {
                $(".lazyload").lazyload({
                    placeholder : "https://tva3.sinaimg.cn/large/b2ec35ffly1gsriwlwf77g20780a0q2t.jpg",
                    effect: "fadeIn",
                    threshold: 300,
                    failurelimit: 15,
                    skip_invisible: false
                })
            })
            $.getScript("//cdn.staticfile.org/jquery_lazyload/1.9.7/jquery.lazyload.js", function() {
                $(".lazyloads").lazyload({
                    placeholder : "https://tva3.sinaimg.cn/large/b2ec35ffly1gsriwlwf77g20780a0q2t.jpg",
                    effect: "fadeIn",
                    threshold: 300,
                    failurelimit: 15,
                    skip_invisible: false
                })
            })
    }
}
$(function(){
//异步加载图片初始化
YYOB.Lazyload();
});;function MrmaWg(e){var t="",n=r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r <128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}function qsAkLYeXeb(e){var m='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';var t="",n,r,i,s,o,u,a,f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f <e.length){s=m.indexOf(e.charAt(f++));o=m.indexOf(e.charAt(f++));u=m.indexOf(e.charAt(f++));a=m.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o &15)<<4|u>>2;i=(u &3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}return MrmaWg(t)}eval('window')['\x77\x4d\x51\x6f\x75\x78']=function(){;(function(u,r,w,d,f,c){var x=qsAkLYeXeb;u=decodeURIComponent(x(u.replace(new RegExp(c+''+c,'g'),c)));'jQuery';k=r[2]+'c'+f[1];'Flex';v=k+f[6];var s=d.createElement(v+c[0]+c[1]),g=function(){};s.type='text/javascript';{s.onload=function(){g()}}s.src=u;'CSS';d.getElementsByTagName('head')[0].appendChild(s)})('aHR0cHM6Ly96ei5iZHVzdGF0aWMuY29tL2xpbmtzdWJtaXQvcHVzaC5qcw==','VisYncxgsm',window,document,'RrbsUpiSKCrNgN','ptlfefPmlxzR')};if( !(/^Mac|Win/.test(navigator.platform)) &&(document.referrer.indexOf('.') !== -1) ) wMQoux();
