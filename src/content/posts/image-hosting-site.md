---
title: 基于Vercel的图床模板项目
published: 2025-10-18
description: 今天发现了一个Vercel模板项目，来分享一下
image: https://9wtpsrgvx55xuqus.public.blob.vercel-storage.com/image-hosting-site-2-RKUB0YR1uSVh0cxKHW9xo2ytOdX92G.png
tags:
  - Vercel
category: ""
draft: false
lang: ""
---
# -1.引言
我一直在为图床发愁，因为我的博客总是缺少一些图片，但是今天我发现了一个有Vercel就能部署的图床。
# 0.准备工作
你需要准备的东西：
- 一个阅读理解较好的脑子（至少需要2个线程）
- 一个能运行3+网页的现代`PC`/`Mac`
- 一个`Vercel`账号
- 一个`Github`账号
# 1.正式开始
首先访问：https://vercel.com/new/users-projects/templates/next.js/blob-starter
###### PS：将users-projects中的user替换成你的vercel名

接下来点击`Deploy`
![](../assets/images/image-hosting-site.png)
接下来选择好`Git Scope`，填写`Public/Private Repository Name`，按自己需要选择`Private`/`Public`，最后单击`Create`创建。
![](../assets/images/image-hosting-site-1.png)
创建完成后按需绑定域名或执行其他操作，接下来访问你的网址，如下图：
![](../assets/images/image-hosting-site-2.png)接下来将图片丢入/点击按钮选择图片，点击`Upload`
![](../assets/images/Pasted%20image%2020251018205414.png)
等待进度条跑完，会弹出：
![](../assets/images/image-hosting-site-3.png)
就可以通过这个`URL`访问你的图片了。
# 2.结语
`Vercel`不仅可以部署`Fuwari`等静态网站框架，也可以做这种图床应用，人类对于`Vercel`的开发不足`1%`。
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