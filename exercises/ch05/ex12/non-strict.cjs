// .cjsとして保存することで、CommonJSモジュールとして扱われる
// CommonJSモジュールでは、strictモードはデフォルトで無効

x = 5; // 変数宣言してないが、非strictモードではエラーにならない
console.log(x);
