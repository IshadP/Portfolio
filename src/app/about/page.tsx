import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full relative bg-bg-default">
      <div className="w-content flex flex-col bg-bg-default  overflow-hidden">

        {/* 1. Story Section */}
        <div className="w-full grid grid-cols-2">
          {/* Image Block */}
          <div className="col-span-1  relative">
            <Image
              src="/Photo.jpg"
              alt="Ishad Pande story preview"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Content Area */}
          <div className="col-span-1 px-6 flex flex-col justify-start items-start gap-6">
            <h2 className="text-text-primary font-h3">
              This is my story
            </h2>
            <div className="flex flex-col gap-6 text-text-muted font-body-sm">
              <p>
                I always liked cars, and how they looked, there was something amazing about sports car, something that just felt that these can drive faster than others. This was back in 6th standard.
              </p>
              <p>
                Then the pandemic hit, during which I feel in love with Linux. I used to spend hour customising my desktop and obsessed with making a efficient workflow.
              </p>
              <p>
                This obsession led to choose Computer Science as major degree. In 2022, I joined college and started the hustle of learning development.
              </p>
              <p>
                During development, most of my time was spent on making the project look and feel more “intuitive”. Side by side, I started with graphic design in college for clubs. Around 2nd year, discovered field of UX and something clicked.
              </p>
              <p>
                Been designing ever since!
              </p>
            </div>
          </div>
        </div>

        {/* 2. What I Like to Do Section */}
        <div className="w-full flex flex-col my-8 justify-start items-stretch ">
          {/* Content Area */}
          <div className="flex-1 p-4 flex flex-col justify-start items-start gap-6">
            <h2 className="text-text-muted w-full border-b border-outline pb-2 font-h3">
              What I like to do
            </h2>
            <div className="gap-6 grid-cols-2 grid-rows-2 grid w-full">
              {/* Item 1 */}
              <div className="flex flex-col gap-4">
                <h3 className="text-text-primary font-body-sm-bold">
                  📱 Building Apps &amp; Interactions
                </h3>
                <p className="text-text-muted font-body-sm">
                  Using Flutter and Framer Motion + Tailwind CSS. Noticing unique interaction and recreating them is always challenging but fun...
                </p>
              </div>
              {/* Item 2 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-text-primary font-body-sm font-semibold">
                  🎮 Gaming
                </h3>
                <p className="text-text-muted font-body-sm">
                  Time to Time, I like to play games. I have played a lot of games in past like Jedi: Fallen Order, Minecraft, Need for Speed: Heat &amp; many more
                </p>
              </div>
              {/* Item 3 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-text-primary font-body-sm font-semibold">
                  ⛹️‍♂️ Basketball
                </h3>
                <p className="text-text-muted font-body-sm">
                  Started in 5th grade, I played it for around 7 years consistently. I still play occasionally. Always fun to play!
                </p>
              </div>
              {/* Item 4 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-text-primary font-body-sm font-semibold">
                  📷 Photography
                </h3>
                <p className="text-text-muted font-body-sm">
                  I picked this hobby around the same time I started designing, picturing sky, and viewing simple daily places in a different way is what its all about
                </p>
              </div>
            </div>
          </div>
          {/* Collage Images Block */}

          <div className="grid grid-cols-3 grid-rows-3 gap-6 w-full p-6 aspect-3/2">
            {/* Column 1: Row 1 & 2 */}
            <div className="relative col-start-1 row-start-1 row-span-2 rounded-2xl overflow-hidden border border-outline bg-bg-default">
              <Image src="/about/trip1.webp" fill className="object-cover" alt="trip" />
            </div>
            {/* Column 2: Row 1 */}
            <div className="relative col-start-2 row-start-1 row-span-1 rounded-2xl overflow-hidden border border-outline bg-bg-default">
              <Image src="/about/photo2.webp" fill className="object-cover" alt="photo" />
            </div>
            {/* Column 3: Row 1 & 2 */}
            <div className="relative col-start-3 row-start-1 row-span-2 rounded-2xl overflow-hidden border border-outline bg-bg-default">
              <Image src="/about/CSMT.webp" fill className="object-cover" alt="CSMT Mumbai" />
            </div>
            {/* Column 2: Row 2 & 3 */}
            <div className="relative col-start-2 row-start-2 row-span-2 rounded-2xl overflow-hidden border border-outline bg-bg-default">
              <Image src="/about/jedif.webp" fill className="object-cover" alt="jedi" />
            </div>
            {/* Column 1: Row 3 */}
            <div className="relative col-start-1 row-start-3 row-span-1 rounded-2xl overflow-hidden border border-outline bg-bg-default">
              <Image src="/about/basketball.webp" fill className="object-cover" alt="basketball" />
            </div>
            {/* Column 3: Row 3 */}
            <div className="relative col-start-3 row-start-3 row-span-1 rounded-2xl overflow-hidden border border-outline bg-bg-default">
              <Image src="/about/alibag.webp" fill className="object-cover" alt="trip" />
            </div>
          </div>

        </div>

        {/* 3. Sci-fi Section */}
        <div className="w-full flex flex-col md:flex-row justify-start items-stretch">
          {/* Left spacer block */}
          <div className="flex-1 p-10 border-b md:border-b-0 md:border-r border-outline flex items-center justify-center bg-bg-subtle min-h-[200px] md:min-h-full relative overflow-hidden">
            <Image
              src="/bg.webp"
              alt="Sci-fi wallpaper theme background"
              fill
              className="object-cover opacity-60 mix-blend-luminosity"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Content Area */}
          <div className="flex-1 p-10 flex flex-col justify-start items-start gap-6">
            <h2 className="text-text-primary font-h3">
              Last but not the least
            </h2>
            <div className="flex flex-col gap-4 text-text-muted font-body-sm w-full">
              <p className="text-text-primary font-semibold">
                I love Sci-Fi
              </p>
              <p>
                Can talk hours about all about it!
              </p>
              <div className="flex flex-col gap-1 mt-2">
                <p className="text-text-primary font-semibold">
                  What I have watched / played:
                </p>
                <ul className="list-disc pl-5 flex flex-col">
                  <li>Expanse</li>
                  <li>Halo</li>
                  <li>Star Wars</li>
                  <li>Battlestar Galactica</li>
                  <li>Moonfall</li>
                  <li>and many more...</li>
                </ul>
              </div>
              <p className="mt-4">
                I even make wallpaper of them.
              </p>
              <Link
                href="https://x.com/ishadpande"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-4 font-semibold"
              >
                Check them out here
              </Link>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
