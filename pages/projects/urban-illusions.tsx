import fs from "fs";
import path from "path";
import Image from "next/image";

export const metadata = {
  title: "城市幻像",
  description: "城市是破碎的拼贴，是流动的幻梦……" // ✅ 添加这一行
};


export async function getStaticProps() {
  const folder = path.join(process.cwd(), "public/images/urban-illusions");
  const files = fs
    .readdirSync(folder)
    .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

  return {
    props: {
      images: files,
    },
  };
}

export default function UrbanIllusions({ images }: { images: string[] }) {
  return (
    <main className="p-6 space-y-12 max-w-5xl mx-auto">
      <section>
        <h1 className="text-3xl font-bold mb-4">城市幻像</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          城市是破碎的拼贴，是流动的幻梦。<br />
          人们在其中穿梭，一切都在发生，却从未被看清。<br />
          借由玻璃与水面，它偷偷凝视自己，<br />
          映出虚与实、真实与幻觉的缝隙。<br />
          城市也会做梦。梦见雪豹伏在山脊，梦见热带花园安在边疆。<br />
          你见过吗？它短暂地浮现，又悄然隐去。
        </p>
      </section>

      <section className="grid gap-8">
        {images.map((img, index) => (
          <div key={index}>
            <Image
              src={`/images/urban-illusions/${img}`}
              alt={`城市幻像 ${index + 1}`}
              width={1200}
              height={800}
              className="rounded-xl shadow"
            />
          </div>
        ))}
      </section>
    </main>
  );
}
