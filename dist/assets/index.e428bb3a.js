import{o as h,c as f,a as t,r as S,n as k,b as m,d as u,e as T,f as l,w as y,g as s,t as g,F as b,h as x,i as p,j as C,x as j,k as q,l as H,m as $}from"./vendor.0c5ae289.js";const V=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}};V();var v=(n,d)=>{const a=n.__vccOpts||n;for(const[e,o]of d)a[e]=o;return a};const E={props:{href:{type:String,required:!0},target:{type:String,default:"_blank"},rel:{type:String,default:"noopener noreferrer"},classes:{type:String,default:""},accent:{type:String,default:"#000"}},computed:{style(){return{"--accent-color":this.accent}}}},L=["href","accent","target","rel"];function O(n,d,a,e,o,i){return h(),f("a",{href:a.href,accent:a.accent,style:k(i.style),target:a.target,rel:a.rel,class:m(a.classes)},[t("span",null,[S(n.$slots,"default",{},void 0,!0)])],14,L)}var w=v(E,[["render",O],["__scopeId","data-v-5fee0fb8"]]);const A={methods:{copyTextToClipboard(n){return navigator.clipboard&&typeof navigator.clipboard.writeText=="function"?navigator.clipboard.writeText(n):new Promise((d,a)=>{const e=document.createElement("textarea");e.value=n,e.setAttribute("readonly",""),e.style.position="fixed",e.style.top="-1000px",e.style.left="-1000px",document.body.appendChild(e),e.focus(),e.select();try{const o=document.execCommand("copy");if(document.body.removeChild(e),!o){a(new Error("Copy command failed"));return}d()}catch(o){document.body.removeChild(e),a(o)}})},getOptionCopyText(n){return{allowFullVideoPlayback:"allowFullVideoPlayback: false,",slideshow:'slideshow: ".heart-slideshow",',slides:'slides: ".heart-slide",',transition:"transition: 3000,",manualTransition:"manualTransition: 400,",delayStart:"delayStart: 0,",delay:"delay: 1000,",loop:"loop: true,",randomize:'randomize: false, // or "start" / "all"',paused:"paused: false,",effect:'effect: "fadeOut",',buttons:"buttons: false,",swipe:"swipe: true,",clickToAdvance:"clickToAdvance: false,",keyboard:"keyboard: true,",label:'label: "Slideshow",',pauseOnInactiveWindow:"pauseOnInactiveWindow: false,",progressIndicators:'progressIndicators: { enable: false, type: "dash", clickable: true, color: "#fff", container: null },',counter:'counter: { enable: false, separator: " / ", container: null },',progressive:"progressive: 1,",stackOnMobile:"stackOnMobile: { enable: false, threshold: 768 },",debug:"debug: false,"}[n]||null},attachOptionCopyButtons(){const n=this.$refs.optionsContainer;if(!n||typeof n.querySelectorAll!="function")return;n.querySelectorAll("tbody tr").forEach(a=>{if(a.querySelector(".option-copy-button"))return;const e=a.querySelector("td:first-child code");if(!e)return;const o=e.textContent.trim(),i=this.getOptionCopyText(o);if(!i)return;const c=a.querySelector("td:last-child");if(!c)return;const r=document.createElement("button");r.type="button",r.className="option-copy-button",r.setAttribute("aria-label",`Copy ${o} default value`),r.innerHTML=`
					<span class="option-copy-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
							<path d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10z" />
							<path d="M18 5H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16h-8V7h8z" />
						</svg>
					</span>
					<span class="option-copy-confirmation" aria-hidden="true">Copied</span>
				`,r.addEventListener("click",async()=>{try{await this.copyTextToClipboard(i),r.classList.remove("copy-failed"),r.classList.add("copy-confirmed"),r.copyResetTimer&&clearTimeout(r.copyResetTimer),r.copyResetTimer=setTimeout(()=>{r.classList.remove("copy-confirmed")},1400)}catch{r.classList.add("copy-failed"),r.copyResetTimer&&clearTimeout(r.copyResetTimer),r.copyResetTimer=setTimeout(()=>{r.classList.remove("copy-failed")},1400)}}),c.appendChild(r)})}},mounted(){this.attachOptionCopyButtons()},updated(){this.attachOptionCopyButtons()}},B={id:"options-container",ref:"optionsContainer"},I=u('<table data-v-d8f021a2><thead data-v-d8f021a2><tr class="heading-row" data-v-d8f021a2><th data-v-d8f021a2><code data-v-d8f021a2>option</code></th><th data-v-d8f021a2><code data-v-d8f021a2>description</code></th><th data-v-d8f021a2><code data-v-d8f021a2>value type</code></th><th data-v-d8f021a2><code data-v-d8f021a2>default value</code></th></tr></thead><tbody data-v-d8f021a2><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>allowFullVideoPlayback</code></td><td data-v-d8f021a2><p data-v-d8f021a2>If true, video slides can hold long enough for the full video to play before the slideshow advances.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Boolean</p></td><td data-v-d8f021a2><code data-v-d8f021a2>false</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>slideshow</code></td><td data-v-d8f021a2><p data-v-d8f021a2>The parent element that contains your slides. By default, this will automatically init on the first element on the page with a class of &quot;heart-slideshow&quot;.</p></td><td data-v-d8f021a2><p data-v-d8f021a2> String or querySelector<br data-v-d8f021a2> (querySelectorAll is not supported) </p></td><td data-v-d8f021a2><code data-v-d8f021a2>&quot;.heart-slideshow&quot;</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>slides</code></td><td data-v-d8f021a2><p data-v-d8f021a2>The classname of the elements that contain your content. If left blank, it will look for elements with the &quot;heart-slide&quot; class.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>String</p></td><td data-v-d8f021a2><code data-v-d8f021a2>&quot;.heart-slide&quot;</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>transition</code></td><td data-v-d8f021a2><p data-v-d8f021a2>The duration of the fade effect.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Number, in milliseconds.</p></td><td data-v-d8f021a2><code data-v-d8f021a2>3000</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>manualTransition</code></td><td data-v-d8f021a2><p data-v-d8f021a2>The duration of the fade effect during a swipe, click or arrow press. Quick presses are queued rather than dropped, and each queued fade overlaps the one still on screen.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Number, in milliseconds.</p></td><td data-v-d8f021a2><code data-v-d8f021a2>400</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>delayStart</code></td><td data-v-d8f021a2><p data-v-d8f021a2>The startup delay before auto-play begins. Useful for intro timing or hero sections that should hold briefly.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Number, in milliseconds.</p></td><td data-v-d8f021a2><code data-v-d8f021a2>0</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>delay</code></td><td data-v-d8f021a2><p data-v-d8f021a2>The amount of time to wait before starting the transition to the next slide.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Number, in milliseconds.</p></td><td data-v-d8f021a2><code data-v-d8f021a2>1000</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>loop</code></td><td data-v-d8f021a2><p data-v-d8f021a2>Tells the slideshow to restart at the beginning once reaching the final slide.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Boolean</p></td><td data-v-d8f021a2><code data-v-d8f021a2>true</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>randomize</code></td><td data-v-d8f021a2><p data-v-d8f021a2> Controls the playback order. <code data-v-d8f021a2>false</code> plays slides in document order. <code data-v-d8f021a2>&quot;start&quot;</code> (or <code data-v-d8f021a2>true</code>) picks a random first slide and then continues in order. <code data-v-d8f021a2>&quot;all&quot;</code> shuffles the whole running order \u2014 no slide repeats back to back, and every slide plays once before the order reshuffles. </p></td><td data-v-d8f021a2><p data-v-d8f021a2> Boolean or String;<br data-v-d8f021a2><code data-v-d8f021a2>false</code>, <code data-v-d8f021a2>&quot;start&quot;</code>, or <code data-v-d8f021a2>&quot;all&quot;</code></p></td><td data-v-d8f021a2><code data-v-d8f021a2>false</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>paused</code></td><td data-v-d8f021a2><p data-v-d8f021a2>If set to true, the slideshow will not auto-play.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Boolean</p></td><td data-v-d8f021a2><code data-v-d8f021a2>false</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>effect</code></td><td data-v-d8f021a2><p data-v-d8f021a2>Two options for the easing applied to the fade. Using <code data-v-d8f021a2>fadeOut</code> will smoothly crossfade from one slide to the next. Using <code data-v-d8f021a2>fadeInOut</code> will make the current slide completely fade out before fading in the new one.</p></td><td data-v-d8f021a2><p data-v-d8f021a2> String;<br data-v-d8f021a2><code data-v-d8f021a2>fadeOut</code> or <code data-v-d8f021a2>fadeInOut</code></p></td><td data-v-d8f021a2><code data-v-d8f021a2>&quot;fadeOut&quot;</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>buttons</code></td><td data-v-d8f021a2><p data-v-d8f021a2>If true, will create previous / next buttons using the <code data-v-d8f021a2>heart-prev</code> and <code data-v-d8f021a2>heart-next</code> classes. Buttons can be customized with CSS.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Boolean</p></td><td data-v-d8f021a2><code data-v-d8f021a2>false</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>swipe</code></td><td data-v-d8f021a2><p data-v-d8f021a2>Allows the slideshow to be manually controlled with swipe gestures on touch devices.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Boolean</p></td><td data-v-d8f021a2><code data-v-d8f021a2>true</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>clickToAdvance</code></td><td data-v-d8f021a2><p data-v-d8f021a2>Allows the slideshow to be manually advanced with a click or tap.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Boolean</p></td><td data-v-d8f021a2><code data-v-d8f021a2>false</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>keyboard</code></td><td data-v-d8f021a2><p data-v-d8f021a2> Lets viewers move between slides with the keyboard while focus is inside the slideshow. Left and right arrows move one slide; <code data-v-d8f021a2>Home</code> and <code data-v-d8f021a2>End</code> jump to the first and last. The slideshow is made focusable so keyboard users can reach it. </p></td><td data-v-d8f021a2><p data-v-d8f021a2>Boolean</p></td><td data-v-d8f021a2><code data-v-d8f021a2>true</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>label</code></td><td data-v-d8f021a2><p data-v-d8f021a2>The accessible name announced for the slideshow region. Ignored if the slideshow element already carries its own <code data-v-d8f021a2>aria-label</code>.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>String</p></td><td data-v-d8f021a2><code data-v-d8f021a2>&quot;Slideshow&quot;</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>pauseOnInactiveWindow</code></td><td data-v-d8f021a2><p data-v-d8f021a2>Will pause the slideshow while the website is not in the active window.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Boolean</p></td><td data-v-d8f021a2><code data-v-d8f021a2>false</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>progressIndicators</code></td><td data-v-d8f021a2><p data-v-d8f021a2> Adds dash or dot markers at the bottom of the slideshow to show progress. When <code data-v-d8f021a2>clickable</code> is true they are real buttons, each with an accessible name, and the active one is marked with <code data-v-d8f021a2>aria-current</code>. Spacing is set in CSS \u2014 see <a href="#styling" data-v-d8f021a2>Styling with CSS</a>. <code data-v-d8f021a2>container</code> moves them out of the slideshow \u2014 see <a href="#placement" data-v-d8f021a2>Moving the Counter and Indicators</a>. </p></td><td data-v-d8f021a2><p data-v-d8f021a2>Object</p></td><td data-v-d8f021a2><code data-v-d8f021a2>{ <br data-v-d8f021a2>enable: false, <br data-v-d8f021a2>type: &quot;dash&quot;, <br data-v-d8f021a2>clickable: true, <br data-v-d8f021a2>color: &quot;#fff&quot;, <br data-v-d8f021a2>container: null, <br data-v-d8f021a2>}</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>counter</code></td><td data-v-d8f021a2><p data-v-d8f021a2>Displays the current position, like <code data-v-d8f021a2>3 / 8</code>. Passing the object switches it on; <code data-v-d8f021a2>separator</code> sets the text placed between the two numbers, and <code data-v-d8f021a2>container</code> moves it out of the slideshow \u2014 see <a href="#placement" data-v-d8f021a2>Moving the Counter and Indicators</a>.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Object</p></td><td data-v-d8f021a2><code data-v-d8f021a2>{ <br data-v-d8f021a2>enable: false, <br data-v-d8f021a2>separator: &quot;\xA0/\xA0&quot;, <br data-v-d8f021a2>container: null, <br data-v-d8f021a2>}</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>progressive</code></td><td data-v-d8f021a2><p data-v-d8f021a2>Loads content ahead of the active slide. Set to <code data-v-d8f021a2>0</code> to disable, or any positive number to preload that many upcoming slides.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Number</p></td><td data-v-d8f021a2><code data-v-d8f021a2>1</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>stackOnMobile</code></td><td data-v-d8f021a2><p data-v-d8f021a2>Stacks all slides vertically below a breakpoint and pauses slideshow transitions while stacked.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Object</p></td><td data-v-d8f021a2><code data-v-d8f021a2>{ <br data-v-d8f021a2>enable: false, <br data-v-d8f021a2>threshold: 768, <br data-v-d8f021a2>}</code></td></tr><tr data-v-d8f021a2><td data-v-d8f021a2><code data-v-d8f021a2>debug</code></td><td data-v-d8f021a2><p data-v-d8f021a2>Enables verbose console logs and warnings to help troubleshoot slideshow behavior.</p></td><td data-v-d8f021a2><p data-v-d8f021a2>Boolean</p></td><td data-v-d8f021a2><code data-v-d8f021a2>false</code></td></tr></tbody></table>',1),z=[I];function N(n,d,a,e,o,i){return h(),f("div",B,z,512)}var P=v(A,[["render",N],["__scopeId","data-v-d8f021a2"]]);const R={mounted(){const d="https://cdn.jsdelivr.net/gh/austenhart/heartslider@3/dist",a=`${d}/heartslider.min.css`,e=document.createElement("link");e.rel="stylesheet",e.href=a;const o=`${d}/heartslider.min.js`,i=document.createElement("script");i.setAttribute("type","text/javascript"),i.setAttribute("src",o),i.setAttribute("async",""),i.onload=()=>{new HeartSlider},document.head.appendChild(i),document.head.appendChild(e)}},M={id:"homepage-slideshow",class:"heart-slideshow"},U=u('<div class="heart-slide"><figure class="image-holder"><img style="object-position:35% 50%;" data-src="/homepage/heart-slide-08.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="/homepage/heart-slide-03.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="/homepage/heart-slide-01.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="/homepage/heart-slide-02.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="/homepage/heart-slide-04.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="/homepage/heart-slide-05.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="/homepage/heart-slide-06.jpg" alt=""></figure></div><div class="heart-slide"><figure class="image-holder"><img data-src="/homepage/heart-slide-07.jpg" alt=""></figure></div>',8),D=[U];function F(n,d,a,e,o,i){return h(),f("div",M,D)}var G=v(R,[["render",F]]);const W={},J=t("p",null,"All photography and code has been created and maintained by\xA0Austen\xA0Hart,\xA0in\xA0Philadelphia.",-1),K=t("p",null,"All rights reserved.",-1),Y=[J,K];function Q(n,d){return h(),f("footer",null,Y)}var X=v(W,[["render",Q]]);const Z={id:"intro"},ee={id:"button-holder"},te=s("Github"),ae=s("JsDelivr"),de=t("div",{class:"scroll-instruct"},[t("a",{href:"#docs"},"Documentation")],-1),oe={id:"docs"},se=t("div",{class:"text-block"},[t("h3",null,"Purpose"),t("blockquote",null,[t("p",null,[t("em",null,"Built for image-forward websites, HeartSlider is a simple and elegant slideshow that is designed for developers. It is adaptable, and customizable \u2014 with just enough styling to blend into any design system.")])])],-1),ne={class:"text-block"},ie=t("h3",null,"Getting Started",-1),re=t("p",null,[s("Make sure to include "),t("code",null,"heartslider.min.js"),s(" and "),t("code",null,"heartslider.min.css"),s(" files to your project. You can either download and add to them to your project\u2019s directory, or use a CDN like jsDelivr.")],-1),le={class:"version-picker",role:"tablist","aria-label":"HeartSlider version source"},ce=t("span",{class:"label"},"GitHub",-1),he={class:"version-link"},fe=t("span",{class:"version-prefix"},"v",-1),ue=t("span",{class:"label"},"npm",-1),pe={class:"version-link"},ve=t("span",{class:"version-prefix"},"v",-1),me={class:"version-info"},ge={class:"version-note"},ye=t("em",null,"Selected source:",-1),be={class:"version-links"},we=["href"],_e=t("span",{"aria-hidden":"true"}," \xB7 ",-1),Se=["href"],ke=t("p",null,"Prefer npm? Install HeartSlider with:",-1),Te=t("p",null,"Then import the bundled files in your entry script:",-1),xe=t("p",null,"Then, add your markup.",-1),Ce=t("p",null,[s("Slides can also hold a "),t("code",null,"<picture>"),s(" with several sources, or a video. Use the same lazy "),t("code",null,"data-"),s(" attributes on each "),t("code",null,"<source>"),s(", and HeartSlider swaps them in as the slide comes up.")],-1),je=t("p",null,"Finally, initiate the slideshow with a new HeartSlider class and set your options in your javascript file.",-1),qe={class:"text-block"},He=t("h3",null,"Default Options",-1),$e={class:"text-block"},Ve=u("<h3>Actions</h3><p> Declare the slideshow as a constant, then run <code>pause()</code> or <code>resume()</code> to stop or start autoplay. Use the <code>next()</code>, <code>previous()</code>, and <code>goTo(\u{1D465})</code> methods to manually advance the slideshow. Use <code>loadSlideContent(\u{1D465})</code> or <code>loadAll()</code> to preload content on demand, and <code>destroy()</code> to remove everything and reset the <small>DOM</small>. </p>",2),Ee={class:"text-block"},Le=t("h3",null,"Events",-1),Oe=t("p",null,[s(" Currently, there are three callback events that you can use to hook into the slideshows. The "),t("code",null,"transitionStart"),s(" event will happen immediately as a new slide begins to transition in, the "),t("code",null,"transitionEnd"),s(" will happen at the end of that transition, and the "),t("code",null,"firstImageLoad"),s(" event will trigger when the image in the first slide finishes loading. ")],-1),Ae={class:"text-block",id:"accessibility"},Be=u("<h3>Accessibility</h3><p> HeartSlider is accessible out of the box \u2014 none of this needs configuring. The slideshow is exposed as a labelled region, clickable progress indicators are real buttons with names like <em>Go to slide 3 of 8</em>, the active one is marked with <code>aria-current</code>, and keyboard focus stays visible on every control. </p><p> With <code>keyboard</code> enabled the slideshow becomes focusable, so a keyboard user can tab to it and then use the left and right arrows to move a slide, or <code>Home</code> and <code>End</code> to jump to the first and last. Arrow presses are swallowed by the slideshow, so the page will not scroll out from under it. Set <code>keyboard: false</code> to leave key handling to your own code. </p>",3),Ie={class:"text-block",id:"styling"},ze=t("h3",null,"Styling with CSS",-1),Ne=t("p",null,[s("Everything HeartSlider draws is sized relative to the "),t("em",null,"slideshow"),s(" rather than the viewport, so a slideshow sitting in a narrow column spaces its controls just like a full-bleed one. Reach for these custom properties rather than overriding the rules themselves.")],-1),Pe=t("p",null,[s(" Indicator spacing is proportional: each indicator takes an equal slot \u2014 the track width divided by the number of slides \u2014 and "),t("code",null,"--gap-ratio"),s(" sets the gap as a fraction of one slot. Because the gap scales with the slot, spacing stays sensible whether there are three slides or thirty. Set "),t("code",null,"--indicator-gap"),s(" instead if you would rather give an absolute value. ")],-1),Re=t("p",null,[t("code",null,"--total"),s(" is written to the indicator container by HeartSlider and holds the number of slides \u2014 useful inside your own "),t("code",null,"calc()"),s(", as above, but treat it as read-only.")],-1),Me={class:"text-block",id:"placement"},Ue=t("h3",null,"Moving the Counter and Indicators",-1),De=t("p",null,[s(" By default the counter and progress indicators sit inside the slideshow, over the slides. Give either one a "),t("code",null,"container"),s(" \u2014 a selector or an element \u2014 to put it somewhere else on the page, like a caption bar beneath the slideshow. If that container already has the "),t("code",null,"heart-counter"),s(" or "),t("code",null,"progress-container"),s(" class, HeartSlider uses it as is, so you can place it exactly where you want in your markup. ")],-1),Fe=t("p",null,[s(" Moved elements get a "),t("code",null,"heart-detached"),s(" class and sit in the normal flow of their new parent rather than over the slides, so style them from there. The counter is white by default, so on a light background set "),t("code",null,"--counter-color"),s(". If the selector matches nothing, HeartSlider logs a warning and keeps the element in the slideshow. "),t("code",null,"destroy()"),s(" removes the elements it created and empties any you supplied. ")],-1),Ge={class:"text-block table-row"},We=t("h3",null,"All Options",-1),Je={data(){return{selectedVersionSource:"github",versions:{github:"3.6.1",npm:"3.6.1"}}},computed:{activeVersion(){return this.selectedVersionSource==="npm"?this.versions.npm:this.versions.github},installSnippet(){const d=this.selectedVersionSource==="npm"?`https://cdn.jsdelivr.net/npm/heartslider@${this.activeVersion}/dist`:`https://cdn.jsdelivr.net/gh/austenhart/heartslider@${this.activeVersion}/dist`,a=`<script defer src="${d}/heartslider.min.js">`,e="<\/script>",o=`<link rel="stylesheet" href="${d}/heartslider.min.css">`;return`${a}${e}
${o}`},selectedVersionLabel(){return this.selectedVersionSource==="npm"?"npm":"GitHub"},githubReleaseUrl(){return`https://github.com/austenhart/heartslider/releases/tag/v${this.versions.github}`},npmPackageUrl(){return`https://www.npmjs.com/package/heartslider/v/${this.versions.npm}`}},methods:{selectVersionSource(n){this.selectedVersionSource=n},copyTextToClipboard(n){return navigator.clipboard&&typeof navigator.clipboard.writeText=="function"?navigator.clipboard.writeText(n):new Promise((d,a)=>{const e=document.createElement("textarea");e.value=n,e.setAttribute("readonly",""),e.style.position="fixed",e.style.top="-1000px",e.style.left="-1000px",document.body.appendChild(e),e.focus(),e.select();try{const o=document.execCommand("copy");if(document.body.removeChild(e),!o){a(new Error("Copy command failed"));return}d()}catch(o){document.body.removeChild(e),a(o)}})},attachCopyButtons(){document.querySelectorAll("pre").forEach(d=>{if(d.querySelector(".copy-code-button"))return;const a=d.querySelector("code");if(!a)return;const e=document.createElement("button");e.type="button",e.className="copy-code-button",e.setAttribute("aria-label","Copy code snippet"),e.innerHTML=`
					<span class="copy-code-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
							<path d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10z" />
							<path d="M18 5H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16h-8V7h8z" />
						</svg>
					</span>
					<span class="copy-code-confirmation" aria-hidden="true">Copied</span>
				`,e.addEventListener("click",async()=>{const o=a.innerText;try{await this.copyTextToClipboard(o),e.classList.remove("copy-failed"),e.classList.add("copy-confirmed"),e.copyResetTimer&&clearTimeout(e.copyResetTimer),e.copyResetTimer=setTimeout(()=>{e.classList.remove("copy-confirmed")},1400)}catch{e.classList.add("copy-failed"),e.copyResetTimer&&clearTimeout(e.copyResetTimer),e.copyResetTimer=setTimeout(()=>{e.classList.remove("copy-failed")},1400)}}),d.appendChild(e)})},async fetchLatestVersions(){const n=fetch("https://api.github.com/repos/austenhart/heartslider/releases/latest").then(a=>{if(!a.ok)throw new Error("Unable to fetch GitHub release");return a.json()}).then(a=>{const e=String(a.tag_name||"").replace(/^v/i,"").trim();e&&(this.versions.github=e)}).catch(()=>{}),d=fetch("https://registry.npmjs.org/heartslider/latest").then(a=>{if(!a.ok)throw new Error("Unable to fetch npm release");return a.json()}).then(a=>{const e=String(a.version||"").trim();e&&(this.versions.npm=e)}).catch(()=>{});await Promise.all([n,d])},highlightCodeBlocks(){document.querySelectorAll("pre code:not(.hljs)").forEach(n=>{p.highlightElement(n)}),this.attachCopyButtons()}},async mounted(){await this.fetchLatestVersions(),this.highlightCodeBlocks()},updated(){this.highlightCodeBlocks()}},Ke=Object.assign(Je,{setup(n){return(d,a)=>{const e=T("highlightjs");return h(),f(b,null,[t("section",Z,[l(G),t("div",ee,[l(w,{accent:"#000",href:"https://www.github.com/austenhart/heartslider"},{default:y(()=>[te]),_:1}),l(w,{accent:"#EB9642",href:"https://www.jsdelivr.com/package/gh/austenhart/heartslider"},{default:y(()=>[ae]),_:1})]),de]),t("section",oe,[se,t("div",ne,[ie,re,t("div",le,[t("button",{type:"button",class:m(["version-pill",{active:d.selectedVersionSource==="github"}]),onClick:a[0]||(a[0]=o=>d.selectVersionSource("github"))},[ce,t("span",he,[fe,s(g(d.versions.github),1)])],2),t("button",{type:"button",class:m(["version-pill",{active:d.selectedVersionSource==="npm"}]),onClick:a[1]||(a[1]=o=>d.selectVersionSource("npm"))},[ue,t("span",pe,[ve,s(g(d.versions.npm),1)])],2)]),l(e,{class:"install-snippet",language:"xml",code:d.installSnippet},null,8,["code"]),t("div",me,[t("p",ge,[ye,s(" "+g(d.selectedVersionLabel),1)]),t("p",be,[t("a",{href:d.githubReleaseUrl,target:"_blank",rel:"noopener"},"View GitHub release",8,we),_e,t("a",{href:d.npmPackageUrl,target:"_blank",rel:"noopener"},"View npm version",8,Se)])]),d.selectedVersionSource==="npm"?(h(),f(b,{key:0},[ke,l(e,{language:"bash",code:"npm install heartslider"}),Te,l(e,{language:"javascript",code:`import "heartslider/dist/heartslider.min.css";
import "heartslider/dist/heartslider.min.js";`})],64)):x("",!0),xe,l(e,{language:"xml",code:`<div class="heart-slideshow">
	<div class="heart-slide">
		<figure class="image-holder">
			<img 
				data-sizes="(min-aspect-ratio: 1/1) 100vw, 140vw" 
				data-src="img/image-01.jpg" 
				data-srcset="img/image-01.jpg 1x, img/image-01@2x 2x" 
				alt="" />
		</figure>
	</div>
	...
</div>`}),Ce,l(e,{language:"xml",code:`<div class="heart-slide">
	<figure class="image-holder">
		<picture>
			<source media="(max-width: 600px)" data-srcset="img/image-02-portrait.jpg" />
			<img data-src="img/image-02.jpg" alt="" />
		</picture>
	</figure>
</div>
<div class="heart-slide">
	<video muted>
		<source data-src="video/clip.mp4" type="video/mp4" />
		<source data-src="video/clip.webm" type="video/webm" />
	</video>
</div>`}),je,l(e,{language:"javascript",code:`new HeartSlider({
	slideshow: ".heart-slideshow",
	slides: ".heart-slide",
	transition: 3000,
	delay: 1000,
});`})]),t("div",qe,[He,l(e,{language:"javascript",code:`new HeartSlider({
	allowFullVideoPlayback: false,
	buttons: false,
	clickToAdvance: false,
	keyboard: true,
	label: "Slideshow",
	debug: false,
	delayStart: 0,
	slideshow: ".heart-slideshow",
	slides: ".heart-slide",
	transition: 3000,
	manualTransition: 400,
	delay: 1000,
	loop: true,
	randomize: false, // or "start" / "all"
	paused: false,
	effect: "fadeOut",
	pauseOnInactiveWindow: false,
	progressive: 1,
	swipe: true,
	stackOnMobile: {
		enable: false,
		threshold: 768,
	},
	counter: {
		enable: false,
		separator: " / ",
		container: null, // selector or element
	},
	progressIndicators: {
		enable: false,
		type: "dash", // or "dot"
		clickable: true,
		color: "#fff",
		container: null, // selector or element
	},
});`})]),t("div",$e,[Ve,l(e,{language:"javascript",code:`const myHomepageSlideshow = new HeartSlider();
					
// Pause
myHomepageSlideshow.pause();
// Resume
myHomepageSlideshow.resume();

// Next Slide
myHomepageSlideshow.next();
// Previous Slide
myHomepageSlideshow.previous();
// Jump To Certain Slide
myHomepageSlideshow.goTo(\u{1D465});

// Preload one slide or all slides
myHomepageSlideshow.loadSlideContent(\u{1D465});
myHomepageSlideshow.loadAll();

// DESTROY
myHomepageSlideshow.destroy();`})]),t("div",Ee,[Le,Oe,l(e,{language:"javascript",code:`const myHomepageSlideshow = new HeartSlider();
					
// Events
myHomepageSlideshow.on("transitionStart", function (slideshow, slideshowElement, currentSlide) {
	/* Code that runs on the START of each new slide goes here */
	console.log({ slideshow }, { slideshowElement }, { currentSlide });
});
myHomepageSlideshow.on("transitionEnd", function (slideshow, slideshowElement, currentSlide) {
	/* Code that runs at the END of each transition goes here */
});
myHomepageSlideshow.on("firstImageLoad", function (slideshow, slideshowElement, currentSlide) {
	document.body.classList.add("remove-intro");
});`})]),t("div",Ae,[Be,l(e,{language:"javascript",code:`new HeartSlider({
	// Left / Right move one slide, Home / End jump to the ends.
	keyboard: true,

	// The name a screen reader announces for the slideshow.
	// Skipped if your element already has its own aria-label.
	label: "Photos from the 2026 collection",

	// Clickable indicators are buttons, each with an accessible name.
	progressIndicators: {
		type: "dot",
		clickable: true,
	},
});`})]),t("div",Ie,[ze,Ne,Pe,l(e,{language:"css",code:`/* Progress indicators */
.progress-container {
	--gap-ratio: 0.4; /* gap as a fraction of one indicator slot */
	--track-width: 60%; /* track width, relative to the slideshow */
	--track-max-width: none; /* cap the track, or none to fill the width */
	--indicator-color: #fff;
}

/* Dots keep a fixed size, so their spacing comes from the slot.
   Widen the track to spread them further apart. */
.progress-container.type-dot {
	--dot-size: 6px;
	--track-max-width: calc(var(--dot-size) * 6 * var(--total));
}

/* Previous / next arrows */
.heart-prev,
.heart-next {
	--arrow-inset: 4em; /* distance in from the slideshow edge */
	--arrow-size: 1.35em;
	--arrow-color: #fff;
}

/* Slide counter */
.heart-counter {
	--counter-color: #fff;
	--counter-size: 0.875rem;
	--counter-opacity: 0.8;
}

/* Keyboard focus ring */
.heart-slideshow {
	--focus-ring-color: #fff;
	--focus-ring-width: 2px;
}`}),Re]),t("div",Me,[Ue,De,l(e,{language:"javascript",autodetect:!1,code:`new HeartSlider({
	progressIndicators: {
		type: "dot",
		container: "#slideshow-dots",
	},
	counter: {
		container: document.querySelector(".caption .count"),
	},
});`}),Fe]),t("div",Ge,[We,l(P)])]),l(X)],64)}}});p.registerLanguage("javascript",C);p.registerLanguage("xml",j);p.registerLanguage("css",q);const _=H(Ke);_.use($);_.mount("#app");
