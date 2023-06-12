import React from "react";

import Card from "../UI/Card";
import featured_news from "../assets/featured_news.jpg";

function BlogItem() {
  return (
    <>
      <h1 className="font-bold text-[20px] lg:text-[32px] text-[#323232] ">
        Featured news
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <li className="list-none">
          <Card>
            <div>
              <img
                src={featured_news}
                alt="featured news"
                className="w-[100%] rounded-t-lg mb-8 object-fill"
              />
            </div>
            <div className="px-4 mb-4 font-bold underline decoration-solid underline-offset-4 text-[18px]">
              <a href="#">
                Rorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
            </div>
            <div className="px-4 pb-2 text-[12px]">
              <p>Feb 24th, 2023</p>
            </div>
          </Card>
        </li>

        <li className="list-none">
          <Card>
            <div>
              <img
                src={featured_news}
                alt="featured news"
                className="w-[100%] rounded-t-lg mb-8 object-fill"
              />
            </div>
            <div className="px-4 mb-4 font-bold underline decoration-solid underline-offset-4 text-[18px]">
              <a href="#">
                Rorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
            </div>
            <div className="px-4 pb-2 text-[12px]">
              <p>Feb 24th, 2023</p>
            </div>
          </Card>
        </li>

        <li className="list-none">
          <Card>
            <div>
              <img
                src={featured_news}
                alt="featured news"
                className="w-[100%] rounded-t-lg mb-8 object-fill"
              />
            </div>
            <div className="px-4 mb-4 font-bold underline decoration-solid underline-offset-4 text-[18px]">
              <a href="#">
                Rorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
            </div>
            <div className="px-4 pb-2 text-[12px]">
              <p>Feb 24th, 2023</p>
            </div>
          </Card>
        </li>

        <li className="list-none">
          <Card>
            <div>
              <img
                src={featured_news}
                alt="featured news"
                className="w-[100%] rounded-t-lg mb-8 object-fill"
              />
            </div>
            <div className="px-4 mb-4 font-bold underline decoration-solid underline-offset-4 text-[18px]">
              <a href="#">
                Rorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
            </div>
            <div className="px-4 pb-2 text-[12px]">
              <p>Feb 24th, 2023</p>
            </div>
          </Card>
        </li>

        <li className="list-none">
          <Card>
            <div>
              <img
                src={featured_news}
                alt="featured news"
                className="w-[100%] rounded-t-lg mb-8 object-fill"
              />
            </div>
            <div className="px-4 mb-4 font-bold underline decoration-solid underline-offset-4 text-[18px]">
              <a href="#">
                Rorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
            </div>
            <div className="px-4 pb-2 text-[12px]">
              <p>Feb 24th, 2023</p>
            </div>
          </Card>
        </li>

        <li className="list-none">
          <Card>
            <div>
              <img
                src={featured_news}
                alt="featured news"
                className="w-[100%] rounded-t-lg mb-8 object-fill"
              />
            </div>
            <div className="px-4 mb-4 font-bold underline decoration-solid underline-offset-4 text-[18px]">
              <a href="#">
                Rorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
            </div>
            <div className="px-4 pb-2 text-[12px]">
              <p className="">Feb 24th, 2023</p>
            </div>
          </Card>
        </li>
      </section>
    </>
  );
}

export default BlogItem;
