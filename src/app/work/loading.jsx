import { TitleSection } from "../about/page.jsx";
import { MoreDetails } from "../about/page.jsx";
import data from "../../../public/data/projects.json";
import { CiImageOn } from "react-icons/ci";

const LoadingWork = () => {
  return (
    <section className="container mx-auto px-4 pt-20 lg:pt-20">
      <article className="flex flex-col gap-14 lg:gap-20">
        <div>
          <TitleSection
            title={"Work"}
            className2="lg:justify-start"
            className="lg:inline-block"
          />
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 xl:gap-20">
          {data.map((item) => (
            <li
              key={item.id}
              className="flex flex-col justify-between bg-lorenzo-lightgray dark:bg-lorenzo-lightdark w-full max-w-lg md:max-w-xl lg:max-w-full animate-pulse h-full"
            >
              <div className="flex justify-center items-center min-h-72 h-72 bg-lorenzo-medidark">
                <CiImageOn className="text-6xl text-lorenzo-lightdark krounded-full" />
              </div>
              <div className="flex flex-col justify-between px-6 py-8 gap-12 h-full min-h-52">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight bg-lorenzo-medidark h-9"></h3>
                  <p className="text-lg lg:text-xl text-muted-foreground bg-lorenzo-medidark w-2/3 h-9"></p>
                </div>
                <p className="h-9 w-2/5 bg-lorenzo-medidark"></p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default LoadingWork;
