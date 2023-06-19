import { Header } from "../components/Header";
import BlogCardItem from "../components/BlogCardItem";

function BlogPage(props) {
  return (
    <div className="mt-12">
      <div className="blog brightness-60 h-[160px] w-full lg:h-[220px] bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <Header
          type={1}
          text={
            <div>
              <h1 className="text-[32px] lg:text-[48px]">News</h1>
              <p className="text-[16px] lg:text-[20px]">
                Read the latest press release and news from hizbullah
              </p>
            </div>
          }
          className={"text-white text-center"}
        />
      </div>
      <section className="px-2 mt-20 md:px-6 lg:px-24">
        <BlogCardItem />
      </section>

      <section className="px-2 pt-2 mt-20 md:px-6 lg:px-24 bg-[#E9FFE9] flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:divide-x-2 md:divide-[#6d6d6d] md:divide-y-0">
        <div>
          <h2 className="text-[24px] md:text-[48px] font-[300] text-[#323232] mb-2 md:mb-6 border-t border-[#000] md:border-t-0 pt-4 md:pt-0">
            Stay up to date on our latest initiative
          </h2>
          <p className="text-[14px] md:text-[18px] font-[400] text-[#6D6D6D]">
            Hizbullah is dedicated to supporting the communities we work in.
            Discover what we are doing to aid areas in need and our plans for
            the future.
          </p>
          <div className="my-6 grid grid-cols-1 md:flex gap-4 md:gap-8">
            <input
              placeholder="myexample@gmail.com"
              className="px-2 py-2 bg-none rounded-[12px] outline-0 border-solid border-[#6d6d6d] border-2 bg-inherit text-[#6d6d6d] w-[100%] md:w-[50%]"
            />
            <button className="bg-[#29A529] px-10 py-2 rounded-[5px] text-[#fff] hover:bg-[#1a851a]">
              Subsribe
            </button>
          </div>
        </div>
        <div className="md:my-14 md:px-10">
          <div className="flex flex-col gap-8 mt-4 md:pb-4 font-[500]">
            <p>Building schools all around the country</p>
            <p>Impacting Education in the upcoming generation</p>
            <p>Building a community of ...</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
