# 脚本开发指南

## 环境要求

- NodeJS 20
- Chrome 浏览器

## 开发脚本

### Clone仓库

```sh
git clone https://github.com/puppilot-org/puppilot-routines.git
# 如果你偏好ssh的话：
# git clone git@github.com:puppilot-org/puppilot-routines.git

cd puppilot-routines
```

### 设置环境

```sh
# 安装依赖
npm clean-install

# 创建新的 .env 文件
cp .env.example .env
```

### 创建新脚本

```sh
# 从模板复制一个文件
cp src/routines/__template.ts src/routines/my-routine.ts
```

然后编辑`.env`文件并修改`DEBUG_SCRIPT`为你的新脚本文件名

### 编辑脚本文件

请参考[Routine Api](./Routine-api.md)编辑你的脚本

其中，[Puppeteer](https://pptr.dev/)是主要的浏览器交互方式，详细用法请阅读[Puppeteer文档](https://pptr.dev/guides/page-interactions)

### 调试脚本

```sh
npm start
```

### 发布脚本

Fork这个Github仓库，将你的提交推送至你的新仓库并创建一个Pull Request
