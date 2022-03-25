import{o as d,c,a as n,r as m,n as _,b,d as u,e as l,w as p,F as v,f as g,g as y}from"./vendor.45f2e141.js";const w=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};w();var h=(a,e)=>{const r=a.__vccOpts||a;for(const[o,t]of e)r[o]=t;return r};const q={props:{href:{type:String,required:!0},target:{type:String,default:"_blank"},rel:{type:String,default:"noopener noreferrer"},classes:{type:String,default:""},accent:{type:String,default:"#000"}},computed:{style(){return{"--accent-color":this.accent}}}},j=["href","accent","target","rel"];function S(a,e,r,o,t,s){return d(),c("a",{href:r.href,accent:r.accent,style:_(s.style),target:r.target,rel:r.rel,class:b(r.classes)},[n("span",null,[m(a.$slots,"default",{},void 0,!0)])],14,j)}var f=h(q,[["render",S],["__scopeId","data-v-7c9d054f"]]);const k={},x=u('<table><thead><tr class="heading-row"><th><code>option</code></th><th><code>description</code></th><th><code>value type</code></th><th><code>default value</code></th></tr></thead><tbody><tr><td><code>slideshow</code></td><td><p>The parent element that contains your slides. By default, this will automatically init on the first element on the page with a class of &quot;heart-slideshow&quot;.</p></td><td><p> String or querySelector<br> (querySelectorAll is not supported) </p></td><td><code>&quot;.heart-slideshow&quot;</code></td></tr><tr><td><code>slide</code></td><td><p>The classname of the elements that contain your content. If left blank, it will look for elements with the &quot;heart-slide&quot; class.</p></td><td><p>String</p></td><td><code>&quot;.heart-slide&quot;</code></td></tr><tr><td><code>transition</code></td><td><p>The duration of the fade effect.</p></td><td><p>Number, in milliseconds.</p></td><td><code>3000</code></td></tr></tbody></table><blockquote><p><small>More coming soon...</small></p></blockquote>',2);function $(a,e,r,o,t,s){return x}var E=h(k,[["render",$]]);const A={mounted(){const a="https://cdn.jsdelivr.net/gh/austenhart/heartslider@3.3.2/dist/heartslider.min.js",e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src",a),e.setAttribute("async",""),e.onload=()=>{new HeartSlider},document.head.appendChild(e)}},O={class:"heart-slideshow"},T=u('<div class="heart-slide"><figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-03.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-01.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-02.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-04.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-05.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-06.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-07.jpg" alt=""></figure></div>',7),N=[T];function B(a,e,r,o,t,s){return d(),c("div",O,N)}var H=h(A,[["render",B]]);const L={id:"intro"},C={id:"button-holder"},D=g("Github"),z=g("JsDelivr"),I=n("div",{class:"scroll-instruct"},[n("a",{href:"#docs"},"Documentation")],-1),F={id:"docs"},V=u(`<div class="text-block"><h3>Purpose</h3><blockquote><p><em>Built for image-forward websites, HeartSlider is a simple and elegant slideshow that is designed for developers. It is adaptable, and customizable \u2014 with just enough styling to blend into any design system.</em></p></blockquote></div><div class="text-block"><h3>Getting Started</h3><p>Make sure to include <code>heartslider.min.js</code> and <code>heartslider.min.css</code> files to your project. You can either download and add to them to your project\u2019s directory, or use a CDN like jsDelivr.</p><pre>				<code class="language-html">
					<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">defer</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/heartslider@latest/dist/heartslider.min.js&quot;</span>&gt;&lt;/<span class="hljs-name">script</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/heartslider@latest/dist/heartslider.min.css&quot;</span>&gt;</span>
				</code>
			</pre><p>Then, add your markup.</p><pre>				<code class="language-html">
					&lt;div class=&quot;heart-slideshow&quot;&gt;<br>
					\xA0\xA0&lt;div class=&quot;heart-slide&quot;&gt;<br>
					\xA0\xA0\xA0\xA0&lt;figure class=&quot;image-holder&quot;&gt;<br>
					\xA0\xA0\xA0\xA0\xA0\xA0&lt;img <br>
					\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0data-sizes=&quot;(min-aspect-ratio: 1/1) 100vw, 140vw&quot; <br>
					\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0data-srcset=&quot;img/image-01.jpg 1x, img/image-01@2x 2x&quot; <br>
					\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0alt=&quot;&quot; /&gt;<br>
					\xA0\xA0\xA0\xA0&lt;/figure&gt;<br>
					\xA0\xA0&lt;/div&gt;<br>
					\xA0\xA0...<br>
					&lt;/div&gt;
				</code>
			</pre><p>Finally, initiate the slideshow with a new HeartSlider class and set your options in your JS file.</p><pre>				<code class="language-js">
					new HeartSlider({<br>
					\xA0\xA0slideshow: &quot;.heart-slideshow&quot;,<br>
					\xA0\xA0slides: &quot;.heart-slide&quot;,<br>
					\xA0\xA0transition: 3000,<br>
					\xA0\xA0delay: 1000,<br>
					});
				</code>
			</pre></div><div class="text-block"><h3>Default Options</h3><pre>				<code class="language-js">
					new HeartSlider({<br>
					\xA0\xA0slideshow: &quot;.heart-slideshow&quot;,<br>
					\xA0\xA0slides: &quot;.heart-slide&quot;,<br>
					\xA0\xA0transition: 3000,<br>
					\xA0\xA0manualTransition: 200,<br>
					\xA0\xA0delay: 1000,<br>
					\xA0\xA0loop: true,<br>
					\xA0\xA0randomize: false,<br>
					\xA0\xA0paused: false,<br>
					\xA0\xA0effect: &quot;fadeOut&quot;,<br>
					\xA0\xA0buttons: false,<br>
					\xA0\xA0swipe: true,<br>
					\xA0\xA0clickToAdvance: false,<br>
					\xA0\xA0pauseOnInactiveWindow: false,<br>
					});<br>
				</code>
			</pre></div><div class="text-block"><h3>Events</h3><pre>				<code class="language-js">
					const homepageSlider = new HeartSlider();<br>
					<br>
					// Events<br>
					homepageSlider.on(&quot;transitionStart&quot;, function (slideshow, slideshowElement, currentSlide) {<br>
					\xA0\xA0/* Code that runs on the START of each transition goes here */<br>
					\xA0\xA0console.log({ slideshow }, { slideshowElement }, { currentSlide });<br>
					});<br>
					homepageSlider.on(&quot;transitionEnd&quot;, function (slideshow, slideshowElement, currentSlide) {<br>
					\xA0\xA0/* Code that runs at the END of each transition goes here */<br>
					\xA0\xA0console.log({ slideshow }, { slideshowElement }, { currentSlide });<br>
					});
				</code>
			</pre></div>`,4),M={class:"text-block table-row"},P=n("h3",null,"All Options",-1),G={setup(a){return(e,r)=>(d(),c(v,null,[n("section",L,[l(H),n("div",C,[l(f,{accent:"#000",href:"https://www.github.com/austenhart/heartslider"},{default:p(()=>[D]),_:1}),l(f,{accent:"#EB9642",href:"https://www.jsdelivr.com/package/gh/austenhart/heartslider"},{default:p(()=>[z]),_:1})]),I]),n("section",F,[V,n("div",M,[P,l(E)])])],64))}};const J=y(G);J.mount("#app");
