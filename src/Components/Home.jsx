function Home() {
  return (
    <div className=" grid grid-cols-4">
      <div className=" bg-red-600 h-full hidden md:block">Genre</div>
      <div className=" col-span-4 md:col-span-3 bg-blue-500 h-full">
        Game List1
      </div>
    </div>
  );
}

export default Home;
