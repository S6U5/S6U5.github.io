import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="relative w-[300px] aspect-square">
        <Image
          src="/images/JK_Adventure_title.png"
          alt="A"
          fill
          className="object-cover rounded-xl"
          sizes="300px"
          priority
        />
      </div>
      <div className="relative w-[300px] aspect-square">
        <Image
          src="/images/JK_Adventure_title.png"
          alt="B"
          fill
          className="object-cover rounded-xl"
          sizes="300px"
          priority
        />
      </div>
      <div className="relative w-[300px] aspect-square">
        <Image
          src="/images/JK_Adventure_title.png"
          alt="B"
          fill
          className="object-cover rounded-xl"
          sizes="300px"
          priority
        />
      </div>
      <div className="relative w-[300px] aspect-square">
        <Image
          src="/images/JK_Adventure_title.png"
          alt="B"
          fill
          className="object-cover rounded-xl"
          sizes="300px"
          priority
        />
      </div>
    </div>
  );
}
