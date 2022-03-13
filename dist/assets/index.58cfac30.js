import{o as d,c,a as o,r as m,n as _,b,d as u,e as l,w as p,F as v,f as g,g as y}from"./vendor.45f2e141.js";const w=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}};w();var h=(a,r)=>{const s=a.__vccOpts||a;for(const[n,t]of r)s[n]=t;return s};const q={props:{href:{type:String,required:!0},target:{type:String,default:"_blank"},rel:{type:String,default:"noopener noreferrer"},classes:{type:String,default:""},accent:{type:String,default:"#000"}},computed:{style(){return{"--accent-color":this.accent}}}},j=["href","accent","target","rel"];function S(a,r,s,n,t,e){return d(),c("a",{href:s.href,accent:s.accent,style:_(e.style),target:s.target,rel:s.rel,class:b(s.classes)},[o("span",null,[m(a.$slots,"default",{},void 0,!0)])],14,j)}var f=h(q,[["render",S],["__scopeId","data-v-481efe53"]]);const k={},x=u('<table><thead><tr class="heading-row"><th><code>option</code></th><th><code>description</code></th><th><code>value type</code></th><th><code>default value</code></th></tr></thead><tbody><tr><td><code>slideshow</code></td><td><p>The parent element that contains your slides. By default, this will automatically init on the first element on the page with a class of &quot;heart-slideshow&quot;.</p></td><td><p> String or querySelector<br> (querySelectorAll is not supported) </p></td><td><code>&quot;.heart-slideshow&quot;</code></td></tr><tr><td><code>slide</code></td><td><p>The classname of the elements that contain your content. If left blank, it will look for elements with the &quot;heart-slide&quot; class.</p></td><td><p>String</p></td><td><code>&quot;.heart-slide&quot;</code></td></tr><tr><td><code>transition</code></td><td><p>The duration of the fade effect.</p></td><td><p>Number, in milliseconds.</p></td><td><code>3000</code></td></tr></tbody></table><blockquote><p><small>More coming soon...</small></p></blockquote>',2);function $(a,r,s,n,t,e){return x}var E=h(k,[["render",$]]);const O={mounted(){new HeartSlider}},T={class:"heart-slideshow"},N=u('<div class="heart-slide"><figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-03.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-01.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-02.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-04.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-05.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-06.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-07.jpg" alt=""></figure></div>',7),A=[N];function B(a,r,s,n,t,e){return d(),c("div",T,A)}var H=h(O,[["render",B]]);const L={id:"intro"},D={id:"button-holder"},z=g("Github"),C=g("JsDelivr"),I=o("div",{class:"scroll-instruct"},[o("a",{href:"#docs"},"Documentation")],-1),F={id:"docs"},V=u(`<div class="text-block"><h3>Purpose</h3><blockquote><p><em>Built for image-forward websites, HeartSlider is a simple and elegant slideshow that is designed for developers. It is adaptable, and customizable \u2014 with just enough styling to blend into any design system.</em></p></blockquote></div><div class="text-block"><h3>Getting Started</h3><p>Make sure to include <code>heartslider.min.js</code> and <code>heartslider.min.css</code> files to your project. You can either download and add to them to your project\u2019s directory, or use a CDN like jsDelivr.</p><pre>				<code class="language-html">
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
			</pre></div>`,4),M={class:"text-block table-row"},P=o("h3",null,"All Options",-1),G={setup(a){return(r,s)=>(d(),c(v,null,[o("section",L,[l(H),o("div",D,[l(f,{accent:"#000",href:"https://www.github.com/austenhart/heartslider"},{default:p(()=>[z]),_:1}),l(f,{accent:"#EB9642",href:"https://www.jsdelivr.com/package/gh/austenhart/heartslider"},{default:p(()=>[C]),_:1})]),I]),o("section",F,[V,o("div",M,[P,l(E)])])],64))}};const J=y(G);J.mount("#app");
