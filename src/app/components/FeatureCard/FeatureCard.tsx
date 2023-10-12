import Link from "next/link";
import "./featurecard.scss";
import Arrow from "@/app/assets/icons/arrow.svg";
import Image from "next/image";
function FeatureCard({ feature, link }: { feature: string; link: string }) {
  return (
    <div className="feature-card w-2/5 flex flex-col    rounded-2xl px-10 py-5 justify-between">
      <div className="feature-name text-5xl">{feature}</div>
      <div className="feature-link px-3">
        <Link href={link} className="flex flex-row justify-around">
          <p>Go</p>
          <Image alt="arrow" src={Arrow} className="arrow" />
        </Link>
      </div>
    </div>
  );
}

export default FeatureCard;
