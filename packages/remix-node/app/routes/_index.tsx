import type { MetaFunction } from "@remix-run/node";
import { someUtilFunction } from "@test/core";

export const meta: MetaFunction = () => {
   return [
      { title: "New Remix App" },
      { name: "description", content: "Welcome to Remix!" },
   ];
};

export default function Index() {
   return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
         <h1>Welcome to Remix123.....</h1>
         <span>{someUtilFunction()}</span>
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
