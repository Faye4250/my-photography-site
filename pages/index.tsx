import Link from "next/link";

// ✅ 正确地定义类型，description 是可选的（用问号）
type Project = {
  slug: string;
  title: string;
  description?: string;
};

// ✅ 正确地使用这个类型定义项目数组
const projects: Project[] = [
  {
    slug: "urban-illusions",
    title: "城市幻像"
    // 没有写 description 是可以的
  }
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

            {/* ✅ 这里加了判断：如果有 description 才显示 */}
            {project.description && (
              <p className="text-muted-foreground text-lg">
                {project.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
