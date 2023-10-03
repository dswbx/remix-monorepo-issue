import type { MetaFunction } from "@remix-run/cloudflare";
import { someUtilFunction, someRandomFunction, MyClass } from "core";

export const meta: MetaFunction = () => {
   return [
      { title: "New Remix App" },
      { name: "description", content: "Welcome to Remix!" },
   ];
};

export default function Index() {
   const a = new MyClass();
   a.setProp(4);
   a.incr();

   return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
         <h1>Welcome to Remix</h1>
         <span>{someUtilFunction()}</span>
         <span>random number: {someRandomFunction()}</span>
         <span>prop: {a.getProp()}</span>
         <ul>
            <li>
               <a
                  target="_blank"
                  href="https://remix.run/tutorials/blog"
                  rel="noreferrer"
               >
                  15m Quickstart Blog Tutorial
               </a>
            </li>
            <li>
               <a
                  target="_blank"
                  href="https://remix.run/tutorials/jokes"
                  rel="noreferrer"
               >
                  Deep Dive Jokes App Tutorial
               </a>
            </li>
            <li>
               <a
                  target="_blank"
                  href="https://remix.run/docs"
                  rel="noreferrer"
               >
                  Remix Docs
               </a>
            </li>
         </ul>
      </div>
   );
}
