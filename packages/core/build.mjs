import * as esbuild from "esbuild";

let options = {
   entryPoints: ["src/index.ts"],
   bundle: true,
   outfile: "dist/bundle.js",
   tsconfig: "tsconfig.json",
   format: "esm",
   target: "edge18",
};

if (process.argv.includes("--watch")) {
   let ctx = await esbuild.context(options);
   console.log(await ctx.watch());
   console.log("Watching for changes...");
} else {
   console.log(await esbuild.build(options));
   console.log("Build complete!");
}
