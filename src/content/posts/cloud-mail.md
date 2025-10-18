---
title: Cloud Mail折腾记
published: 2025-08-31
description: 今天逛b站发现了一个开源项目，折腾一下
image: https://9wtpsrgvx55xuqus.public.blob.vercel-storage.com/PixPin_2025-10-18_19-17-06-E3JIN0T5JAgarhCGli4nl7YoRITrFZ.png
tags:
  - Mail
  - Cloudflare
category: ""
draft: false
lang: ""
---
首先我先把Github仓库放这里方便大家取用。
::github{repo="eoao/cloud-mail"}
哦对了，Gihtub仓库里的README文件里有官方网站和文档。

# 0.准备工作
- 你需要一个至少有2个线程的nb脑子
- 你需要准备一个好的心态
- 你需要准备一台能正常运行超过5+网页的现代PC/Mac
- 一个Github账户
- 一个Cloudflare账号
- 一个能正常绑定Cloudflare的域名
# 1.开始搭建
(1).首先先Fork文章开头的Github仓库。
接下来去到Cloudflare，绑定域名，找到计算(Workers)（注意，此页面的入口在账户主页，域名主页是找不到的。）
(2).进入Workers页面后，选择导入存储库，选择Github，根据提示授权，选择你Fork的存储库。
(3).起一个项目名称（只能使用a-z 1-9 和-字符），然后找到高级设置里的根目录，展开后路径改成`mail-worker`，然后点击`创建和部署`，等待部署完成。
(4).部署完成后，进入项目的主页，点击`设置`，绑定你的域名并添加如下的环境变量。

| 变量名     | 值                 | 类型   | 作用                           |
| ---------- | ------------------ | ------ | ------------------------------ |
| domain     | ["你的域名"]       | JSON   | 网站会使用这个域名作为邮箱域名 |
| admin      | 管理员的邮箱       | 纯文本 | 对应的用户变成管理员           |
| jwt_secret | 随便输入一串字符串 | 纯文本 | 登录身份令牌的安全密钥         |
(5).然后找到`存储和数据库`，创建一个KV和一个D1，名称随意，然后回到Workers，点击`绑定`，绑定KV和D1（KV变量名为kv，D1变量名为db。这里是我遇到的第一个问题，新建D1数据库找不到，解决方案是直接在绑定窗口的输入框中搜索D1数据库的名称。
(6).接下来的自己去官方网站看文档吧，都很简单。
<script src="https://giscus.app/client.js"
        data-repo="cxr1-dev/giscus-fuwari"
        data-repo-id="R_kgDOPYpcxQ"
        data-category="Announcements"
        data-category-id="DIC_kwDOPYpcxc4CtzPu"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="dark"
        data-lang="zh-CN"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>