import Connect from "./components/Connect/Connect";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import Search from "./components/Search/Search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between">
      <Connect />
      <div className="left-container w-2/3 min-h-screen flex flex-col justify-center items-center gap-10">
        <Search />
        <div className="features flex flex-row justify-around  w-4/5 ">
          <FeatureCard
            feature={"Phishing Links/ Intervals"}
            link="/discussion/create"
          />
          <FeatureCard
            feature={"Contract Address Token/NFT"}
            link="/discussion/create"
          />
        </div>
      </div>
      <div className="right-container w-1/3 min-h-screen flex flex-col justify-center items-center"></div>
    </main>
  );
}
