// import InfiniteLogoScroll from "../components/InfiniteScrollLogo";

// export default function Collabrations() {
//   return (
//     <div className="relative w-full h-auto bg-[url(./assets/grid.svg)]  bg-contain bg-center bg-zinc-900 text-white flex items-start">
//       <div className="relative pt-10 pb-20 w-full bg-linear-to-b h-full from-black/50 via-black to-zinc-950">

//         <div className="text-center space-y-2 my-10">
//           <h1 className="italic font-extrabold text-4xl">Our Collabrations</h1>
//           <p className="font-bold text-zinc-400 px-4">
//             we aim to empower communities through collaboration  and extend our reach
//           </p>
//         </div>

//         <InfiniteLogoScroll />

//       </div>
//     </div>
//   );
// }



import InfiniteLogoScroll from "../components/InfiniteScrollLogo";

export default function Collaborations() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        {/* TITLE */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900">
            Our Collaborations
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            We partner with trusted organizations to amplify impact
            and reach communities more effectively.
          </p>
        </div>

        {/* LOGO SCROLL */}
        <InfiniteLogoScroll />

      </div>
    </section>
  );
}
