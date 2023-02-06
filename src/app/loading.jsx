import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center">
      <Image
        src="loader.svg"
        alt="loader"
        width={200}
        height={200}
        // width="auto"
        // height="auto"
      />
    </div>
  );
}
