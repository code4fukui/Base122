# Base122

データURIにおけるBase64の代替として作成された、空間効率の高いUTF-8バイナリ・テキストエンコーディングです。Base-122は、同等のBase64エンコードデータと比較して約14%サイズが小さくなります。

## 使い方
Base-122エンコードはUTF-8文字を生成しますが、Base64よりも1バイトあたり多くのビットをエンコードします。
```javascript
import { Base122 } from "https://code4fukui.github.io/Base122/Base122.js";
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";
const inputData = await Deno.readFile("test/example.jpg");
const base64Encoded = Base64.encode(inputData);
const base122Encoded = Base122.encode(inputData);
console.log("Original size = " + inputData.length); // Original size = 1429
console.log("Base-64 size = " + base64Encoded.length); // Base-64 size = 1908
console.log("Base-122 size = " + base122Encoded.length); // Base-122 size = 1634
console.log("Saved " + (base64Encoded.length - base122Encoded.length) + " bytes") // Saved 274 bytes
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
