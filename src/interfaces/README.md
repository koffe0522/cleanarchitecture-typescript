# Interface Adapters

入力、永続化、表示を担当するオブジェクトが所属します。
入力とは Application Business Rules に伝えるためのデータ加工を指します。
永続化とはデータの保存を指します。
表示は結果の表示です。

一般的な MVC フレームワークや単体テストクラスなどはこのレイヤーに所属されます。

<pre>
.
├── contorollers (Contorollers)
├── serializers (Presenters)
├── db (Gateways)
├── requests
└── README.md
</pre>

## Contorollers

- 受け取ったリクエストを元に UseCase(Input Boundary)を呼び出し、その結果をレスポンスとして作り出す。

## Presenters

- 出力向けにデータを変換(serializers)する。

## Gateways

- Frameworks&Drivers からのデータを抽象化する。

### requests

- リクエストのバリデーションロジックを扱う。
