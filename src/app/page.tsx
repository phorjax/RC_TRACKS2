import Image from "next/image";
import KidPlaying from "../../public/rctracks-kidplaying.jpg";


export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen flex-row justify-start" id="HeroSection">
        <div id="Triangle"></div>
        <div className="hero-content text-left  text-neutral-content" >
          <div className="h-screen" id="HeroText" >
            <h1 className="mb-5 text-5xl">PISTAS A <span className="text-amber-400 mb-5 text-5xl">TODO TERRENO </span> PARA LOS MEJORES <span className="text-amber-400 mb-5 text-5xl">4X4 RC!</span></h1>
            <br />
            <h1 className="mb-5 text-4xl"> <span className="text-amber-400 mb-5 text-4xl">ENTRETENIMIENTO</span> PARA TODA LA <span className="text-amber-400 mb-5 text-4xl">FAMILIA</span></h1>
            <button className="btn btn-warning  text-2xl">Contactanos</button>
          </div>
        </div>
      </div>
      <div className="w-full h-4 bg-amber-400"></div>
      <div className="container mx-auto">
        <section className="">
          <div className="block">
            <div className="flex flex-wrap items-center">
              <div className=" w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-7/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-4 text-2xl font-bold">
                    What's the secret of the great taste?
                  </h2>
                  <p className="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="mr-2 h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                    </svg>
                    Hot news
                  </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Earum maxime voluptas ipsam aliquam itaque cupiditate
                    provident architecto expedita harum culpa odit, inventore rem
                    molestias laborum repudiandae corporis pariatur quo eius iste!
                    Quaerat, assumenda voluptates! Molestias, recusandae? Maxime
                    fuga omnis ducimus.
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Commodi ut nisi assumenda alias maxime necessitatibus ad rem
                    repellat explicabo, reiciendis illum suscipit iusto? Provident
                    dignissimos similique, reiciendis inventore accusantium unde
                    mollitia, deleniti quae atque error id perspiciatis illum.
                    Laboriosam aperiam ab illo dignissimos obcaecati corporis
                    similique a odio, optio iste quis placeat alias amet rerum
                    sint quos dolor pariatur inventore possimus ad consequuntur
                    fugiat perferendis consectetur laudantium.
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-5/12">
              <Image src={KidPlaying} className="w-full" alt={""} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
