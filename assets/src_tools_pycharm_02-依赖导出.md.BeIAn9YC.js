import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.DKKlJIzX.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/tools/pycharm/02-依赖导出.md","filePath":"src/tools/pycharm/02-依赖导出.md","lastUpdated":null}'),n={name:"src/tools/pycharm/02-依赖导出.md"},t=e(`<div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pipreqs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pipreqs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --encoding=utf-8</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> freeze</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,3),p=[t];function l(r,h,d,c,o,k){return i(),a("div",null,p)}const m=s(n,[["render",l]]);export{g as __pageData,m as default};
