import Image from "next/image";

export default function loading() {
  return (
    <div flex justify-center>
      <Image
        src="loader.svg"
        alt="loader"
        style={{
          width: "200",
        }}
      />
    </div>
  );
}
