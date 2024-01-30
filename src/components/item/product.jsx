import Image from "next/image";

export function Product({ item }) {
  return (
    <div className=" flex">
      <Image
        src={`/${item}.jpg`}
        className="border-2 aspect-square w-5/12 border-zinc-950 rounded text-sm text-gray-500 flex justify-center items-center"
        alt="Picture"
        width="100"
        height="100"
      />
      <div className="p-1 px-2 rounded flex justify-between flex-col w-full">
        <h2>{item?.title} </h2>
        <span className="text-xs -mt-1 text-gray-800 ">Rp{item?.price}</span>
        <button
          type="button"
          className="mt-2 text-sm button bg-gray-950 text-white"
        >
          Beli
        </button>
      </div>
    </div>
  );
}
