import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 space-y-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold">绪无的摄影主页</h1>
      <p className="text-lg text-gray-600">
        欢迎来到我的摄影世界。点击进入各个项目页，欣赏每一个主题下的持续创作。
      </p>

      <ul className="list-disc list-inside space-y-2 text-blue-600">
        <li>
          <Link href="/projects/urban-illusions" className="hover:underline">
            城市幻像 Urban Illusions
          </Link>
        </li>
        {/* 未来你可以在这里继续添加更多项目 */}
      </ul>
    </main>
  );
}
