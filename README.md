This repo is a small reproduction of my issue in another project. I'm trying to use a monorepo setup where the referenced package also uses absolute paths for import. When the modules are imported internally with relative paths, it works fine. But when accessed from the index file (which uses absolute paths), it fails.

## Steps to reproduce
1. run `pnpm install`
2. run the cloudflare variant `pnpm -F remix dev`, it fails.
3. run the node variant with `pnpm -F remix-node dev`, it fails too.

Error:
```sh
> remix-node@ dev remix-monorepo-issue/packages/remix-node
> remix dev --manual


 💿  remix dev

 info  building...
✘ [ERROR] Could not resolve "@/utils/other"

    ../core/utils/index.ts:1:34:
      1 │ import { otherUtilFunction } from "@/utils/other";
        ╵                                   ~~~~~~~~~~~~~~~

  You can mark the path "@/utils/other" as external to exclude it from the bundle, which will remove this error.


✘ [ERROR] Could not resolve "@/utils/some"

    ../core/utils/index.ts:2:33:
      2 │ import { someUtilFunction } from "@/utils/some";
        ╵                                  ~~~~~~~~~~~~~~

  You can mark the path "@/utils/some" as external to exclude it from the bundle, which will remove this error.


✘ [ERROR] Build failed with 2 errors:
../core/utils/index.ts:1:34: ERROR: Could not resolve "@/utils/other"
../core/utils/index.ts:2:33: ERROR: Could not resolve "@/utils/some" [plugin css-bundle-plugin]

    app/root.tsx:21:30:
      21 │ import { cssBundleHref } from "@remix-run/css-bundle";
         ╵                               ~~~~~~~~~~~~~~~~~~~~~~~

  This error came from the "onLoad" callback registered here:

    ../../node_modules/.pnpm/@remix-run+dev@2.0.1_@remix-run+serve@2.0.1_typescript@5.2.2/node_modules/@remix-run/dev/dist/compiler/plugins/cssBundlePlugin.js:35:12:
      35 │       build.onLoad({
         ╵             ~~~~~~

    at setup (remix-monorepo-issue/node_modules/.pnpm/@remix-run+dev@2.0.1_@remix-run+serve@2.0.1_typescript@5.2.2/node_modules/@remix-run/dev/dist/compiler/plugins/cssBundlePlugin.js:35:13)
    at handlePlugins (remix-monorepo-issue/node_modules/.pnpm/esbuild@0.17.6/node_modules/esbuild/lib/main.js:1279:21)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
```

When I execute a test file that imports from the index within the package itself, it works:
```
cd packages/core
npx tsx test.ts
```

The issue is probably around `package.json` and/or `tsconfig.json` within core package. I'm not really proficient with tsconfig and I'm not sure how to fix it. I tried to add `baseUrl` and `paths` to `tsconfig.json` but it didn't work.

If I use paths similar to how the remix templates do, then it tries to resolve the module within the remix package itself (that's why I chose "@").

