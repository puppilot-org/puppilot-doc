# Routine API

> 强烈推荐使用Typescript开发脚本，以获取完整的IDE提示

脚本文件是一个ESModule，并export一个函数作为默认export

最小化实例：

```ts
import { JobStatus, Routine } from "../types";

export default function (): Routine {
  return {
    displayName: "A New Routine",
    version: "0.1.0",
    id: "io.github.puppilot-org.puppilot-routines.<your-name>.<your-routine-id>",

    async start() {
      return {
        status: JobStatus.Dismissed,
        message: "Not implemented yet",
      };
    },
  };
}
```

## 属性

| 属性        | 必要 | 类型                                                    | 描述                                 | 示例                                                                                      |
| ----------- | ---- | ------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------- |
| id          | 是   | string                                                  | 脚本的ID，遵守Java包命名规范         | `io.github.user.routine-name` <br/> `com.your-own-domain.project-name.routine-name`       |
| displayName | 是   | string                                                  | 脚本名，与`name`没有区别             |                                                                                           |
| version     | 是   | string \| <br/> number \| <br/> Array[string \| number] | 脚本的版本号，用于控制自动更新       | `1` <br/> `"1.0.0"` <br/> `[1, 0, 0]` <br/> `"1.0.0-beta.1"` <br/> `[1, 0, 0, "beta", 1]` |
| author      | 否   | string                                                  | 脚本作者                             |                                                                                           |
| reportEmail | 否   | string                                                  | 作者的电子邮箱或者其他报告问题的邮箱 |                                                                                           |
| reportUrl   | 否   | string                                                  | 作者的主页或者其他联系方式           |                                                                                           |
| description | no   | string                                                  | 脚本说明，没有长度限制               |                                                                                           |
| altNames    | no   | Array[string]                                           | 别名，用于搜索                       |                                                                                           |
| timeLimit   | no   | number                                                  | 脚本时间限制（毫秒），默认为2分钟    |                                                                                           |

## 方法

### start

`async start({ getPage, getStore }, { puppeteer }) => Promise<JobResult>`

参数

**getPage()** 创建一个新的浏览器标签页，返回一个puppeteer [Page](https://pptr.dev/api/puppeteer.page)对象。  
**getStore()** 返回一个内部[Store](#store)对象。  
**puppeteer** puppeteer包(常用的包会作为参数传进，以减小脚本文件的体积)  

## 对象

### Store

Stores用于持久储存用户数据，数据保存在用户的*puppilot-data*文件夹下

方法

**Store.set(key:string, value: any)** 保存一个数据，`value`必须是可以被JSON序列化的对象  
**Store.get(key: string)** 获取一个数据，结果为和保存的数据对象  
