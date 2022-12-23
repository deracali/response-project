(function(){var n,e,t,r,l,u,i;l=new function(){},i=l.toString,r=function(n){return n!==n},t=function(n){return(("undefined"!=typeof window&&null!==window?window.isFinite:void 0)||global.isFinite)(n)&&!r(parseFloat(n))},e=function(n){return"[object Array]"===i.call(n)},u=[{name:"second",value:1e3},{name:"minute",value:6e4},{name:"hour",value:36e5},{name:"day",value:864e5},{name:"week",value:6048e5}],n={},n.intword=function(e,t,r){return null==r&&(r=2),n.compactInteger(e,r)},n.compactInteger=function(n,e){var t,r,l,u,i,a,o,c,f,s,d,p,m,h,b,g,v,w,z;if(null==e&&(e=0),e=Math.max(e,0),a=parseInt(n,10),d=0>a?"-":"",p=Math.abs(a),h=""+p,o=h.length,c=[13,10,7,4],t=["T","B","M","k"],1e3>p)return""+d+h;if(o>c[0]+3)return a.toExponential(e).replace("e+","x10^");for(v=0,w=c.length;w>v;v++)if(z=c[v],o>=z){i=z;break}return r=o-i+1,m=h.split(""),g=m.slice(0,r),u=m.slice(r,r+e+1),b=g.join(""),l=u.join(""),l.length<e&&(l+=""+Array(e-l.length+1).join("0")),0===e?f=""+d+b+t[c.indexOf(i)]:(s=(+(""+b+"."+l)).toFixed(e),f=""+d+s+t[c.indexOf(i)]),f},n.intcomma=n.intComma=function(e,t){return null==t&&(t=0),n.formatNumber(e,t)},n.filesize=n.fileSize=function(e){var t;return t=e>=1073741824?n.formatNumber(e/1073741824,2,"")+" GB":e>=1048576?n.formatNumber(e/1048576,2,"")+" MB":e>=1024?n.formatNumber(e/1024,0)+" KB":n.formatNumber(e,0)+n.pluralize(e," byte")},n.formatNumber=function(e,t,r,l){var u,i,a,o,c,f,s;return null==t&&(t=0),null==r&&(r=","),null==l&&(l="."),o=function(n,e,t){return t?n.substr(0,t)+e:""},i=function(n,e,t){return n.substr(t).replace(/(\d{3})(?=\d)/g,"$1"+e)},a=function(e,t,r){return r?t+n.toFixed(Math.abs(e),r).split(".")[1]:""},s=n.normalizePrecision(t),f=0>e&&"-"||"",u=parseInt(n.toFixed(Math.abs(e||0),s),10)+"",c=u.length>3?u.length%3:0,f+o(u,r,c)+i(u,r,c)+a(e,l,s)},n.toFixed=function(e,t){var r;return null==t&&(t=n.normalizePrecision(t,0)),r=Math.pow(10,t),(Math.round(e*r)/r).toFixed(t)},n.normalizePrecision=function(n,e){return n=Math.round(Math.abs(n)),r(n)?e:n},n.ordinal=function(n){var e,t,r,l;if(r=parseInt(n,10),0===r)return n;if(l=r%100,11===l||12===l||13===l)return""+r+"th";switch(t=r%10){case 1:e="st";break;case 2:e="nd";break;case 3:e="rd";break;default:e="th"}return""+r+e},n.times=function(n,e){var r,l,u;return null==e&&(e={}),t(n)&&n>=0?(r=parseFloat(n),l=["never","once","twice"],null!=e[r]?""+e[r]:""+((null!=(u=l[r])?u.toString():void 0)||r.toString()+" times")):void 0},n.pluralize=function(n,e,t){return null!=n&&null!=e?(null==t&&(t=e+"s"),1===parseInt(n,10)?e:t):void 0},n.truncate=function(n,e,t){return null==e&&(e=100),null==t&&(t="..."),n.length>e?n.substring(0,e-t.length)+t:n},n.truncatewords=n.truncateWords=function(n,e){var t,r,l;for(t=n.split(" "),l="",r=0;e>r;)null!=t[r]&&(l+=""+t[r]+" "),r++;return t.length>e?l+="...":void 0},n.truncatenumber=n.boundedNumber=function(n,e,r){var l;return null==e&&(e=100),null==r&&(r="+"),l=null,t(n)&&t(e)&&n>e&&(l=e+r),(l||n).toString()},n.oxford=function(e,t,r){var l,u,i;return i=e.length,2>i?""+e:2===i?e.join(" and "):(null!=t&&i>t?(l=i-t,u=t,null==r&&(r=", and "+l+" "+n.pluralize(l,"other"))):(u=-1,r=", and "+e[i-1]),e.slice(0,u).join(", ")+r)},n.dictionary=function(n,e,t){var r,l,u,i;if(null==e&&(e=" is "),null==t&&(t=", "),u="",null!=n&&"object"==typeof n&&"[object Array]"!==Object.prototype.toString.call(n)){r=[];for(l in n)i=n[l],r.push(""+l+e+i);u=r.join(t)}return u},n.frequency=function(t,r){var l,u,i;if(e(t))return l=t.length,i=n.times(l),u=0===l?""+i+" "+r:""+r+" "+i},n.pace=function(e,t,r){var l,i,a,o,c,f,s,d;if(null==r&&(r="time"),0===e||0===t)return"No "+n.pluralize(r);for(i="Approximately",f=null,a=e/t,s=0,d=u.length;d>s;s++)if(l=u[s],o=a*l.value,o>1){f=l.name;break}return f||(i="Less than",o=1,f=u[u.length-1].name),c=Math.round(o),r=n.pluralize(c,r),""+i+" "+c+" "+r+" per "+f},n.nl2br=function(n,e){return null==e&&(e="<br/>"),n.replace(/\n/g,e)},n.br2nl=function(n,e){return null==e&&(e="\r\n"),n.replace(/\<br\s*\/?\>/g,e)},n.capitalize=function(n,e){return null==e&&(e=!1),""+n.charAt(0).toUpperCase()+(e?n.slice(1).toLowerCase():n.slice(1))},n.capitalizeAll=function(n){return n.replace(/(?:^|\s)\S/g,function(n){return n.toUpperCase()})},n.titlecase=n.titleCase=function(e){var t,r,l,u,i;return l=/\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,r=/\S+[A-Z]+\S*/,i=/\s+/,u=/-/,(t=function(e,a,o){var c,f,s,d,p,m;for(null==a&&(a=!1),null==o&&(o=!0),s=[],f=e.split(a?u:i),c=p=0,m=f.length;m>p;c=++p)d=f[c],s.push(-1===d.indexOf("-")?!o||0!==c&&c!==f.length-1?r.test(d)?d:l.test(d)?d.toLowerCase():n.capitalize(d):r.test(d)?d:n.capitalize(d):t(d,!0,0===c||c===f.length-1));return s.join(a?"-":" ")})(e)},this.Humanize=n,"undefined"!=typeof module&&null!==module&&(module.exports=n)}).call(this);;
/*! rangeslider.js - v2.3.0 | (c) 2016 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";function b(){var a=document.createElement("input");return a.setAttribute("type","range"),"text"!==a.type}function c(a,b){var c=Array.prototype.slice.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)}function d(a,b){return b=b||100,function(){if(!a.debouncing){var c=Array.prototype.slice.apply(arguments);a.lastReturnVal=a.apply(window,c),a.debouncing=!0}return clearTimeout(a.debounceTimeout),a.debounceTimeout=setTimeout(function(){a.debouncing=!1},b),a.lastReturnVal}}function e(a){return a&&(0===a.offsetWidth||0===a.offsetHeight||a.open===!1)}function f(a){for(var b=[],c=a.parentNode;e(c);)b.push(c),c=c.parentNode;return b}function g(a,b){function c(a){"undefined"!=typeof a.open&&(a.open=!a.open)}var d=f(a),e=d.length,g=[],h=a[b];if(e){for(var i=0;i<e;i++)g[i]=d[i].style.cssText,d[i].style.setProperty?d[i].style.setProperty("display","block","important"):d[i].style.cssText+=";display: block !important",d[i].style.height="0",d[i].style.overflow="hidden",d[i].style.visibility="hidden",c(d[i]);h=a[b];for(var j=0;j<e;j++)d[j].style.cssText=g[j],c(d[j])}return h}function h(a,b){var c=parseFloat(a);return Number.isNaN(c)?b:c}function i(a){return a.charAt(0).toUpperCase()+a.substr(1)}function j(b,e){if(this.$window=a(window),this.$document=a(document),this.$element=a(b),this.options=a.extend({},n,e),this.polyfill=this.options.polyfill,this.orientation=this.$element[0].getAttribute("data-orientation")||this.options.orientation,this.onInit=this.options.onInit,this.onSlide=this.options.onSlide,this.onSlideEnd=this.options.onSlideEnd,this.DIMENSION=o.orientation[this.orientation].dimension,this.DIRECTION=o.orientation[this.orientation].direction,this.DIRECTION_STYLE=o.orientation[this.orientation].directionStyle,this.COORDINATE=o.orientation[this.orientation].coordinate,this.polyfill&&m)return!1;this.identifier="js-"+k+"-"+l++,this.startEvent=this.options.startEvent.join("."+this.identifier+" ")+"."+this.identifier,this.moveEvent=this.options.moveEvent.join("."+this.identifier+" ")+"."+this.identifier,this.endEvent=this.options.endEvent.join("."+this.identifier+" ")+"."+this.identifier,this.toFixed=(this.step+"").replace(".","").length-1,this.$fill=a('<div class="'+this.options.fillClass+'" />'),this.$handle=a('<div class="'+this.options.handleClass+'" />'),this.$range=a('<div class="'+this.options.rangeClass+" "+this.options[this.orientation+"Class"]+'" id="'+this.identifier+'" />').insertAfter(this.$element).prepend(this.$fill,this.$handle),this.$element.css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",opacity:"0"}),this.handleDown=a.proxy(this.handleDown,this),this.handleMove=a.proxy(this.handleMove,this),this.handleEnd=a.proxy(this.handleEnd,this),this.init();var f=this;this.$window.on("resize."+this.identifier,d(function(){c(function(){f.update(!1,!1)},300)},20)),this.$document.on(this.startEvent,"#"+this.identifier+":not(."+this.options.disabledClass+")",this.handleDown),this.$element.on("change."+this.identifier,function(a,b){if(!b||b.origin!==f.identifier){var c=a.target.value,d=f.getPositionFromValue(c);f.setPosition(d)}})}Number.isNaN=Number.isNaN||function(a){return"number"==typeof a&&a!==a};var k="rangeslider",l=0,m=b(),n={polyfill:!0,orientation:"horizontal",rangeClass:"rangeslider",disabledClass:"rangeslider--disabled",activeClass:"rangeslider--active",horizontalClass:"rangeslider--horizontal",verticalClass:"rangeslider--vertical",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"]},o={orientation:{horizontal:{dimension:"width",direction:"left",directionStyle:"left",coordinate:"x"},vertical:{dimension:"height",direction:"top",directionStyle:"bottom",coordinate:"y"}}};return j.prototype.init=function(){this.update(!0,!1),this.onInit&&"function"==typeof this.onInit&&this.onInit()},j.prototype.update=function(a,b){a=a||!1,a&&(this.min=h(this.$element[0].getAttribute("min"),0),this.max=h(this.$element[0].getAttribute("max"),100),this.value=h(this.$element[0].value,Math.round(this.min+(this.max-this.min)/2)),this.step=h(this.$element[0].getAttribute("step"),1)),this.handleDimension=g(this.$handle[0],"offset"+i(this.DIMENSION)),this.rangeDimension=g(this.$range[0],"offset"+i(this.DIMENSION)),this.maxHandlePos=this.rangeDimension-this.handleDimension,this.grabPos=this.handleDimension/2,this.position=this.getPositionFromValue(this.value),this.$element[0].disabled?this.$range.addClass(this.options.disabledClass):this.$range.removeClass(this.options.disabledClass),this.setPosition(this.position,b)},j.prototype.handleDown=function(a){if(a.preventDefault(),this.$document.on(this.moveEvent,this.handleMove),this.$document.on(this.endEvent,this.handleEnd),this.$range.addClass(this.options.activeClass),!((" "+a.target.className+" ").replace(/[\n\t]/g," ").indexOf(this.options.handleClass)>-1)){var b=this.getRelativePosition(a),c=this.$range[0].getBoundingClientRect()[this.DIRECTION],d=this.getPositionFromNode(this.$handle[0])-c,e="vertical"===this.orientation?this.maxHandlePos-(b-this.grabPos):b-this.grabPos;this.setPosition(e),b>=d&&b<d+this.handleDimension&&(this.grabPos=b-d)}},j.prototype.handleMove=function(a){a.preventDefault();var b=this.getRelativePosition(a),c="vertical"===this.orientation?this.maxHandlePos-(b-this.grabPos):b-this.grabPos;this.setPosition(c)},j.prototype.handleEnd=function(a){a.preventDefault(),this.$document.off(this.moveEvent,this.handleMove),this.$document.off(this.endEvent,this.handleEnd),this.$range.removeClass(this.options.activeClass),this.$element.trigger("change",{origin:this.identifier}),this.onSlideEnd&&"function"==typeof this.onSlideEnd&&this.onSlideEnd(this.position,this.value)},j.prototype.cap=function(a,b,c){return a<b?b:a>c?c:a},j.prototype.setPosition=function(a,b){var c,d;void 0===b&&(b=!0),c=this.getValueFromPosition(this.cap(a,0,this.maxHandlePos)),d=this.getPositionFromValue(c),this.$fill[0].style[this.DIMENSION]=d+this.grabPos+"px",this.$handle[0].style[this.DIRECTION_STYLE]=d+"px",this.setValue(c),this.position=d,this.value=c,b&&this.onSlide&&"function"==typeof this.onSlide&&this.onSlide(d,c)},j.prototype.getPositionFromNode=function(a){for(var b=0;null!==a;)b+=a.offsetLeft,a=a.offsetParent;return b},j.prototype.getRelativePosition=function(a){var b=i(this.COORDINATE),c=this.$range[0].getBoundingClientRect()[this.DIRECTION],d=0;return"undefined"!=typeof a.originalEvent["client"+b]?d=a.originalEvent["client"+b]:a.originalEvent.touches&&a.originalEvent.touches[0]&&"undefined"!=typeof a.originalEvent.touches[0]["client"+b]?d=a.originalEvent.touches[0]["client"+b]:a.currentPoint&&"undefined"!=typeof a.currentPoint[this.COORDINATE]&&(d=a.currentPoint[this.COORDINATE]),d-c},j.prototype.getPositionFromValue=function(a){var b,c;return b=(a-this.min)/(this.max-this.min),c=Number.isNaN(b)?0:b*this.maxHandlePos},j.prototype.getValueFromPosition=function(a){var b,c;return b=a/(this.maxHandlePos||1),c=this.step*Math.round(b*(this.max-this.min)/this.step)+this.min,Number(c.toFixed(this.toFixed))},j.prototype.setValue=function(a){a===this.value&&""!==this.$element[0].value||this.$element.val(a).trigger("input",{origin:this.identifier})},j.prototype.destroy=function(){this.$document.off("."+this.identifier),this.$window.off("."+this.identifier),this.$element.off("."+this.identifier).removeAttr("style").removeData("plugin_"+k),this.$range&&this.$range.length&&this.$range[0].parentNode.removeChild(this.$range[0])},a.fn[k]=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),e=d.data("plugin_"+k);e||d.data("plugin_"+k,e=new j(this,b)),"string"==typeof b&&e[b].apply(e,c)})},"rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"});;
(function ($) {

  Drupal.behaviors.dfc_mortgage_calc = {
    attach: function (context, settings) {
      //start
      var calc_loan = function() {
        var value = 0;
        var n = $('#repayment_select').val()*12;
        var r = ($('#interest_text').val()/100)/12;
        var R = Math.pow(r+1,n);
        var P = $('#house_price').val();
        //var d = $('#deposit').val();
        value=(P)*((r*(R))/(R-1));
        $('.installment-value').text("$ " + Humanize.formatNumber(value, 2));

        // check if form has changed 
        var $form = $('form#loan-calc'),
            origForm = $form.serialize();

        $('form#loan-calc :input').on('change input', function() {
            $('.change-message').toggle($form.serialize() !== origForm);
        });

        // error handling
        if ($('#interest_text').val().length == 0) {
            $('#interest_text').addClass('has-error');
            $('.installment-value').text('Enter interest rate above to see monthly payment');
        }
        if ($('#interest_text').val().length > 0) {
            $('#interest_text').removeClass('has-error');
        }

        //
      }
      
      $('#repayment_value').text($('#repayment_select').val());
      $('#interest_value').text($('#interest_text').val());

      $('#house_price').change(function(event) {
        calc_loan();
      });

      $('#repayment_select').change(function(event) {
        $('#repayment_value').text($('#repayment_select').val());
        calc_loan();
      });

      $('#interest_text').keyup(function(event) {
        $('#interest_value').text($('#interest_text').val());
        calc_loan();
      });
      // slider value
      $('#price_slider').change(function(event) {
        $('#price_value').text($('#price_slider').val());

        $('#house_price').val($('#price_slider').val());
        calc_loan();
      });
      // plus and minus
        $('.icon-slider-minus').click(function() {
        //if value < max
            $("#price_slider").val(parseInt($("#price_slider").val())-1000);  
            $("#price_slider").trigger('change');
        });

        $('.icon-slider-plus').click(function() {
        //if value < max
            $("#price_slider").val(parseInt($("#price_slider").val())+1000);  
            $("#price_slider").trigger('change');
        });  

        var valueBubble = '<output class="rangeslider__value-bubble" />';

        function updateValueBubble(pos, value, context) {
          pos = pos || context.position;
          value = value || context.value;
          var $valueBubble = $('.rangeslider__value-bubble', context.$range);
          var tempPosition = pos + context.grabPos;
          var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

          if ($valueBubble.length) {
            $valueBubble[0].style.left = Math.ceil(position) + 'px';
            $valueBubble[0].innerHTML = value;
          }
          $('output.rangeslider__value-bubble').text("$ " + Humanize.formatNumber(value, 0));
        }



        $('input[type="range"]').rangeslider({
          polyfill: false,
          onInit: function() {
            this.$range.append($(valueBubble));
            updateValueBubble(null, null, this);
          },
          onSlide: function(pos, value) {
            updateValueBubble(pos, value, this);
          }
        });

        //set initial value
        $('#price_slider').val(100000).change();

      //end
    }
  };


})(jQuery);;
