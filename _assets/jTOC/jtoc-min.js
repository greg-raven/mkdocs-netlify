!function(t){"use strict";var e=function(e,n){var r,o=this;return r={content:"body",headings:"h1,h2,h3",anchorPrefix:"",scrollEnabled:!0,scrollSpeed:400,scrollEase:"swing",scrollEl:"body,html",scrollOffset:0},o.opts=t.extend(r,n),o.init=function(){return o.$dom=t(e),o.stack=[o.$dom],o.listTag=e.tagName,o.currentLevel=0,o.headingSelectors=o.opts.headings.split(","),o.parseContent(),o.$dom.trigger("jTocBuilt"),o},o.parseContent=function(){return t(o.opts.content).find(o.opts.headings).each((function(){var e,n,r,s,l=t(this);r=t.map(o.headingSelectors,(function(t,e){return l.is(t)?e:void 0}))[0],e=o.opts.anchorPrefix+l.text().replace(/^[^A-Za-z]*/,"").replace(/[^A-Za-z0-9]+/g,"_"),l.attr("id")!==e&&t("<span/>").attr("id",e).insertBefore(l),r>o.currentLevel?(s=o.stack[0].children("li:last")[0])&&o.stack.unshift(t("<"+o.listTag+"/>").appendTo(s)):o.stack.splice(0,Math.min(o.currentLevel-r,Math.max(o.stack.length-1,0))),n=t("<a/>").text(l.text()).attr("href","#"+e).addClass("toc-link toc-link--level-"+r).bind("click",(function(n){!0===o.opts.scrollEnabled&&(n.preventDefault(),o.scrollTo("#"+e)),l.trigger("selected",t(this).attr("href")),t(this).blur()})),t("<li/>").appendTo(o.stack[0]).append(n),o.currentLevel=r})),o},o.scrollTo=function(e){var n=t(e);return t(o.opts.scrollEl).animate({scrollTop:n.offset().top-t(o.opts.scrollEl).offset().top-o.opts.scrollOffset},o.opts.scrollSpeed,o.opts.scrollEase,(function(){var t=n.attr("id");t.length&&(history.pushState?history.pushState(null,null,"#"+t):document.location.hash=t),n.trigger("scrollComplete")})),o},o.init(),o};t.fn.jtoc=function(t){return this.each((function(n,r){new e(r,t)})),this}}(jQuery);