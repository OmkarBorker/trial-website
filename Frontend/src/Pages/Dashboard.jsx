import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="pt-32 px-4 pb-10">
        <div className="p-8 bg-white shadow mt-24">
          {" "}
          <div className="grid grid-rows-1 md:grid-cols-3">
            {" "}
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              {" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-xl">22</p>{" "}
                <p className="text-gray-400">Trips</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-xl">89</p>{" "}
                <p className="text-gray-400">Comments</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative">
              {" "}
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>{" "}
              </div>{" "}
            </div>{" "}
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                {" "}
                Change Plan
              </button>{" "}
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                {" "}
                Help
              </button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="mt-20 text-center border-b pb-12">
            {" "}
            <h1 className="text-4xl font-medium text-gray-700">
              Jessica Jones<span className="font-light text-gray-500"></span>
            </h1>{" "}
            <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>{" "}
            <p className="mt-2 text-gray-500">Hobbiest</p>{" "}
          </div>{" "}
          <div className="mt-12 flex flex-col justify-center">
            {" "}
            <p className="text-gray-600 text-center font-light lg:px-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi distinctio ipsam officiis omnis eum ut esse vero nulla magni corrupti voluptate consequatur delectus, quis numquam quae saepe iusto cumque!
              Atque nemo nam fugit hic aut aliquid sunt deleniti eaque, sed ex, vero alias eius voluptate itaque deserunt velit veritatis reiciendis esse sit quis temporibus! Nostrum eveniet sint enim dolorem?
              Iste nesciunt odit explicabo nostrum quibusdam libero ipsam necessitatibus dolorem, nulla, rerum consequuntur vel est maxime magnam perferendis distinctio nobis impedit quod fuga numquam animi. Aspernatur numquam ex officiis consectetur!
              Voluptatum dolore, quod quia fugit quae perspiciatis accusamus doloremque repellat doloribus, ipsa exercitationem quos, magnam adipisci minus nisi fugiat earum fuga corrupti pariatur ex aliquid? Numquam id voluptatem mollitia hic.
              Et, tempore enim maiores natus expedita, cum aliquid rerum suscipit dolorem, nulla in. Commodi et impedit ipsa repellendus pariatur eos nisi consectetur iste officia itaque non blanditiis, id quis atque!
              Rerum, blanditiis! Voluptatibus voluptate possimus distinctio sapiente incidunt similique nulla odio assumenda, reprehenderit voluptatum consequuntur! Dicta cupiditate laborum odio rem, consequatur dolorum quidem dolor quae eius officia quis reprehenderit repellat!
              Tenetur et rerum aut excepturi pariatur fugit commodi cumque ratione quam expedita ex, voluptates voluptatum odio fuga magnam aperiam dicta officiis consectetur veniam error dolor amet accusantium voluptatibus. Nemo, alias.
              Consequuntur hic alias eum debitis doloremque. Maiores quos eaque, harum libero soluta ea fugiat excepturi itaque ab dolor, dolorum delectus est. Reprehenderit error perferendis a esse placeat, molestias ex nulla!
              Assumenda eius fuga cumque! Sit enim provident eveniet explicabo accusamus. Officiis maxime facere quos possimus molestias consequatur recusandae tenetur, odit ab vel qui, sit, ea totam dignissimos rem. Iste, nobis!
              Repudiandae beatae, aut magnam iste distinctio, quo sequi earum facere, blanditiis officia temporibus consequuntur! Magnam ipsam quasi neque quod dignissimos, illo repellendus aperiam voluptates mollitia, fugiat, quidem voluptas similique! Eius!
            </p>{" "}
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              {" "}
              Show more
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
