# Cleanarchitecture-Typescript

This is the example repository

## Enviroment

- start
  `docker-compose up -d --build`

- stop
  `docker-compose down`

## レイヤー

| レイヤー名                 | 含む概念                                      |
| -------------------------- | --------------------------------------------- |
| Enterprise Business Rules  | Entities(domain)                              |
| Application Business Rules | Use Cases / Interactor                        |
| Interface Adapters         | Controllers / Presenters / Gateways           |
| Frameworks & Drivers       | Web / UI / External INterfaces / Devices / DB |

## 参考

https://qiita.com/baby-degu/items/f1489dd94becd46ab523
https://qiita.com/sadnessOjisan/items/ea5590efa3f55ef56edd
https://blog.spacemarket.com/code/clean-architecture-node/
https://techtechmedia.com/getter-setter-typescript/
https://qiita.com/nrslib/items/a5f902c4defc83bd46b8#enterprise-business-rules
