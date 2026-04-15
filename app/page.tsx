export default async function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="h-full w-full  py-32 px-16 flex flex-col justify-center items-center">
        <h1>Hi</h1>
        <h2>Welcome</h2>
        <div className="w-96">
          <p>
            This is a demo e-commerce website created for learning purposes. The
            project focuses on integrating and managing products from an
            external API, as well as designing a smooth user experience from the
            moment a visitor enters the site to completing a simulated purchase.
            It showcases product browsing, selection, and a mock checkout flow,
            without processing real payments.{' '}
          </p>
        </div>
      </main>
    </div>
  );
}
