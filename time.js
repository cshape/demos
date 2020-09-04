

<!--Begin Comm100 Live Chat Code-->
<div id="comm100-button-dynamic"></div>
<script type="text/javascript">

let isMontgomeryOpen = 'true';
let today = new Date();
let hourInRockland = today.getUTCHours() - 4;
let minutes = today.getMinutes();
let dayOfWeek = today.getDay();

if (dayOfWeek == 0 || dayOfWeek == 6) {
  isMontgomeryOpen = 'false';
} else if (hourInRockland < 8 || hourInRockland > 16) {
  isMontgomeryOpen = 'false';
} else if (hourInRockland == 8 && minutes < 30) {
  isMontgomeryOpen = 'false';
}

  var Comm100API=Comm100API||{};(function(t){function e(e){var a=document.createElement("script"),c=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=e+t.site_id,c.parentNode.insertBefore(a,c)}t.chat_buttons=t.chat_buttons||[],t.chat_buttons.push({div_id:"comm100-button-dynamic"}),t.site_id=136191,t.dynamic=true,e("https://vue.comm100.com/livechat.ashx?siteId="),setTimeout(function(){t.loaded||e("https://standby.comm100vue.com/livechat.ashx?siteId=")},5e3)})(Comm100API||{})
</script>
<!--End Comm100 Live Chat Code-->