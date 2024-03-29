// import { useSignal } from "@preact/signals";
// import Counter from "../islands/Counter.tsx";
import Geo from "../islands/Geo.tsx";

// export default function Home() {
//   const count = useSignal(3);
//   return (
//     <div class="px-4 py-8 mx-auto bg-[#86efac]">
//       <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
//         <img
//           class="my-6"
//           src="/logo.svg"
//           width="128"
//           height="128"
//           alt="the Fresh logo: a sliced lemon dripping with juice"
//         />
//         <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
//         <p class="my-4">
//           Try updating this message in the
//           <code class="mx-2">./routes/index.tsx</code> file, and refresh. I did
//         </p>
//         <Counter count={count} />
//         <Geo />
//       </div>
//     </div>
//   );
// }
export default function Home() {
  return (
    <>
      <body style="background-color:#232B32">
        
      <div style="
        display: grid;
        justify-content: space-around;
        align-content: center;
        color:#efefef;
        gap: 4px;
        grid-auto-flow: column;">
        <section style="    grid-column: 1;">
          <img
            src="/logo.svg"
            width="128"
            height="128"
            alt="the fresh logo: a sliced lemon dripping with juice"
            />
        <Geo />
        </section>
      </div>
      </body>

    </>
  );
}
