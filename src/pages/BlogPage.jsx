import BlogCard from "../components/BlogCard";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import Clients from "../sections/Clients";

export default function BlogPage() {
  const blogData = [
    {
      id: 1,
      image: "/image/blog1.jpg",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10",
    },
    {
      id: 2,
      image: "/image/blog2.jpg",
      title: "The Best Way to Style Your Home",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "24 April 2021",
      comments: "15",
    },
    {
      id: 3,
      image: "/image/blog3.jpg",
      title: "10 Tips for a Minimalist Office",
      description:
        "Maximize your productivity by decluttering your workspace with these simple steps.",
      date: "26 April 2021",
      comments: "7",
    },
    {
      id: 4,
      image: "/image/blog4.jpg",
      title: "The Evolution of Modern Tech",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "28 April 2021",
      comments: "22",
    },
    {
      id: 5,
      image: "/image/blog5.jpg",
      title: "Mastering the Art of Layout",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "30 April 2021",
      comments: "12",
    },
    {
      id: 6,
      image: "/image/blog6.jpg",
      title: "Future of E-commerce Design",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "02 May 2021",
      comments: "18",
    },
  ];

  return (
    <>
      <Header page="contact" showIcon={true}/>
      <main className="bg-[#FAFAFA]">
        <div className="max-w-section py-24 px-8 md:px-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 items-stretch">
          {blogData.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
              date={post.date}
              comments={post.comments}
            />
          ))}
        </div>
      </main>
      <Clients
        description="Trusted By Over 4000 Big Companies"
        descriptionColor="text-[#252B42]"
      />
      <Footer />
    </>
  );
}
