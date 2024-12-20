import Footer from "./components/footer";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <div className="mx-1 md:mx-auto ">
      <div className="flex justify-center items-center text-white h-[44vh]  flex-col gap-2 text-center md:gap-4 ">
        <h1 className="text-2xl md:text-5xl flex md:gap-2 items-center justify-center font-semibold">
          Get me a coffee
          <span>
            <img
              src="/assets/coffee.gif"
              width={88}
              className=" text-[20px]"
              alt="coffee-logo"
            />
          </span>
        </h1>
        <p className="text-1xl md:text-2xl">
          A crowdfounding platform for creators. Get funded by your fans and
          followers
        </p>
        <div className="flex">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="h-2 bg-slate-500 opacity-10"></div>
      <div>
        <div className="my-4 py-5">
          <h1 className="text-2xl md:text-4xl text-white font-semibold text-center">
            Your fans can buy you a coffee
          </h1>

          <div className=" text-white flex  items-center text-center  justify-around my-10">
            <div className="items-center flex justify-center flex-col gap-4 my-10">
              <img
                src="/assets/working.gif"
                width={88}
                className="rounded-full bg-white"
                alt="logo"
              ></img>
              <div className="flex flex-col gap-2">
                <h2 className=" text-[15px] md:text-[20px] font-[600]">
                  Fans want to help
                </h2>
                <p className="text-[13px] md:text-1xl">
                  Your fans are available to help you
                </p>
              </div>
            </div>
            <div className="items-center flex justify-center flex-col gap-4 my-10">
              <img
                src="/assets/coin.gif"
                alt="logo"
                width={79}
                className="rounded-full bg-white"
              ></img>
              <div className="flex flex-col gap-2">
                <h2 className=" text-[15px] md:text-[20px] font-[600]">
                  Fans want to help
                </h2>
                <p className="text-[13px] md:text-1xl">
                  Your fans are available to help you
                </p>
              </div>
            </div>
            <div className="items-center flex justify-center flex-col gap-4 my-10">
              <img
                src="/assets/group.gif"
                width={79}
                className="rounded-full bg-white"
                alt="logo"
              ></img>
              <div className="flex flex-col gap-2">
                <h2 className=" text-[15px] md:text-[20px] font-[600]">
                  Fans want to help
                </h2>
                <p className="text-[13px] md:text-1xl">
                  Your fans are available to help you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2 bg-slate-500 opacity-10"></div>

      <div className="flex justify-center items-center flex-col my-10 gap-5">
        <h1 className="text-white text-4xl font-[600] ">Learn More</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Sklc_fQBmcs?si=cQKNPNeQVX3UvNVd"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
