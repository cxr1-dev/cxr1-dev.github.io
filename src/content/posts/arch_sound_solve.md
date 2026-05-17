---
title: "红色花瓣毁了我的听歌梦——HUAWEI笔记本音频问题解决"
published: 2026-05-17
description: '最近在捣鼓Arch，地上全是红色的花瓣，不小心被我踩了一脚'
image: 'https://9wtpsrgvx55xuqus.public.blob.vercel-storage.com/Screenshot_20260517_155524-uzl6ioa9Xk4VmyVk6rHLMXj1pDigdl.png'
tags:
  - Arch
category: 'Linux'
draft: false 
lang: ''
---
# 我艹您母红花瓣
> 我真服了🔴🌷½(后称花)了，纯纯傻逼一个
# Why?
可能大家被开幕雷击到了，那我就讲讲为啥，因为我为了花的扬声器折腾了一下午。
# Uh?
起因是这样的，我刚装好我的`Arch To Go`，准备听歌配其他环境，但是我打开播放器，发现没声，我很纳闷，我就让`OpenCode`(详见上篇文章)帮我修了修，修好了。
# Then?
我重启刷新下我刚倒腾的环境，又坏了……  
我非常崩溃
# How?
然后我就`Google`&`AI`，找到了一个`Github`仓库：  
::github{repo="Smoren/huawei-ubuntu-sound-fix"}
首先感谢这位大佬，请大家给Ta一个Star，接下来是解决步骤
# 正式开始
首先把这个仓库拉下来：
```bash
git clone https://github.com/Smoren/huawei-ubuntu-sound-fix.git
```
接下来切换到仓库目录：
```bash
cd huawei-ubuntu-sound-fix
```
接下来安装：
```bash
bash install.sh
```
等程序跑完后检查状态：
```bash
systemctl status huawei-soundcard-headphones-monitor
```
应返回如`Active: active (running)`的信息
# Over.
这篇文章就到这里了，又水一篇~（  
$$
\large{\mathbb{FUCK\ U\ RED\ FLOWER}}
$$
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