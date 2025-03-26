import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  description?: string; // 说明：description 是可选字段
};

const projects: Project[] = [
  {
    slug: "urban-illusions",
    title: "城市幻像",
    // description: "城市是破碎的拼贴，是流动的幻梦。它映出真实与幻觉的缝隙，梦见雪豹伏在山脊，梦见热带花园安在边疆。"
  },
  // 可以继续添加更多项目
];

export default function Home() {
  return (
    <main className="p-6 space-y-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">我的摄影项目</h1>
      <div className="grid gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block p-6 border rounded-xl hover:shadow transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            {project.description && (
              <p className="text-muted-foreground text-lg">{project.description}</p>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
