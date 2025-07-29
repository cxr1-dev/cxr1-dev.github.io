---
title: 关于fuwari框架的看法
published: 2025-07-29
description: '主播今天刚刚换上fuwari，有一些看法'
image: ''
tags: [Fuwari, Blog]
category: ''
draft: false 
lang: ''
---
# 纯主观！让你感到不适请立刻退出！

开始前我先把Github仓库放在这里，还有我自己的配置。

::github{repo="saicaca/fuwari"}

::github{repo="cxr1-dev/cxr1-dev.github.io"}

# 一、配置Fuwari

先说配置，配置方面让我感觉很好，主播以前用的Hexo，对于npm的配置已经习以为常了，但是额外安装pnpm还是有些让我感到反感。

配置的命令方面我跟Hexo做个对比

```bash
# hexo
hexo s # 本地服务
hexo g # 生成静态文件
hexo d # 部署
```

```bash
# fuwari(astro)
pnpm dev # 本地服务+生成静态文件
# 没有部署方案
```

对于Fuwari没有部署方案的我很无奈，然后找了大佬的Github Action脚本来部署，如果你用Cloudflare Pages那还比较方便。

评价：⭐⭐⭐（满5⭐）

# 二、书写文章

书写文章倒没有什么令我惊讶的，就是常规的Markdown，如果能在本地做出一个类似于WordPress的文章书写界面那就更好了。

评价：⭐⭐⭐⭐（满5⭐）

# 三、部署

部署真的让我头疼（因为我用的Github Pages），在这里贴上我Deploy Github Action脚本：

```yml
name: Deploy Astro Site to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist


```

评价：评价：⭐⭐（满5⭐）

# 四、外观

外观真的很好看，整体有很多Google Material You的设计和色彩风格，大圆角很好看，我很喜欢。

评价：⭐⭐⭐⭐⭐（满5⭐）

# 五、总结

评价：4⭐半（满5⭐）
