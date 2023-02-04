import Image from "next/image";

export default function loading() {
  return (
    <div>
      <Image src="loader.svg" alt="loader" />
    </div>
  );
}
