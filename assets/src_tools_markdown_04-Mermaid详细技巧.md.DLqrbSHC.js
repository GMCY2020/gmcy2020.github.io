import{_ as i,E as l,c as r,J as p,w as t,m as a,t as d,a4 as s,o as h}from"./chunks/framework.DKKlJIzX.js";const f=JSON.parse('{"title":"1. Flowchart","description":"","frontmatter":{},"headers":[],"relativePath":"src/tools/markdown/04-Mermaid详细技巧.md","filePath":"src/tools/markdown/04-Mermaid详细技巧.md","lastUpdated":null}'),c={name:"src/tools/markdown/04-Mermaid详细技巧.md"},o=a("div",{style:{"font-size":"45px"}},"Mermaid详细技巧",-1),b=s('<br><blockquote><div style="display:flex;justify-content:space-between;align-items:center;"><div><div>作者: GMCY</div><div>分类: 基础</div></div><div><div>创建时间: 2023年5月11日 08:39</div><div>更新时间: 2023年5月11日 08:39</div></div></div></blockquote><br><blockquote><p>参考链接: <a href="https://mermaid.js.org/intro/" target="_blank" rel="noreferrer">https://mermaid.js.org/intro/</a></p></blockquote><br><h1 id="_1-flowchart" tabindex="-1">1. Flowchart <a class="header-anchor" href="#_1-flowchart" aria-label="Permalink to &quot;1. Flowchart&quot;">​</a></h1><br><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><br><pre><code>流程图\nMermaid 的基础语法\n重点有 节点形状 和 箭头类型 \n</code></pre><br><hr style="height:2px;border:none;border-top:2px dotted #7a7a7a;"><h2 id="_1-1-一个节点-默认" tabindex="-1">1.1 一个节点(默认) <a class="header-anchor" href="#_1-1-一个节点-默认" aria-label="Permalink to &quot;1.1 一个节点(默认)&quot;">​</a></h2><p><code>代码</code></p><pre><code>```mermaid\nflowchart LR\n    id\n```\n</code></pre><p><code>预览</code></p><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr style="height:2px;border:none;border-top:2px dotted #7a7a7a;"><h2 id="_1-2-一个带有文本的节点" tabindex="-1">1.2 一个带有文本的节点 <a class="header-anchor" href="#_1-2-一个带有文本的节点" aria-label="Permalink to &quot;1.2 一个带有文本的节点&quot;">​</a></h2><p><code>代码</code></p><pre><code>```mermaid\nflowchart LR\n    id1[文本在盒里面]\n```\n</code></pre><p><code>预览</code></p><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id1[文本在盒里面]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr style="height:2px;border:none;border-top:2px dotted #7a7a7a;"><h2 id="_1-3-图" tabindex="-1">1.3 图 <a class="header-anchor" href="#_1-3-图" aria-label="Permalink to &quot;1.3 图&quot;">​</a></h2><p><code>代码</code></p><pre><code>```mermaid\nflowchart TD\n    开始 --&gt; 结束\n```\n\n```mermaid\nflowchart LR\n    开始 --&gt; 结束\n```\n</code></pre><p><code>参数</code></p><pre><code>flowchart                           流程图\n\nTB(Top Bottom) 或者 TD(Top Down)    箭头方向从上到下\nBT                                  箭头方向从下到上\nLR(Left Right)                      箭头方向从左到右\nRL                                  箭头方向从右到左\n</code></pre><p><code>预览</code></p><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart TD</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    开始 --&gt; 结束</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    开始 --&gt; 结束</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr style="height:2px;border:none;border-top:2px dotted #7a7a7a;"><h2 id="_1-4-节点形状" tabindex="-1">1.4 节点形状 <a class="header-anchor" href="#_1-4-节点形状" aria-label="Permalink to &quot;1.4 节点形状&quot;">​</a></h2><br><blockquote><p>通过 [] {} () &lt;&gt; 的排列组合给文本添加不同的边框 <br> 默认 [] <br><br> 例如下列</p></blockquote><br><h2 id="_1-4-1-圆弧" tabindex="-1">1.4.1 圆弧 <a class="header-anchor" href="#_1-4-1-圆弧" aria-label="Permalink to &quot;1.4.1 圆弧&quot;">​</a></h2><br><pre><code>```mermaid\nflowchart LR\n    id(圆弧)\n```\n</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id(圆弧)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-4-2-更圆弧" tabindex="-1">1.4.2 更圆弧 <a class="header-anchor" href="#_1-4-2-更圆弧" aria-label="Permalink to &quot;1.4.2 更圆弧&quot;">​</a></h2><br><pre><code>```mermaid\nflowchart LR\n    id([更圆弧])\n```\n</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id([更圆弧])</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-4-3-子程序" tabindex="-1">1.4.3 子程序 <a class="header-anchor" href="#_1-4-3-子程序" aria-label="Permalink to &quot;1.4.3 子程序&quot;">​</a></h2><br><pre><code>```mermaid\nflowchart LR\n    id[[子程序]]\n```\n</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id[[子程序]]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-4-4-数据库" tabindex="-1">1.4.4 数据库 <a class="header-anchor" href="#_1-4-4-数据库" aria-label="Permalink to &quot;1.4.4 数据库&quot;">​</a></h2><br><pre><code>```mermaid\nflowchart LR\n    id[(数据库)]\n```\n</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id[(数据库)]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-4-5-圆形" tabindex="-1">1.4.5 圆形 <a class="header-anchor" href="#_1-4-5-圆形" aria-label="Permalink to &quot;1.4.5 圆形&quot;">​</a></h2><br><pre><code>```mermaid\nflowchart LR\n    id((圆形))\n```\n</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id((圆形))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-4-6-书签" tabindex="-1">1.4.6 书签 <a class="header-anchor" href="#_1-4-6-书签" aria-label="Permalink to &quot;1.4.6 书签&quot;">​</a></h2><br><pre><code>```mermaid\nflowchart LR\n    id&gt;书签]\n```\n</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id&gt;书签]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-4-7-棱形" tabindex="-1">1.4.7 棱形 <a class="header-anchor" href="#_1-4-7-棱形" aria-label="Permalink to &quot;1.4.7 棱形&quot;">​</a></h2><br><pre><code>```mermaid\nflowchart LR\n    id{棱形}\n```\n</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id{棱形}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-4-8-六边形" tabindex="-1">1.4.8 六边形 <a class="header-anchor" href="#_1-4-8-六边形" aria-label="Permalink to &quot;1.4.8 六边形&quot;">​</a></h2><br>',74),m=s(`<div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id{{六边形}}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-4-9-平行四边形" tabindex="-1">1.4.9 平行四边形 <a class="header-anchor" href="#_1-4-9-平行四边形" aria-label="Permalink to &quot;1.4.9 平行四边形&quot;">​</a></h2><br><pre><code>\`\`\`mermaid
flowchart LR
    id1[/平行四边形/]
    id2[\\平行四边形\\]
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id1[/平行四边形/]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id2[\\平行四边形\\]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><br><br></p><h2 id="_1-4-10-梯形" tabindex="-1">1.4.10 梯形 <a class="header-anchor" href="#_1-4-10-梯形" aria-label="Permalink to &quot;1.4.10 梯形&quot;">​</a></h2><br><pre><code>\`\`\`mermaid
flowchart LR
    id1[/正梯形\\]
    id2[\\倒梯形/]
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id1[/正梯形\\]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id2[\\倒梯形/]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><br><br></p><h2 id="_1-4-11-双圆形" tabindex="-1">1.4.11 双圆形 <a class="header-anchor" href="#_1-4-11-双圆形" aria-label="Permalink to &quot;1.4.11 双圆形&quot;">​</a></h2><br><pre><code>\`\`\`mermaid
flowchart LR
    id(((双圆形)))
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id(((双圆形)))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><br><hr style="height:2px;border:none;border-top:2px dotted #7a7a7a;"><h2 id="_1-5-箭头类型" tabindex="-1">1.5 箭头类型 <a class="header-anchor" href="#_1-5-箭头类型" aria-label="Permalink to &quot;1.5 箭头类型&quot;">​</a></h2><br><blockquote><p>通过 - &gt; | . = &amp; o x 文本 等的排列组合给文本添加不同的边框 <br><br> 例如下列</p></blockquote><br><h2 id="_1-5-1-带箭头实线" tabindex="-1">1.5.1 带箭头实线 <a class="header-anchor" href="#_1-5-1-带箭头实线" aria-label="Permalink to &quot;1.5.1 带箭头实线&quot;">​</a></h2><br><pre><code>\`\`\`mermaid
flowchart LR
    A --&gt; B
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A --&gt; B</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-5-2-不带箭头实线" tabindex="-1">1.5.2 不带箭头实线 <a class="header-anchor" href="#_1-5-2-不带箭头实线" aria-label="Permalink to &quot;1.5.2 不带箭头实线&quot;">​</a></h2><br><pre><code>\`\`\`mermaid
flowchart LR
    A --- B
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A --- B</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-5-3-带文本实线" tabindex="-1">1.5.3 带文本实线 <a class="header-anchor" href="#_1-5-3-带文本实线" aria-label="Permalink to &quot;1.5.3 带文本实线&quot;">​</a></h2><br><pre><code>\`\`\`mermaid
flowchart LR
    A -- 文本 --- B
\`\`\`

\`\`\`mermaid
flowchart LR
    A ---| 文本 | B
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A -- 文本 --- B</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A ---| 文本 | B</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-5-4-带文本、箭头实线" tabindex="-1">1.5.4 带文本、箭头实线 <a class="header-anchor" href="#_1-5-4-带文本、箭头实线" aria-label="Permalink to &quot;1.5.4 带文本、箭头实线&quot;">​</a></h2><br><pre><code>\`\`\`mermaid
flowchart LR
    A --&gt;| text | B
\`\`\`

\`\`\`mermaid
flowchart LR
    A -- text --&gt; B
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A --&gt;| text | B</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A -- text --&gt; B</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-5-5-带箭头虚线" tabindex="-1">1.5.5 带箭头虚线 <a class="header-anchor" href="#_1-5-5-带箭头虚线" aria-label="Permalink to &quot;1.5.5 带箭头虚线&quot;">​</a></h2><br><pre><code>\`\`\`mermaid
flowchart LR
A -.-&gt; B
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   A -.-&gt; B</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-5-6-带箭头、文本虚线" tabindex="-1">1.5.6 带箭头、文本虚线 <a class="header-anchor" href="#_1-5-6-带箭头、文本虚线" aria-label="Permalink to &quot;1.5.6 带箭头、文本虚线&quot;">​</a></h2><br><pre><code>\`\`\`mermaid
flowchart LR
A -. text .-&gt; B
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   A -. text .-&gt; B</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-5-7-带箭头粗实线" tabindex="-1">1.5.7 带箭头粗实线 <a class="header-anchor" href="#_1-5-7-带箭头粗实线" aria-label="Permalink to &quot;1.5.7 带箭头粗实线&quot;">​</a></h2><br><pre><code>\`\`\`mermaid
flowchart LR
A ==&gt; B
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   A ==&gt; B</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-5-8-带箭头、文本粗实线" tabindex="-1">1.5.8 带箭头、文本粗实线 <a class="header-anchor" href="#_1-5-8-带箭头、文本粗实线" aria-label="Permalink to &quot;1.5.8 带箭头、文本粗实线&quot;">​</a></h2><br><pre><code>\`\`\`mermaid
flowchart LR
A == text ==&gt; B
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   A == text ==&gt; B</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-5-9-无线" tabindex="-1">1.5.9 无线 <a class="header-anchor" href="#_1-5-9-无线" aria-label="Permalink to &quot;1.5.9 无线&quot;">​</a></h2><br><pre><code>\`\`\`mermaid
flowchart LR
    A ~~~ B
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A ~~~ B</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><br><br></p><h2 id="_1-5-10-链式链接" tabindex="-1">1.5.10 链式链接 <a class="header-anchor" href="#_1-5-10-链式链接" aria-label="Permalink to &quot;1.5.10 链式链接&quot;">​</a></h2><br><pre><code>\`\`\`mermaid
flowchart LR
    A1 -- 文本1 --&gt; B1 -- 文本2 --&gt; C1

    A2 --&gt; B2 &amp; C2--&gt; D2

    A3 &amp; B3 --&gt; C3 &amp; D3

    A4 --&gt; C4
    A4 --&gt; D4
    B4 --&gt; C4
    B4 --&gt; D4
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A1 -- 文本1 --&gt; B1 -- 文本2 --&gt; C1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A2 --&gt; B2 &amp; C2--&gt; D2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A3 &amp; B3 --&gt; C3 &amp; D3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A4 --&gt; C4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A4 --&gt; D4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B4 --&gt; C4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B4 --&gt; D4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><br><br></p><h2 id="_1-5-11-新的箭头类型" tabindex="-1">1.5.11 新的箭头类型 <a class="header-anchor" href="#_1-5-11-新的箭头类型" aria-label="Permalink to &quot;1.5.11 新的箭头类型&quot;">​</a></h2><br><pre><code>\`\`\`mermaid
flowchart LR
    A1 --o B1
    B1 --x C1

    A2 o--o B2
    B2 &lt;--&gt; C2
    C2 x--x D2
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A1 --o B1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B1 --x C1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A2 o--o B2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B2 &lt;--&gt; C2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C2 x--x D2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><br><br></p><h2 id="_1-5-11-新的箭头类型-1" tabindex="-1">1.5.11 新的箭头类型 <a class="header-anchor" href="#_1-5-11-新的箭头类型-1" aria-label="Permalink to &quot;1.5.11 新的箭头类型&quot;">​</a></h2><br><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A1 --o B1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B1 --x C1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A2 o--o B2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B2 &lt;--&gt; C2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C2 x--x D2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><hr><h1 id="_2-sequence-diagram" tabindex="-1">2 Sequence Diagram <a class="header-anchor" href="#_2-sequence-diagram" aria-label="Permalink to &quot;2 Sequence Diagram&quot;">​</a></h1>`,84);function u(e,k,g,E,v,y){const n=l("center");return h(),r("div",null,[p(n,null,{default:t(()=>[o]),_:1}),b,a("pre",null,[a("code",null,"```mermaid\nflowchart LR\n    id"+d(e.六边形)+"\n```\n",1)]),m])}const w=i(c,[["render",u]]);export{f as __pageData,w as default};
