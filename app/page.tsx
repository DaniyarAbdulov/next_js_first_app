import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Portal&CRM
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Jusan Bank</span>
      </h1>
      <p className="desc text-center">
        Share news with your mates, write down your ideas, read the actual
        information and many more!
      </p>

      <Feed />
    </section>
  );
};

export default Home;
