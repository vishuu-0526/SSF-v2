// import MasonryCards from "../components/MasonryCard";

// export default function KeyFocus() {
//     return (
//         <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
//             <div className="w-full max-w-6xl min-h-96 mx-auto">
//                 <div className="text-center mt-10">
//                     <h1 className="italic font-black text-4xl">Our Key Focus Area</h1>
//                 </div>
//                 {/* <MasonryCards /> */}
//                 <MasonryCards />
//             </div>
//         </div>
//     );
// }

import MasonryCards from "../components/MasonryCard";

export default function KeyFocus() {
  return (
    <section className="w-full bg-zinc-50 py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* ================= HEADER ================= */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold text-zinc-900">
            The SSF Ecosystem
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-600 text-base">
            An interconnected network of initiatives designed to create sustainable, long-term impact.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <MasonryCards />

      </div>
    </section>
  );
}
