import React from "react";

import Card from "../UI/Card";
import featured_news from "../assets/featured_news.jpg";

const featuredNewsLists = [
  {
    title: "Rorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Feb 24th, 2023",
  },
  {
    title: "Rorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Feb 24th, 2023",
  },
  {
    title: "Rorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Feb 24th, 2023",
  },
  {
    title: "Rorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Feb 24th, 2023",
  },
  {
    title: "Rorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Feb 24th, 2023",
  },
  {
    title: "Rorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Feb 24th, 2023",
  },
];

const latestNewsLists = [
  {
    title: "Hizbullah sets new milestone as they appoint a new CEO",
    description: `Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
    Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
    `,
    category: "News",
    date: "Feb 24, 2023",
  },
  {
    title: "Hizbullah sets new milestone as they appoint a new CEO",
    description: `Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
    Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
    `,
    category: "News",
    date: "Feb 24, 2023",
  },
  {
    title: "Hizbullah sets new milestone as they appoint a new CEO",
    description: `Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
    Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
    `,
    category: "News",
    date: "Feb 24, 2023",
  },
];

function BlogItem() {
  return (
    <>
      <h1 className="font-bold text-[20px] lg:text-[32px] text-[#323232] ">
        Featured news
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredNewsLists.map((featuredNewsList, i) => (
          <li className="list-none">
            <Card>
              <div>
                <img
                  src={featured_news}
                  alt={featuredNewsList.title}
                  className="w-[100%] rounded-t-lg mb-8 object-fill"
                />
              </div>
              <div className="px-4 mb-4 font-bold underline decoration-solid underline-offset-4 text-[18px]">
                <a href="#">{featuredNewsList.title}</a>
              </div>
              <div className="px-4 pb-2 text-[12px]">
                <p>{featuredNewsList.date}</p>
              </div>
            </Card>
          </li>
        ))}
      </section>

      <section>
        <h1 className="mt-[5rem] font-bold text-[32px]">Latest news</h1>
        {latestNewsLists.map((latestNewsList, i) => (
          <div className="border-b-4 pb-8 mb-10 md:pb-4 md:mb-20">
            <div className="text-[20px] md:text-[32px] underline underline-offset-8 my-6">
              <a href="#">{latestNewsList.title}</a>
            </div>
            <div className="font-[400] text-[14px] md:text-[18px] tracking-[-0.5px] text-[#6D6D6D]">
              <p>{latestNewsList.description}</p>
            </div>
            <span className="w-[15rem] grid grid-cols-2 mt-3">
              <div className="font-bold">
                <p>{latestNewsList.category}</p>
              </div>
              <div>
                <p>{latestNewsList.date}</p>
              </div>
            </span>
          </div>
        ))}
      </section>

      <div className="text-center text-[#29A529]">
        <a href="#">See all latest news release</a>
      </div>
    </>
  );
}

export default BlogItem;
