# 啊是特嗷桃

## 1. 网站信息

- 站名: 啊是特嗷桃
- 作者: `啊是特嗷桃`
- 创建时间: 2025/02/03

## 2. 网站介绍

- 啊是特嗷桃 是 `啊是特嗷桃` 的 个人网站
- 支持 非 我 的 github 的 用户 使用
- 非 我 的 github 的 用户 可以 完完全全 `零代码` 有自己的个人网站

- 网站内容来源: 通过 `github` 的 `api` 获取 用户 的 公开信息、项目和 readme 等
- 主要显示 用户 基本信息 和 用户项目的 readme
- 支持 `中英文切换` `黑白主题切换` `响应式布局`

## 3. 使用说明

- 前提: 有 GitHub 账号, 账号上有 项目, 项目大多有 readme

- 通过访问 网址 [https://gmcy2020.github.io/](https://gmcy2020.github.io/)

- 后面添加 `?owner=[你的GitHub登录名称]` 即可

- 例如 [https://gmcy2020.github.io/?owner=vuejs](https://gmcy2020.github.io/?owner=vuejs)

## 4. 详细的使用说明

- 主页: 显示 GitHub 上 的 `avatar` `name` `bio` (换行则显示两行内容)
- 主页: 显示的 readme 与 GitHub 首页显示的 readme 一致
- 主页: `GitHub` 跳转到对应用户的 GitHub 页面
- 主页: `GitHubBlog` 跳转到对应用户的 GitHub.io 页面 (blog 为空则跳转到 404)
- 主页: `分享` 按钮 点击 生成一个 [https://gmcy2020.github.io/](https://gmcy2020.github.io/) + `owner=[你的GitHub登录名称]` 的 二维码图片, 右键可保存, 手机扫描自动跳转到对应 io 页面

- 文档: 显示 项目 对应 readme
- 文档: 也支持 带参数 的链接 直接到达
- 文档: [https://gmcy2020.github.io/doc/?repo=gmcy2020.github.io](https://gmcy2020.github.io/doc/?repo=gmcy2020.github.io)

## 5. 注

### 5.1 显示的 readme 说明

- 因为 GitHub 网络延时, 有些图片可能加载不出来, 开加速器一般没问题
- 图片链接 目前 只 替换 `![]()` 和 `<img src="" />` 的 非 完整链接
- 替换为 GitHub raw 链接 `https://raw.githubusercontent.com/[owner]/[repo]/master/`

### 5.2 本网站所使用的获取 github 公开数据 的 api

- 获取 user: https://api.github.com/users/[owner]
- 获取仓库: https://api.github.com/users/[owner]/repos
- 获取 readme: https://api.github.com/repos/[owner]/[repo]/readme
- 获取 图片: https://raw.githubusercontent.com/[owner]/[repo]/master/[detailPath]

### ⭐ 5.3 GitHub api 限制 说明

- 正常未经身份验证 - 每个原始 IP 地址每小时60个请求
- 已验证 - 每个用户每小时可发送 5,000 个请求
- 本网站 是 `正常未经身份验证`
- 所以 网站访问 GitHub 用户(?owner=[你的GitHub登录名称]), 会缓存 用户对应 `user` `repos` `对应 repo 的 readme` 到本地 以 `减少调用次数`
- 对应 repo 的 readme 如果不存在 就会跳过并提示
- 用户缓存内容超过 1小时后 再次访问会刷新
- 加载或刷新数据未完成时, 尽量勿动页面, 避免加载失败 (单线程, 页面变化就断了, 我到时看看多线程应该就可以解决)
- `如果超限制 -> 内容未显示, 显示不全, 停在 '加载中, 请勿操作', 显示没有这个用户 -> 则请 1小时后再访问`
- `图片` 和 `头像` 也是
- 可通过 `清除缓存` 按钮 清空缓存 并重新加载 (如果还不行, 请刷新页面后隔几秒再按一次)

### ⭐ 5.4 声明

- 嗯~ o(_￣▽￣_)o, 保险还是声明一下~
- 本网站 主要 是 `啊是特嗷桃` 的 个人 网站
- 以展示 `啊是特嗷桃` 个人内容 为主
- 非 我 的 github 的 用户 使用时, 所有的数据来自 GitHub 的 公开数据, 只 缓存 在 浏览器本地.
- 可通过 `清除缓存` 清空 在浏览器的本地缓存
- 非 我 的 github 的 用户 使用时, 如若造成 损失, 已经声明, 用户自行负责
- 应该不至于吧~ 都是 GitHub 的 公开数据~
