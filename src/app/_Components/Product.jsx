import Image from "next/image";

export function Product({ item }) {
  return (
    <div className="bg-gray-50 flex">
      <Image
        src={item?.image}
        className="bg-sky-50 text-sm text-gray-500 flex justify-center items-center"
        alt="Picture"
        width="100"
        height="100"
      />
      <div className="p-1 px-2 rounded">
        <h2>{item?.title} </h2>
        <span className="text-[12px] text-gray-800 ">{item?.price}</span>
      </div>
    </div>
  );
}
