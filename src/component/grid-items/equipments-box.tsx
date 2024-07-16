import { GridItemInterface } from "@/config/site-config";
import Image from "next/image";

import Background from "../../../public/background.jpg.jpg";
import Link from "next/link";

const equipmentsBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex flex-col  justify-end w-full h-full overflow-hidden rounded-3xl">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-900/60  to-neutral-950/90" />
      {/* background Image */}
      <Image
        className=" object-cover object-center"
        fill
        src={Background}
        alt="bg-image"
      />
      <div className=" relative z-20 p-8 ">
        <div className="text-sm font-semibold text-white mb-3">{item.title}</div>
        {/* Items */}
        <div className="flex flex-wrap items-center gap-3">
          {item.equipments?.map((equipmentsBox) => {
            return (
              <Link className="px-2 py-1 font-medium bg-white rounded-lg dark:bg-neutral-800 text-sm" key={equipmentsBox.link} href={equipmentsBox.link}>
                {" "}
                {equipmentsBox.title}{" "}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default equipmentsBox;
