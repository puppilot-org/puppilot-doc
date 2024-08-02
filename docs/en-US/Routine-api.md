# Routine API

> Typescript is highly recommended to develop a routine. You will get hint for most API to develop.

A Routine file is a ESModule, it should export a function as default export.

minimal example:

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

## Fields

| field       | required | type                                                    | description                                                              | examples                                                                                  |
| ----------- | -------- | ------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| id          | yes      | string                                                  | ID of the routine, the id should follow java package naming convention   | `io.github.user.routine-name` <br/> `com.your-own-domain.project-name.routine-name`       |
| displayName | yes      | string                                                  | name of your routine, it is no difference than `name`                    |                                                                                           |
| version     | yes      | string \| <br/> number \| <br/> Array[string \| number] | version to control update of routine                                     | `1` <br/> `"1.0.0"` <br/> `[1, 0, 0]` <br/> `"1.0.0-beta.1"` <br/> `[1, 0, 0, "beta", 1]` |
| author      | no       | string                                                  | author of the routine                                                    |                                                                                           |
| reportEmail | no       | string                                                  | email of the author or any email to report issue                         |                                                                                           |
| reportUrl   | no       | string                                                  | url of the author or any url to report issue                             |                                                                                           |
| description | no       | string                                                  | description of the routine, the length is not limited                    |                                                                                           |
| altNames    | no       | Array[string]                                           | alternative names of the routine, so that user can search by these names |                                                                                           |
| timeLimit   | no       | number                                                  | time limit by milliseconds, default to 2 minutes                         |                                                                                           |

## Methods

### start

`async start({ getPage, getStore }, { puppeteer }) => Promise<JobResult>`

parameters:

**getPage()** create a new page in browser, return a puppeteer [Page](https://pptr.dev/api/puppeteer.page) object.  
**getStore()** return a internal [Store](#store) object.  
**puppeteer** puppeteer module. (Common modules are passed as parameters to reduce routine file size)  

## Objects

### Store

Stores are internal storage for data. It persist in user's *puppilot-data* directory.

Methods:

**Store.set(key:string, value: any)** set value to store, the value must be JSON serializable  
**Store.get(key: string)** get the value from store, the value will be the object as set  
