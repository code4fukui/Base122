import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base122 } from "./Base122.js";
import { d } from "./decode.min.js";
//import { d } from "./decode.js";

const n = 256;

const testfn = "./test.base122.js";

Deno.test("encode / decode", async () => {
  const bin = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    bin[i] = i;
  }
  const s = Base122.encodeJS(bin);
  /*
  console.log(s);
  for (const c of s) {
    console.log(c.codePointAt(0), c);
  }
  */
  //await Deno.writeTextFile("enc.txt", s);
  //const s0to255 = await Deno.readTextFile("enc.txt");
  //t.assertEquals(s, s0to255);
  const json = `export default ${s}`;
  await Deno.writeTextFile(testfn, json);
});

Deno.test("decode", async () => {
  const s0to255 = (await import(testfn)).default;
  const bin = Base122.decode(s0to255);
  t.assertEquals(bin.length, n);
  for (let i = 0; i < bin.length; i++) {
    t.assertEquals(bin[i], i);
  }
});

Deno.test("decode.min.js", async () => {
  const s0to255 = (await import(testfn)).default;
  const bin = d(s0to255);
  //console.log(bin);
  t.assertEquals(bin.length, n);
  for (let i = 0; i < bin.length; i++) {
    t.assertEquals(bin[i], i);
  }
});
