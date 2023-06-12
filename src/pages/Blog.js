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
    </div>
  );
}

export default BlogPage;
