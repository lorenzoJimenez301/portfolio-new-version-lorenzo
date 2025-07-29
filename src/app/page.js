import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto ">
      <section className="hero flex flex-col lg:flex-row h-[50rem]">
        <div className="section1 flex-2/5 uppercase flex items-center justify-center">
          <div>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 3</li>
              <li>Item 3</li>
            </ul>
            <h1 className="text-4xl font-bold">Hello</h1>
            <h2 className="text-2xl font-semibold">
              I'm a web developer – UX/UI designer – graphic designer
            </h2>
            <div className="mt-4 flex justify-center gap-4 ">
              <hr className="flex-auto mt-3" />
              <p className="flex-10/12 font-light ">
                Creative Web Developer building fast, accessible, and engaging
                experiences.
              </p>
            </div>
            <div>
              <button className="bg-transparent border border-lorenzo-dark p-3 px-10 font-bold text-sm cursor-pointer">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
        <div className="section2 flex-2/5 relative overflow-hidden w-max">
          <Image
            className="object-cover object-center scale-[230%] absolute top-[30rem]"
            src={"/images/hero-image.png"}
            alt="Hero Image"
            height={2302}
            width={2302}
          />
        </div>
      </section>
    </main>
  );
}
