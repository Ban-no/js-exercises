## SOLID 原則の説明

### これら 5 つの原則についてそれぞれ説明しなさい

- 単一責任の原則（SRP: Single Responsibility Principle）

  - 1つのクラスは1つの責任のみを持つべきで、変更が必要になる理由は1つだけであるべきです。

- 開放閉鎖の原則（OCP: Open/Closed Principle）

  - ソフトウェアの構成要素（クラス、モジュール、関数など）は拡張に対して開放的で、修正に対して閉じられているべき。　→既存のコードを変更せずに、新しい機能を追加できる設計にするべき。

- リスコフの置換原則（LSP: Liskov Substitution Principle）

  - サブクラスは、親クラスの代替として使用できるべき。つまり、親クラスのインスタンスを使っていた場所にサブクラスを使っても、正しく動作するべき。

- インターフェース分離の原則（ISP: Interface Segregation Principle）

  - クライアントは、使わないメソッドへの依存を強いられるべきではない。つまり、インターフェースは細かく分割されるべき。

- 依存性逆転の原則（DIP: Dependency Inversion Principle）
  - 高水準モジュールは低水準モジュールに依存すべきではなく、抽象に依存すべき。また、抽象は詳細に依存すべきではない。

### 5 つの原則から任意の 1 つ以上を選び、原則を満たさないコードと原則を満たすコードの例を書きなさい

- コードは各原則を説明するためのスケルトンコードで良く、実際に動作する必要はない

- 開放閉鎖の原則（OCP）を満たさないコード

```js
// 長方形(Rectangle)を表すクラス
class Rectangle {
    // 幅と高さを直接公開している（カプセル化されていない）
    public double width, height;
}
// 面積を計算するクラス
class AreaCalculator {
    // Object型を受け取って、if文で図形を判定
    public double calculateArea(Object shape) {
        // もし渡されたオブジェクトがRectangleなら…
        if (shape instanceof Rectangle) {
            // Rectangleにキャストして幅×高さを計算
            Rectangle rect = (Rectangle) shape;
            return rect.width * rect.height;
        }
        // 新しい図形(円、三角形など)を追加するたびに
        // if文を増やさないといけない → 既存コードの修正が発生
        return 0;
    }
}

```

問題点：instanceof とキャストを多用しており、「新しい図形を追加するたびに if 文を書き足す必要がある」。これは オープン・クローズド原則（「拡張に開かれているが、修正に閉じているべき」）に違反している。

- 開放閉鎖の原則（OCP）を満たすコード

```js
interface Shape {
    // すべての図形は「自分の面積を計算する」メソッドを持つ
    double calculateArea();
}
// 長方形クラス（Shapeを実装）
class Rectangle implements Shape {
    private double width, height;
// Rectangle独自の面積計算を実装
    public double calculateArea() {
        return width * height;
    }
}
// 円クラス（Shapeを実装）
class Circle implements Shape {
    private double radius;
// Circle独自の面積計算を実装
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}
// 面積を計算するクラス
class AreaCalculator {
    // Shape型を受け取ることで、多態性を活かせる
    public double calculateArea(Shape shape) {
        // 図形ごとの面積計算は、各クラスに任せる
        // → ここは変更せずに新しい図形を追加できる！
        return shape.calculateArea();
    }
}

```

改善点：instanceof が不要になり、各図形が自分自身で面積を計算できるようになった。AreaCalculator は常に Shape インターフェースを呼ぶだけなので、新しい図形を追加しても既存コードを修正する必要がない。

### 参考　：　https://techgym.jp/column/solid/
