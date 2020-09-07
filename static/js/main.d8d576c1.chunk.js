(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={Window:"Window_Window__Y_lSh",Blur:"Window_Blur__2pqS6",Info:"Window_Info__1kxGk",LowerBox:"Window_LowerBox__12rYN"}},function(e,t,a){e.exports={CurrentDay:"CurrentDay_CurrentDay__2fj9G",currDayBox:"CurrentDay_currDayBox__3gfys",Icon:"CurrentDay_Icon__3B_WO",degree:"CurrentDay_degree__3rmbN",daySpan:"CurrentDay_daySpan__1OSCg"}},function(e,t,a){e.exports={Days:"Days_Days__zU97d",Icon:"Days_Icon__3pnCf",Nums:"Days_Nums__1Xjze",daySpan:"Days_daySpan__2GEX7"}},function(e,t,a){e.exports={Weather:"Weather_Weather__kb9rp",background:"Weather_background__VnkWV"}},,,function(e,t,a){e.exports={Layout:"Layout_Layout__3YMen"}},function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),s=(a(17),a(1)),i=a(2),u=a(4),l=a(3),d=a(11),m=a.n(d),p=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:m.a.Layout},r.a.createElement("main",null,this.props.children))}}]),a}(r.a.Component),y=a(8),f=a.n(y),_=a(5),h=a.n(_),g=a(7),D=a.n(g),E=function(e){return r.a.createElement("div",{className:D.a.Days},r.a.createElement("p",{className:D.a.Nums},r.a.createElement("span",null,e.daysTempMax,"\xb0")," \xa0\xa0",r.a.createElement("span",{style:{color:"#ccc"}},e.daysTempMin,"\xb0")),r.a.createElement("p",{className:D.a.daySpan},"Sat"===e.days.toString().slice(0,3)?"Saturday":"Tue"===e.days.toString().slice(0,3)?"Tuesday":"Wed"===e.days.toString().slice(0,3)?"Wednesday":"Thu"===e.days.toString().slice(0,3)?"Thursday":e.days.toString().slice(0,3)+"day"))},v=a(6),S=a.n(v),w=function(e){var t=new Date;return r.a.createElement("div",{className:S.a.CurrentDay},r.a.createElement("div",{className:S.a.currDayBox},r.a.createElement("span",{className:S.a.degree},e.tempValue,"\xb0C")),r.a.createElement("div",{className:S.a.daySpan},r.a.createElement("span",null,"Sat"===t.toString().slice(0,3)?"Saturday":"Tue"===t.toString().slice(0,3)?"Tuesday":"Wed"===t.toString().slice(0,3)?"Wednesday":"Thu"===t.toString().slice(0,3)?"Thursday":t.toString().slice(0,3)+"day"," \xa0 ",function(){if("0"===t.toString().slice(8,11)[0])return t.toString().slice(8,11)[1]}()+"th"),r.a.createElement("p",null,e.description)))},b=function(e){var t={display:function(){return e.error?"block":"none"},textAlign:"center",fontWeight:"bold",color:"#fc3a30",textTransform:"uppercase"};return r.a.createElement("div",{className:h.a.Window},r.a.createElement("div",{className:h.a.Blur}),r.a.createElement("div",{className:h.a.Info},r.a.createElement(w,{description:e.description,tempValue:e.tempValue,currentDay:e.currentDay}),r.a.createElement("div",{style:t},e.error),r.a.createElement("div",{className:h.a.LowerBox},e.daysArr.map((function(t,a){return r.a.createElement(E,{days:t,key:a,daysTempMax:e.daysTemp.length>0?Math.round(e.daysTemp[a+1].temp.max):"-",daysTempMin:e.daysTemp.length>0?Math.round(e.daysTemp[a+1].temp.min):"-",iconId:e.daysTemp.length>0?e.daysTemp[a+1].weather[0].icon:"unknown"})})))))},W=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).mainHandler=function(){navigator.geolocation.getCurrentPosition((function(e){n.getWeatherHandler(e.coords.latitude,e.coords.longitude)}),(function(e){n.setState({coords:{error:{message:e.message}}})}))},n.getWeatherHandler=function(e,t){var a="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(t,"&units=metric&appid=").concat("0b789520c2175f25f7deeb51f642f7f9");return fetch(a).then((function(e){return e.json()})).then((function(e){var t=e.daily.concat();n.setState({info:{temperature:Math.round(e.current.temp),otherDays:t,description:e.current.weather[0].description}}),console.log(e)}))},n.state={days:[n.plus24(Date.now(),24),n.plus24(Date.now(),48),n.plus24(Date.now(),72),n.plus24(Date.now(),96),n.plus24(Date.now(),120),n.plus24(Date.now(),144),n.plus24(Date.now(),168)],info:{temperature:"-",description:"-",city:"-",country:"-",otherDays:[]},coords:{latitude:null,longitude:null,error:{message:null}}},n}return Object(i.a)(a,[{key:"plus24",value:function(e,t){return new Date(e+3600*t*1e3)}},{key:"componentDidMount",value:function(){this.mainHandler()}},{key:"render",value:function(){return r.a.createElement("div",{className:f.a.Weather},r.a.createElement("div",{className:f.a.background}),r.a.createElement(b,{daysArr:this.state.days,tempValue:this.state.info.temperature,daysTemp:this.state.info.otherDays,error:this.state.coords.error.message,description:this.state.info.description}))}}]),a}(r.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null,r.a.createElement(W,null)))}}]),a}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.d8d576c1.chunk.js.map