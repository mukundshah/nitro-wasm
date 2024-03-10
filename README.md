# Repro for issue [#19](https://github.com/unjs/unwasm/issues/19)

## Problem

```sh
(inject plugin) rollup-plugin-inject: failed to parse ~/Developer/play/nitro-wasm/routes/wasm/photon_rs_bg.wasm. Consider restricting the plugin to particular files via options.include
routes/wasm/photon_rs_bg.wasm (6:2) Error when using sourcemap for reporting an error: Can't resolve original location of error.

[nitro 11:46:47 AM]  ERROR  RollupError: Unexpected token .. Expected identifier, string literal, numeric literal or [ for the computed key (Note that you need plugins to import files that are not JavaScript)


4: import { base64ToUint8Array } from "unwasm:helpers";
5: const _imports = {
6:   ./photon_rs_bg.js: {
     ^
7:     __wbindgen_object_drop_ref: () => { throw new Error("./photon_rs_bg.js.__wbindgen_object_drop_ref is not provid...

✔ Nitro Server built in 4980 ms
```

## Solution

Include the unwams's patch in the  `package.json` file.

```json
"pnpm": {
    "patchedDependencies": {
      "unwasm@0.3.7": "patches/unwasm@0.3.7.patch"
    }
  }
```
