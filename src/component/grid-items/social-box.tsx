import { GridItemInterface } from "@/config/site-config";
import Icon from "../icon";
import Button from "../button";
import Link from "next/link";

const SocialBox = ({ item }: { item: GridItemInterface }) => {
    return (
        <Link href={item.buttonLink ?? ""}>
            {/* Header */}
            <div className="flex items-center justify-between">
                {/* Icon */}
                <div>
                    <Icon type={item.icon ?? ""} color={item.color} />
                </div>
                {/* Button */}
                {item.layout === "2x2" && (
                    <div className="mt-2">
                        <Button text={item.buttonTitle ?? ""} secondaryText={item.buttonSecondaryText} color={item.color} />
                    </div>
                )}

            </div>
            {/* content Container */}
            <div className="mt-2">
                {/* Title */}
                <div className="text-lg font-semibold" >{item.title}</div>
                {/* Username */}
                <div className="text-sm text-neutral-500">{item.username}</div>
                {/* Description */}
                {item.description && (
                    <div className=" mt-1 text-sm text-neutral-500 line-clamp-2">{item.description}</div>
                )}

            </div>
            {/* Button */}
            {item.layout === "1x2" && (
                <div className="mt-2">
                    <Button text={item.buttonTitle ?? ""} secondaryText={item.buttonSecondaryText} color={item.color} />
                </div>
            )}
        </Link>


    )
}

export default SocialBox;




