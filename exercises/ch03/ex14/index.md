## let

letはブロックスコープなので、forループ外のiと、forループ内のiと、function内のiは別物。
for()で宣言したi=0からi<10までの数値が表示され、最後にforループ外のiは未定義なのでエラーとしてunfinedになる。

0
1
2
3
4
5
6
7
8
9
undefined

## var

varは関数スコープなので、ループの中と外は同じi。functionの中は別のi。

0
1
2
3
4
5
6
7
8
8
9
10

## let消去

letもvarも使わない場合はグローバル変数になるので、forループ内にi=0の後にi=100で上書きされて、100が出力される。
その後、i++で101になり、i < 10を満たさないためforループを出て、101が出力される。

100
101
