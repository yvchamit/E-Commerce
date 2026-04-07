import PostCard from "../../components/PostCard";

function Posts() {
  return (
    <section className="py-20 px-8 md:px-0 max-w-section mx-auto">
      <div className="text-center mb-16 space-y-2 px-12">
        <h6 className="text-[#23A6F0] font-bold text-sm">Practice Advice</h6>
        <h2 className="text-4xl font-bold text-[#252B42]">Featured Products</h2>
        <p className="text-[#737373] text-sm max-w-md mx-auto leading-5">
          Problems trying to resolve the conflict between the two major
        </p>
      </div>
      <PostCard />
    </section>
  );
}

export default Posts;
