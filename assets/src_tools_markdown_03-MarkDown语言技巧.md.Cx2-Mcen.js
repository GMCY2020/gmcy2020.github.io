import{_ as s,a as n}from"./chunks/MarkDownPreviewMermaidSunpport.s5WDGWIC.js";import{_ as a,c as e,o as i,a4 as p}from"./chunks/framework.DKKlJIzX.js";const g=JSON.parse('{"title":"MarkDown语言技巧","description":"","frontmatter":{},"headers":[],"relativePath":"src/tools/markdown/03-MarkDown语言技巧.md","filePath":"src/tools/markdown/03-MarkDown语言技巧.md","lastUpdated":null}'),l={name:"src/tools/markdown/03-MarkDown语言技巧.md"},t=p(`<h1 id="markdown语言技巧" tabindex="-1">MarkDown语言技巧 <a class="header-anchor" href="#markdown语言技巧" aria-label="Permalink to &quot;MarkDown语言技巧&quot;">​</a></h1><blockquote><div style="display:flex;justify-content:space-between;align-items:center;"><div><div>作者: GMCY</div><div>分类: 基础</div></div><div><div>创建时间: 2023年5月09日 21:53</div><div>更新时间: 2023年5月11日 08:39</div></div></div></blockquote><br><h2 id="_1-标题" tabindex="-1">1. 标题 <a class="header-anchor" href="#_1-标题" aria-label="Permalink to &quot;1. 标题&quot;">​</a></h2><p><code>格式</code></p><pre><code># 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题 
</code></pre><p><code>预览</code></p><h1 id="h1" tabindex="-1">h1 <a class="header-anchor" href="#h1" aria-label="Permalink to &quot;h1&quot;">​</a></h1><h2 id="h2" tabindex="-1">h2 <a class="header-anchor" href="#h2" aria-label="Permalink to &quot;h2&quot;">​</a></h2><h3 id="h3" tabindex="-1">h3 <a class="header-anchor" href="#h3" aria-label="Permalink to &quot;h3&quot;">​</a></h3><h4 id="h4" tabindex="-1">h4 <a class="header-anchor" href="#h4" aria-label="Permalink to &quot;h4&quot;">​</a></h4><h5 id="h5" tabindex="-1">h5 <a class="header-anchor" href="#h5" aria-label="Permalink to &quot;h5&quot;">​</a></h5><h6 id="h6" tabindex="-1">h6 <a class="header-anchor" href="#h6" aria-label="Permalink to &quot;h6&quot;">​</a></h6><hr><h2 id="_2-图片" tabindex="-1">2. 图片 <a class="header-anchor" href="#_2-图片" aria-label="Permalink to &quot;2. 图片&quot;">​</a></h2><p><code>格式</code></p><pre><code>![图片的替代文字](图片路径或网址 &quot;可选标题&quot;)

&lt;img src=&quot;./docs/白露.png&quot; width=&quot;50%&quot;&gt;

&lt;img decoding=&quot;async&quot; src=&quot;./docs/白露.png&quot; width=&quot;50%&quot;&gt;
</code></pre><p><code>预览</code></p><p><img src="`+s+'" alt="白露" title="BaiLu"></p><img src="'+s+`" width="20%"><hr><h2 id="_3-强调" tabindex="-1">3. 强调 <a class="header-anchor" href="#_3-强调" aria-label="Permalink to &quot;3. 强调&quot;">​</a></h2><p><code>格式</code></p><pre><code>*斜体* 或 _斜体_ (Cmd+B)

**粗体** 或 __粗体__ (Cmd+I)

***粗斜体*** 或  ___粗斜体___

\\*正常显示\\*
</code></pre><p><code>预览</code></p><p><em>斜体</em></p><p><strong>粗体</strong></p><p><em><strong>粗斜体</strong></em></p><p>*正常显示*</p><hr><h2 id="_4-代码块" tabindex="-1">4. 代码块 <a class="header-anchor" href="#_4-代码块" aria-label="Permalink to &quot;4. 代码块&quot;">​</a></h2><p><code>格式</code></p><pre><code>\`代码\`

\\t 或 4个空格

\`\`\`语言
代码
\`\`\`
</code></pre><p><code>预览</code></p><p><code>int a = 1</code></p><pre><code>int a = 1
</code></pre><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h2 id="_5-换行" tabindex="-1">5. 换行 <a class="header-anchor" href="#_5-换行" aria-label="Permalink to &quot;5. 换行&quot;">​</a></h2><pre><code>2个空格 + 回车
</code></pre><hr><h2 id="_6-引用" tabindex="-1">6. 引用 <a class="header-anchor" href="#_6-引用" aria-label="Permalink to &quot;6. 引用&quot;">​</a></h2><p><code>格式</code></p><pre><code>&gt; 引用的资料
&gt;&gt; 引用的资料

(可嵌套)
</code></pre><p><code>预览</code></p><blockquote><p>资料1</p></blockquote><blockquote><p>资料2</p><blockquote><p>资料2</p></blockquote></blockquote><hr><h2 id="_7-链接" tabindex="-1">7.链接 <a class="header-anchor" href="#_7-链接" aria-label="Permalink to &quot;7.链接&quot;">​</a></h2><p><code>格式</code></p><pre><code>[链接文字](链接地址)

&lt;链接地址&gt;

[链接文字][链接变量]
[链接变量]: 链接
</code></pre><p><code>预览</code></p><p><a href="./docs/%E7%99%BD%E9%9C%B2.png">白露</a></p><p><a href="https://www.runoob.com/markdown/md-link.html" target="_blank" rel="noreferrer">https://www.runoob.com/markdown/md-link.html</a></p><p><a href="https://www.baidu.com" target="_blank" rel="noreferrer">Baidu</a></p><hr><h2 id="_8-线" tabindex="-1">8. 线 <a class="header-anchor" href="#_8-线" aria-label="Permalink to &quot;8. 线&quot;">​</a></h2><p><code>格式</code></p><pre><code>***
---
~~删除线~~
&lt;u&gt;下划线&lt;/u&gt;


&lt;hr style=&quot;height:2px;border:none;border-top:2px dotted #185598;&quot; /&gt;   园点虚线
height:2px;是hr的高度
border:none;是没有边框
border-top:2px dotted #185598;是设置横线的样式
dotted  虚线  #185598  颜色

&lt;hr style=&quot;height:1px;border:none;border-top:1px dashed #0066CC;&quot; /&gt;    块虚线

&lt;hr style=&quot;height:1px;border:none;border-top:1px solid #555555;&quot; /&gt;  实线，一条直线

&lt;hr style=&quot;height:3px;border:none;border-top:3px double red;&quot; /&gt; 两条紧密实线，

&lt;hr style=&quot;height:5px;border:none;border-top:5px ridge green;&quot; /&gt; 两种颜色

&lt;hr style=&quot;height:10px;border:none;border-top:2px groove skyblue;&quot; /&gt;  两种颜色
border-top:10px groove skyblue;    groove  上颜色        skyblue   下颜色
</code></pre><p><code>预览</code></p><hr><hr><p><s>删除线</s></p><p><u>下划线</u></p><hr style="height:2px;border:none;border-top:2px dotted #185598;"><hr style="height:1px;border:none;border-top:1px dashed #0066CC;"><hr style="height:1px;border:none;border-top:1px solid #555555;"><hr style="height:3px;border:none;border-top:3px double red;"><hr style="height:5px;border:none;border-top:5px ridge green;"><hr style="height:10px;border:none;border-top:2px groove skyblue;"><hr><h2 id="_9-列表标记" tabindex="-1">9. 列表标记 <a class="header-anchor" href="#_9-列表标记" aria-label="Permalink to &quot;9. 列表标记&quot;">​</a></h2><p><code>格式</code></p><pre><code>* 无序列表

- 无序列表

+ 无序列表

1. 有序列表
2. 有序列表
3. 有序列表

-[X] 复选框勾选
-[] 复选框未勾选 ?

可以嵌套
</code></pre><p><code>预览</code></p><ul><li>无序列表</li></ul><ul><li>无序列表</li></ul><ul><li>无序列表</li></ul><ol><li>有序列表</li><li>有序列表</li><li>有序列表</li></ol><ul><li>一级 <ul><li>二级</li></ul><ol><li>二级</li><li>二级 <ol><li>三级</li></ol></li><li>二级</li></ol></li><li>一级</li></ul><blockquote><p>一级</p><ol><li>二级</li><li>二级</li></ol><ul><li>二级</li></ul></blockquote><hr><h2 id="_10-表格" tabindex="-1">10. 表格 <a class="header-anchor" href="#_10-表格" aria-label="Permalink to &quot;10. 表格&quot;">​</a></h2><p><code>格式</code></p><pre><code>| 表头 | 表头 | 表头 | 表头 |
| :--- | ---: | :--: | ---- |
| 单元格 | 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 | 单元格 |
</code></pre><p><code>预览</code></p><table><thead><tr><th style="text-align:left;">表头</th><th style="text-align:right;">表头</th><th style="text-align:center;">表头</th><th>表头</th></tr></thead><tbody><tr><td style="text-align:left;">单元格</td><td style="text-align:right;">单元格</td><td style="text-align:center;">单元格</td><td>单元格</td></tr><tr><td style="text-align:left;">单元格</td><td style="text-align:right;">单元格</td><td style="text-align:center;">单元格</td><td>单元格</td></tr></tbody></table><hr><h2 id="_11-html元素" tabindex="-1">11. HTML元素 <a class="header-anchor" href="#_11-html元素" aria-label="Permalink to &quot;11. HTML元素&quot;">​</a></h2><p><code>格式</code></p><pre><code>&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Shift&lt;/kbd&gt;+&lt;kbd&gt;F10&lt;/kbd&gt;
</code></pre><p><code>预览</code></p><p><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F10</kbd></p><h2 id="_12-公式" tabindex="-1">12. 公式 <a class="header-anchor" href="#_12-公式" aria-label="Permalink to &quot;12. 公式&quot;">​</a></h2><p>$ f(x) = sin(x) + 12 $</p><p>$$ \\begin{Bmatrix} a &amp; b \\ c &amp; d \\end{Bmatrix} $$</p><p>$$ \\begin{CD} A @&gt;a&gt;&gt; B \\ @VbVV @AAcA \\ C @= D \\end{CD} $$</p><hr><h2 id="_13-mermaid-基本使用" tabindex="-1">13. Mermaid 基本使用 <a class="header-anchor" href="#_13-mermaid-基本使用" aria-label="Permalink to &quot;13. Mermaid 基本使用&quot;">​</a></h2><p><code>VsCode 安装扩展 MarkDown Preview Mermaid Support</code></p><p><img src="`+n+`" alt="MarkDown Preview Mermaid Support" title="MarkDown Preview Mermaid Support"></p><p><code>流程图</code></p><pre><code>\`\`\`mermaid
graph TD
    A --&gt; B
    A --&gt; C
    B --&gt; D
    C --&gt; D
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A --&gt; B</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A --&gt; C</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; D</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr style="height:2px;border:none;border-top:2px dotted #185598;"><p><code>横向流程图</code></p><pre><code>\`\`\`mermaid
graph LR
    A[方形] --&gt;B(圆角)
    B --&gt; C{条件a}
    C --&gt; |a=1| D[结果1]
    C --&gt; |a=2| E[结果2]
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[方形] --&gt;B(圆角)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C{条件a}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; |a=1| D[结果1]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; |a=2| E[结果2]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr style="height:2px;border:none;border-top:2px dotted #185598;"><p><code>竖向流程图</code></p><pre><code>\`\`\`mermaid
graph TD
    A[方形] --&gt; B(圆角)
    B --&gt; C{条件a}
    C --&gt; |a=1| D[结果1]
    C --&gt; |a=2| E[结果2]
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[方形] --&gt; B(圆角)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C{条件a}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; |a=1| D[结果1]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; |a=2| E[结果2]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr style="height:2px;border:none;border-top:2px dotted #185598;"><p><code>时序图</code></p><pre><code>\`\`\`mermaid
sequenceDiagram
    participant 张三
    participant 李四
    张三 -&gt;&gt; 李四: 你好吗?李四

    loop 文本
        李四 -&gt;&gt; 李四: 自己对自己说
    end

    Note right of 李四: 李四 &lt;br/&gt; 右边笔记 &lt;br/&gt; 不错!

    李四 --&gt;&gt; 张三: 我很好!张三
    张三 -&gt;&gt; 王五: 你呢?王五
    王五 --&gt;&gt; 张三: 我也很好!张三
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sequenceDiagram</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    participant 张三</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    participant 李四</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    张三 -&gt;&gt; 李四: 你好吗?李四</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    loop 文本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        李四 -&gt;&gt; 李四: 自己对自己说</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Note right of 李四: 李四 &lt;br/&gt; 右边笔记 &lt;br/&gt; 不错!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    李四 --&gt;&gt; 张三: 我很好!张三</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    张三 -&gt;&gt; 王五: 你呢?王五</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    王五 --&gt;&gt; 张三: 我也很好!张三</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><hr style="height:2px;border:none;border-top:2px dotted #185598;"><p><code>甘特图</code></p><pre><code>\`\`\`mermaid
gantt
    dateFormat  YYYY-MM-DD          (日期格式)
    title 标题
    excludes weekdays 2014-01-10    (要去除的日期)

    section 一部分

    已完成任务    :done,    des1, 2014-01-06,2014-01-08
    进行中任务    :active,  des2, 2014-01-09, 3d
    未完成任务    :         des3, after des2, 5d
    未完成任务    :         des4, after des3, 5d
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gantt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dateFormat  YYYY-MM-DD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title 标题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    excludes weekdays 2014-01-10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    section 一部分</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    已完成任务    :done,    des1, 2014-01-06,2014-01-08</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    进行中任务    :active,  des2, 2014-01-09, 3d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    未完成任务    :         des3, after des2, 5d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    未完成任务    :         des4, after des3, 5d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><hr style="height:2px;border:none;border-top:2px dotted #185598;"><p><code>类图</code></p><pre><code>\`\`\`mermaid
classDiagram
    类1 &lt;|-- 一个长类 : 冷静地
    类1 : size()
    类1 : int chimp
    类1 : int gorilla

    类3 *-- 类4
    类5 o-- 类6
    类7 .. 类8
    类7 : equals()
    类7 : Object[] elementData

    类8 &lt;--&gt; 类10: 很酷的标签
    类9 --&gt; 类10 : 我是谁?
    类9 --* 类11
    类9 --|&gt; 类7
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">classDiagram</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    类1 &lt;|-- 一个长类 : 冷静地</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    类1 : size()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    类1 : int chimp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    类1 : int gorilla</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    类3 *-- 类4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    类5 o-- 类6</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    类7 .. 类8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    类7 : equals()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    类7 : Object[] elementData</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    类8 &lt;--&gt; 类10: 很酷的标签</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    类9 --&gt; 类10 : 我是谁?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    类9 --* 类11</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    类9 --|&gt; 类7</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><hr style="height:2px;border:none;border-top:2px dotted #185598;"><p><code>Git 图</code></p><pre><code>\`\`\`mermaid
gitGraph
    options
    {
        &quot;nodeSpacing&quot;: 150,
        &quot;nodeRadius&quot;: 10
    }
    end

    commit
    branch newbranch
    checkout newbranch
    commit
    commit
    checkout main
    commit
    commit
    merge newbranch
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gitGraph</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    options</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &quot;nodeSpacing&quot;: 150,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &quot;nodeRadius&quot;: 10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    commit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    branch newBranch</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    checkout newBranch</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    commit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    commit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    checkout main</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    commit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    commit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    merge newBranch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><hr style="height:2px;border:none;border-top:2px dotted #185598;"><p><code>实体关系图</code></p><pre><code>\`\`\`mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
\`\`\`

\`\`\`mermaid
erDiagram
    &quot;张三&quot; ||--o{ &quot;李四&quot; : &quot;地点&quot;
    &quot;李四&quot; ||--|{ &quot;王五&quot; : &quot;链接&quot;
    &quot;张三&quot; }|..|{ &quot;超六&quot; : &quot;用户&quot;
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">erDiagram</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CUSTOMER ||--o{ ORDER : places</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ORDER ||--|{ LINE-ITEM : contains</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">erDiagram</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;张三&quot; ||--o{ &quot;李四&quot; : &quot;地点&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;李四&quot; ||--|{ &quot;王五&quot; : &quot;链接&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;张三&quot; }|..|{ &quot;超六&quot; : &quot;用户&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr style="height:2px;border:none;border-top:2px dotted #185598;"><p><code>用户旅程图</code></p><pre><code>\`\`\`mermaid
journey
    title 我的工作日

    section 去工作
    泡茶: 5: 我
    上楼: 3: 我
    工作: 1: 我, 猫

    section 回家
    下楼: 5: 我
    坐下: 5: 我
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">journey</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title 我的工作日</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    section 去工作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        泡茶: 5: 我</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        上楼: 3: 我</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        工作: 1: 我, 猫</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    section 回家</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        下楼: 5: 我</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        坐下: 5: 我</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><hr style="height:2px;border:none;border-top:2px dotted #185598;"><p><code>状态图</code></p><hr style="height:2px;border:none;border-top:2px dotted #185598;"><p><code>饼图</code></p><pre><code>\`\`\`mermaid
pie
    &quot;狗&quot; : 386
    &quot;猫&quot; : 85
    &quot;鸟&quot; : 15
\`\`\`
</code></pre><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;狗&quot; : 38</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;猫&quot; : 85</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;鸟&quot; : 15</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,143),r=[t];function d(o,h,c,b,k,E){return i(),e("div",null,r)}const y=a(l,[["render",d]]);export{g as __pageData,y as default};
