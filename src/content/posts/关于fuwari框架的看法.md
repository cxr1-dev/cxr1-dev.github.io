---
title: 关于fuwari框架的看法
published: 2025-07-29
description: '主播今天刚刚换上fuwari，有一些看法'
image: 'https://youke1.picui.cn/s1/2025/07/30/68896cd60d2dd.png'
tags: [Fuwari, Blog]
category: 'Blog'
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
name: Deploy to GitHub Pages

on:
  # 每次推送到 `main` 分支时触发这个“工作流程”
  # 如果你使用了别的分支名，请按需将 `main` 替换成你的分支名
  push:
    branches: [ main ]
  # 允许你在 GitHub 上的 Actions 标签中手动触发此“工作流程”
  workflow_dispatch:

# 允许 job 克隆 repo 并创建一个 page deployment
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v4
      - name: Install, build, and upload your site
        uses: withastro/action@v2
        with:
          # path: . # 存储库中 Astro 项目的根位置。（可选）
          # node-version: 20 # 用于构建站点的特定 Node.js 版本，默认为 20。（可选）
          package-manager: pnpm@latest # 应使用哪个 Node.js 包管理器来安装依赖项和构建站点。会根据存储库中的 lockfile 自动检测。

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```

PS：在.github/workflows下创建deploy.yml，输入以上内容，推送到Github仓库，执行Actions。

评价：评价：⭐⭐（满5⭐）

# 四、外观

外观真的很好看，整体有很多Google Material You的设计和色彩风格，大圆角很好看，我很喜欢。

评价：⭐⭐⭐⭐⭐（满5⭐）

# 五、总结

评价：4⭐半（满5⭐）
