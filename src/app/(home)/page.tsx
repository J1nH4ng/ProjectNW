// import { cva } from "class-variance-authority";
import {
  BatteryChargingIcon,
  // CpuIcon,
  // FileEditIcon,
  // FileTextIcon,
  ListTree,
  // LayoutIcon,
  // LibraryIcon,
  type LucideIcon,
  MousePointer,
  // PaperclipIcon,
  PocketKnife,
  AtSign,
  // SearchIcon,
  // Terminal,
  AppWindowMac,
  BadgeCheck,
  Workflow,
  GraduationCap,
  ListTodo,
  Download,
} from "lucide-react";
// import { File, Files, Folder } from "fumadocs-ui/components/files";
import Link from "next/link";
import type { 
  // HTMLAttributes, 
  ReactNode 
} from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { buttonVariants } from "@/components/ui/button";
// import { CodeBlock } from "@/components/code-block";
import { UwuHero } from "@/app/(home)/uwu";
// import SourceImage from "@/public/source.png";
// import ContributorCounter from "@/components/contributor-count";
import {
  // CreateAppAnimation,
  PreviewImages,
  // WhyInteractive,
} from "./page.client";
// import { NetlifyLogo, VercelLogo } from "./icons";
// import { TypeTable } from "fumadocs-ui/components/type-table";
// import { owner, repo } from "@/lib/github";
// import { Marquee } from "@/app/(home)/marquee";
import ArchImg from "./arch.png";

// const badgeVariants = cva(
//   "inline-flex size-7 items-center justify-center rounded-full bg-fd-primary font-medium text-fd-primary-foreground",
// );

export default function Page() {
  const gridColor =
    "color-mix(in oklab, var(--color-fd-primary) 10%, transparent)";

  return (
    <>
      <div
        className="absolute inset-x-0 top-[360px] h-[250px] max-md:hidden"
        style={{
          background: `repeating-linear-gradient(to right, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px)`,
        }}
      />
      <main className="container relative max-w-[1100px] px-2 py-4 z-[2] lg:py-8">
        <div
          style={{
            background:
              "repeating-linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-fd-primary) 1%, transparent) 500px, transparent 1000px)",
          }}
        >
          <div className="relative">
            <Hero />
            <UwuHero />
          </div>
          {/* <Feedback /> */}
          {/* <Introduction /> */}
          <div
            className="relative overflow-hidden border-x border-t px-8 py-16 sm:py-24"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, var(--color-fd-secondary), var(--color-fd-background) 40%)",
            }}
          >
            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              为新手构建，
              <br />
              系统化的知识结构。
            </h2>
          </div>
          <Architecture />
          {/* <Features /> */}
          <Highlights />
          {/* <Why /> */}
          {/* <Contributing /> */}
          <End />
        </div>
      </main>
    </>
  );
}

function Architecture() {
  return (
    <div className="flex flex-col gap-4 border-x border-t p-8 md:px-12 lg:flex-row">
      <div className="text-start">
        <p className="px-2 py-1 text-sm font-mono bg-fd-primary text-fd-primary-foreground font-bold w-fit mb-4">
          完全开源的知识笔记
        </p>
        <h2 className="text-2xl font-semibold mb-4">基于优秀的笔记框架</h2>
        <p className="text-fd-muted-foreground mb-6">
          基于 Fumadocs 框架重新构建，得益于 React 强大的生态系统和 Fumadocs 优秀的架构设计，实现了更多的功能与令人舒适的统一 UI 风格。
        </p>
      </div>
      <Image
        src={ArchImg}
        alt="Architecture"
        className="mx-auto -my-16 w-full max-w-[400px] invert dark:invert-0 lg:mx-0"
      />
    </div>
  );
}

// async function Why() {
//   return (
//     <div className="relative overflow-hidden border-x border-t p-2">
//       <WhyInteractive
//         typeTable={
//           <TypeTable
//             type={{
//               name: {
//                 type: "string",
//                 description: "The name of player",
//                 default: "hello",
//               },
//               code: {
//                 type: "string",
//                 description: (
//                   <CodeBlock lang="ts" code='console.log("Hello World")' />
//                 ),
//               },
//             }}
//           />
//         }
//         codeblockSearchRouter={
//           <CodeBlock
//             lang="ts"
//             code={`import { source } from '@/lib/source';
// import { createFromSource } from 'fumadocs-core/search/server';

// export const { GET } = createFromSource(source);`}
//           />
//         }
//         codeblockTheme={
//           <CodeBlock
//             lang="css"
//             code={`@import 'tailwindcss';
// @import 'fumadocs-ui/css/neutral.css';
// @import 'fumadocs-ui/css/preset.css';`}
//           />
//         }
//         codeblockInteractive={
//           <CodeBlock
//             lang="tsx"
//             code={`import { File, Folder, Files } from 'fumadocs-ui/components/files';

// <Files>
//   <Folder name="app" defaultOpen>
//     <File name="layout.tsx" />
//     <File name="page.tsx" />
//     <File name="global.css" />
//   </Folder>
//   <File name="package.json" />
// </Files>`}
//           />
//         }
//         codeblockMdx={
//           <CodeBlock
//             lang="tsx"
//             code={`import { db } from '@/server/db';

// export function ProductTable() {
//   const products = db.getProducts()

//   return (
//     <ul>
//       {products.map(product => <li key={product.key}>{product.name}</li>)}
//     </ul>
//   );
// }

// ## Products

// <ProductTable />`}
//           />
//         }
//       />
//     </div>
//   );
// }

function End() {
  return (
    <div className="flex flex-col border-b border-r md:flex-row *:border-l *:border-t">
      <div className="group flex flex-col min-w-0 flex-1 pt-8 **:transition-colors">
        <h2 className="text-3xl text-center font-extrabold font-mono uppercase text-fd-muted-foreground mb-4 lg:text-4xl group-hover:text-blue-500">
          享受你的阅读体验
        </h2>
        <p className="text-center font-mono text-xs text-fd-foreground/60 mb-8 group-hover:text-blue-500/80">
          正如毛姆在《月亮与六便士》中写道：
          <br />
          “人生漫长转瞬即逝，有人见尘埃，有人见星辰，也有人转瞬即逝。
          <br />
          满地都是六便士，他抬头却看见了月亮。”
        </p>
        <div className="h-[200px] overflow-hidden p-8 bg-gradient-to-b from-fd-primary/10 group-hover:from-blue-500/10">
          <div className="mx-auto bg-radial-[circle_at_0%_100%] from-60% from-transparent to-fd-primary size-[500px] rounded-full group-hover:from-blue-500 group-hover:to-blue-600/10" />
        </div>
      </div>
      <ul className="flex flex-col gap-4 p-6 pt-8">
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <BatteryChargingIcon className="size-5" />
            持续更新
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            保证文档的所有内容是最新与最准确的。
          </span>
        </li>
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            完全开源
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            你可以在 Github 上找我我们的所有内容。
          </span>
        </li>
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <Workflow className="size-5" />
            系统化的
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            根据业务上线的基本流程来编写文档，确保整体流程的一致性。
          </span>
        </li>
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <BadgeCheck className="size-5" />
            生产检验
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            文档中的所有内容是经过生产环境检验得出的，确保可用性。
          </span>
        </li>
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <GraduationCap className="size-5" />
            终生学习
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            只有那些经过自己思考得出的结论才是真正意义上的自我的知识。
            <br />
            解决焦虑的唯一方法就是不断的学习，行动往往是解决问题的最好办法。
          </span>
        </li>
        {/* <li className="flex flex-row flex-wrap gap-2 mt-auto">
          <Link href="/docs" className={cn(buttonVariants())}>
            Read docs
          </Link>
          <a
            href="https://stackblitz.com/~/github.com/fuma-nama/fumadocs-ui-template"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
            )}
          >
            Open Demo
          </a>
        </li> */}
      </ul>
    </div>
  );
}

// const searchItemVariants = cva(
//   "flex flex-row items-center gap-2 rounded-md p-2 text-sm text-fd-popover-foreground",
// );

// function Search(): React.ReactElement {
//   return (
//     <div className="mt-6 rounded-lg bg-gradient-to-b from-fd-border p-px">
//       <div className="flex select-none flex-col rounded-[inherit] bg-gradient-to-b from-fd-popover">
//         <div className="inline-flex items-center gap-2 px-4 py-2 text-sm text-fd-muted-foreground">
//           <SearchIcon className="size-4" />
//           点击搜索……
//         </div>
//         <div className="border-t p-2">
//           {[
//             "Getting Started",
//             "Components",
//             "MDX Content",
//             "User Guide",
//             "Javascript SDK",
//           ].map((v, i) => (
//             <div
//               key={v}
//               className={cn(
//                 searchItemVariants({
//                   className: i === 0 ? "bg-fd-accent" : "",
//                 }),
//               )}
//             >
//               <FileTextIcon className="size-4 text-fd-muted-foreground" />
//               {v}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

function Highlights(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-full flex flex-row items-start justify-center border-l border-t p-8 pb-2 text-center">
        <h2 className="bg-fd-primary text-fd-primary-foreground px-1 text-2xl font-semibold">
          新版亮点
        </h2>
        <MousePointer className="-ml-1 mt-8" />
      </div>
      <Highlight icon={ListTodo} heading="完善的检查列表">
        对于每一部分的工作内容，提供一份完整详细的检查列表，确保工作完成的可靠性和可维护性。
      </Highlight>
      <Highlight icon={AppWindowMac} heading="完整的操作步骤">
        对于需要在浏览器窗口完成的后续操作，会提供添加备注和详细说明的截图，以便于理解和使用。
      </Highlight>
      <Highlight icon={AtSign} heading="友好的技术支持">
        对于无法理解和有错误的地方，欢迎联系友好交流，共同进步。
      </Highlight>
      <Highlight icon={Download} heading="实用的文件下载">
        提供实用的文件下载功能，由{" "}
        <a href="https://repoflow.io/" rel="noreferrer noopener">
          <u>&nbsp;Repoflow&nbsp;</u>
        </a>
        开源软件实现。
      </Highlight>
      <Highlight icon={ListTree} heading="更好的目录分类">
        基于 Fumadocs 框架的强大能力，实现更优雅的目录结构分类。
      </Highlight>
      <Highlight icon={PocketKnife} heading="最终的目标愿望">
        争取成为您工作中的瑞士军刀，方便且实用。
      </Highlight>
    </div>
  );
}

function Highlight({
  icon: Icon,
  heading,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  children: ReactNode;
}): React.ReactElement {
  return (
    <div className="border-l border-t px-6 py-12">
      <div className="mb-4 flex flex-row items-center gap-2 text-fd-muted-foreground">
        <Icon className="size-4" />
        <h2 className="text-sm font-medium">{heading}</h2>
      </div>
      <span className="font-medium">{children}</span>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative z-[2] flex flex-col border-x border-t bg-fd-background/80 px-4 pt-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden overflow-hidden">
      <div
        className="absolute inset-0 z-[-1] blur-2xl hidden dark:block"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, white, transparent)",
          background:
            "repeating-linear-gradient(65deg, var(--color-blue-500), var(--color-blue-500) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)",
        }}
      />
      <div
        className="absolute inset-0 z-[-1] blur-2xl dark:hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, white, transparent)",
          background:
            "repeating-linear-gradient(65deg, var(--color-purple-300), var(--color-purple-300) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)",
        }}
      />
      <h1 className="mb-8 text-4xl font-medium md:hidden">下一版本的知识库</h1>
      <h1 className="mb-8 max-w-[600px] text-4xl font-medium max-md:hidden">
        下一版本的知识库，
        <br />由 Next.JS 引擎强力驱动。
      </h1>
      <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
        借助 Next.JS 引擎和 Fumadocs
        框架的强大功能，相比于第一版知识库来说，对页面进行了全新的升级，功能也更加丰富，使你的阅读体验变得更好。
      </p>
      <div className="inline-flex items-center gap-3 max-md:mx-auto">
        <Link
          href="/docs/networks/6c3aafe2"
          className={cn(
            buttonVariants({ size: "lg", className: "rounded-full" }),
          )}
        >
          查看文档
        </Link>
        <a
          href="https://github.com/J1nH4ng/ProjectNW"
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            buttonVariants({
              size: "lg",
              variant: "outline",
              className: "rounded-full bg-fd-background",
            }),
          )}
        >
          在 Github 查看
        </a>
      </div>
      <PreviewImages />
    </div>
  );
}

// const feedback = [
//   {
//     avatar: "https://avatars.githubusercontent.com/u/124599",
//     user: "shadcn",
//     role: "Creator of Shadcn UI",
//     message: `You know how you end up rebuilding a full docs site every time you start a new project?

// Fumadocs fixes this by giving you all the right blocks that you compose together.

// Like headless docs to build exactly what you need.`,
//   },
//   {
//     avatar: "https://avatars.githubusercontent.com/u/35677084",
//     user: "Anthony Shew",
//     role: "Turbo DX at Vercel",
//     message: `Major shoutout to @fuma_nama for making fumadocs, a gorgeous documentation framework that composes beautifully into the App Router.`,
//   },
//   {
//     user: "Aiden Bai",
//     avatar: "https://avatars.githubusercontent.com/u/38025074",
//     role: "Creator of Million.js",
//     message: "fumadocs is the best Next.js docs framework",
//   },
//   {
//     avatar: "https://avatars.githubusercontent.com/u/10645823",
//     user: "David Blass",
//     role: "Creator of Arktype",
//     message: `I'd have no shot building @arktypeio docs that looked half this good without it 😍`,
//   },
// ];

// function Feedback() {
//   return (
//     <div className="relative border-x border-t pt-8 bg-fd-background">
//       <div className="flex flex-row gap-6 justify-between px-6 mb-6 items-center">
//         <p className="text-sm font-medium md:text-lg">
//           Trusted by awesome teams and developers
//         </p>
//         <Link
//           href="/showcase"
//           className={cn(buttonVariants({ variant: "outline" }))}
//         >
//           Showcase
//         </Link>
//       </div>
//       <Marquee className="pb-8 [mask-image:linear-gradient(to_right,transparent,white_20px,white_calc(100%-20px),transparent)]">
//         {feedback.map((item) => (
//           <div
//             key={item.user}
//             className="flex flex-col rounded-xl border bg-gradient-to-b from-fd-card p-4 shadow-lg w-[320px]"
//           >
//             <p className="text-sm whitespace-pre-wrap">{item.message}</p>

//             <div className="mt-auto flex flex-row items-center gap-2 pt-4">
//               <Image
//                 src={item.avatar}
//                 alt="avatar"
//                 width="32"
//                 height="32"
//                 unoptimized
//                 className="size-8 rounded-full"
//               />
//               <div>
//                 <p className="text-sm font-medium">{item.user}</p>
//                 <p className="text-xs text-fd-muted-foreground">{item.role}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Marquee>
//     </div>
//   );
// }

// function Introduction(): React.ReactElement {
//   return (
//     <div className="grid grid-cols-1 border-r md:grid-cols-2">
//       <div className="flex flex-col gap-2 border-l border-t px-6 py-12 md:py-16">
//         <div className={cn(badgeVariants())}>1</div>
//         <h3 className="text-xl font-semibold">Create it.</h3>
//         <p className="mb-8 text-fd-muted-foreground">
//           Initialize a new docs with a command.
//         </p>
//         <CreateAppAnimation />
//       </div>
//       <div className="flex flex-col gap-2 border-l border-t px-6 py-12 md:py-16">
//         <div className={cn(badgeVariants())}>2</div>
//         <h3 className="text-xl font-semibold">Write.</h3>
//         <p className="text-fd-muted-foreground">
//           Write content, with automation tools & type-safe data validation.
//         </p>
//         <div className="relative flex flex-col">
//           <CodeBlock
//             lang="mdx"
//             wrapper={{
//               className: "absolute inset-x-2 top-0 shadow-lg",
//             }}
//             code={`---
// title: My Documentation
// ---

// ## Introduction

// Hello World
// `}
//           />
//           <Files className="z-[2] mt-40 shadow-xl">
//             <Folder name="content" defaultOpen>
//               <File name="index.mdx" />
//               <File name="components.mdx" />
//             </Folder>
//           </Files>
//         </div>
//       </div>
//       <div className="col-span-full flex flex-col items-center gap-2 border-l border-t px-6 py-16 text-center">
//         <div className={cn(badgeVariants())}>3</div>
//         <h3 className="text-2xl font-semibold">Ship.</h3>
//         <p className="text-fd-muted-foreground">
//           Deploy your docs easily with Next.js compatible hosting platforms.
//         </p>

//         <div className="mt-4 flex flex-row flex-wrap items-center gap-8">
//           <a href="https://vercel.com" rel="noreferrer noopener">
//             <VercelLogo className="h-auto w-32" />
//           </a>
//           <a href="https://netlify.com" rel="noreferrer noopener">
//             <NetlifyLogo className="h-auto w-32" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Contributing() {
//   return (
//     <div className="flex flex-col items-center border-x border-t px-4 py-16 text-center">
//       <Heart fill="currentColor" className="text-pink-500 mb-4" />
//       <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
//         Made Possible by You.
//       </h2>
//       <p className="mb-4 text-fd-muted-foreground">
//         Fumadocs is 100% powered by passion and open source community.
//       </p>
//       <div className="mb-8 flex flex-row items-center gap-2">
//         <Link
//           href="/sponsors"
//           className={cn(buttonVariants({ variant: "outline" }))}
//         >
//           Sponsors
//         </Link>
//         <a
//           href="https://github.com/J1nH4ng/ProjectNW/graphs/contributors"
//           rel="noreferrer noopener"
//           className={cn(buttonVariants({ variant: "ghost" }))}
//         >
//           Contributors
//         </a>
//       </div>
//       <ContributorCounter repoOwner={owner} repoName={repo} />
//     </div>
//   );
// }

// function Features() {
//   return (
//     <div className="grid grid-cols-1 border-r md:grid-cols-2">
//       <Feature
//         icon={PaperclipIcon}
//         subheading="Source Agnostic"
//         heading="Your source. Your choice"
//         description={
//           <>
//             <span className="font-medium text-fd-foreground">
//               Designed to integrate with any content source:{" "}
//             </span>
//             <span>
//               Fumadocs works on MDX, Content Collections, and even your own CMS.
//             </span>
//           </>
//         }
//         className="overflow-hidden"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 60% 50%,var(--color-fd-secondary),var(--color-fd-background) 80%)",
//         }}
//       >
//         <div className="mt-8 flex flex-col">
//           <div className="flex flex-row w-fit bg-fd-secondary border rounded-full *:rounded-full">
//             <a
//               href="https://github.com/fuma-nama/fumadocs-basehub"
//               rel="noreferrer noopener"
//               target="_blank"
//               className={cn(buttonVariants({ variant: "outline" }))}
//             >
//               BaseHub CMS example
//             </a>
//             <a
//               href="https://github.com/fuma-nama/fumadocs-sanity"
//               rel="noreferrer noopener"
//               target="_blank"
//               className={cn(buttonVariants({ variant: "ghost" }))}
//             >
//               Sanity example
//             </a>
//           </div>
//           <Image
//             alt="Source"
//             src={SourceImage}
//             sizes="600px"
//             className="-mt-16 w-[400px] min-w-[400px] invert pointer-events-none dark:invert-0"
//           />
//           <div className="z-[2] mt-[-170px] w-[300px] overflow-hidden rounded-lg border border-fd-foreground/10 shadow-xl backdrop-blur-lg">
//             <div className="flex flex-row items-center gap-2 bg-fd-muted/50 px-4 py-2 text-xs font-medium text-fd-muted-foreground">
//               <FileEditIcon className="size-4" />
//               MDX Editor
//             </div>
//             <pre className="p-4 text-[13px]">
//               <code className="grid">
//                 <span className="font-medium"># Hello World!</span>
//                 <span>This is my first document.</span>
//                 <span>{` `}</span>
//                 <span className="font-medium">{`<ServerComponent />`}</span>
//               </code>
//             </pre>
//           </div>
//         </div>
//       </Feature>
//       <Feature
//         icon={SearchIcon}
//         subheading="Search Integration"
//         heading="Enhance your search experience."
//         description="Integrate with Orama Search and Algolia Search in your docs easily."
//       >
//         <Link
//           href="/docs/headless/search/algolia"
//           className={cn(
//             buttonVariants({ variant: "outline", className: "mt-4" }),
//           )}
//         >
//           Learn More
//         </Link>
//         <Search />
//       </Feature>
//       <Feature
//         icon={Terminal}
//         subheading="Fumadocs CLI"
//         heading="The Shadcn UI for docs"
//         description="Fumadocs CLI creates interactive components for your docs, offering a rich experience to your users."
//       >
//         <div className="relative">
//           <div className="grid grid-cols-[1fr_2fr_1fr] h-[220px] *:border-fd-foreground/50 *:border-dashed mask-radial-circle mask-radial-from-white">
//             <div className="border-r border-b" />
//             <div className="border-b" />
//             <div className="border-l border-b" />

//             <div className="border-r" />
//             <div className="w-[200px]" />
//             <div className="border-l" />

//             <div className="border-r border-t" />
//             <div className="border-t" />
//             <div className="border-l border-t" />
//           </div>
//           <code className="absolute inset-0 flex items-center justify-center">
//             <code className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-fd-foreground font-medium">
//               npx @fumadocs/cli add
//             </code>
//           </code>
//         </div>
//       </Feature>
//       <Feature
//         icon={CpuIcon}
//         subheading="Robust"
//         heading="Flexibility that cover your needs."
//         description="Well documented, separated in packages."
//       >
//         <div className="mt-8 flex flex-col gap-4">
//           <Link
//             href="/docs/ui"
//             className="rounded-xl bg-gradient-to-br from-transparent via-fd-primary p-px shadow-lg shadow-fd-primary/20"
//           >
//             <div className="rounded-[inherit] bg-fd-background bg-gradient-to-br from-transparent via-fd-primary/10 p-4 transition-colors hover:bg-fd-muted">
//               <LayoutIcon />
//               <h3 className="font-semibold">Fumadocs UI</h3>
//               <p className="text-sm text-fd-muted-foreground">
//                 Default theme of Fumadocs with many useful components.
//               </p>
//             </div>
//           </Link>
//           <Link
//             href="/docs/headless"
//             className="rounded-xl border bg-fd-background p-4 shadow-lg transition-colors hover:bg-fd-muted"
//           >
//             <LibraryIcon />
//             <h3 className="font-semibold">Core</h3>
//             <p className="text-sm text-fd-muted-foreground">
//               Headless library with a useful set of utilities.
//             </p>
//           </Link>
//         </div>
//       </Feature>
//     </div>
//   );
// }

// function Feature({
//   className,
//   icon: Icon,
//   heading,
//   subheading,
//   description,
//   ...props
// }: HTMLAttributes<HTMLDivElement> & {
//   icon: LucideIcon;
//   subheading: ReactNode;
//   heading: ReactNode;
//   description: ReactNode;
// }): React.ReactElement {
//   return (
//     <div
//       className={cn("border-l border-t px-6 py-12 md:py-16", className)}
//       {...props}
//     >
//       <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-fd-muted-foreground">
//         <Icon className="size-4" />
//         <p>{subheading}</p>
//       </div>
//       <h2 className="mb-2 text-lg font-semibold">{heading}</h2>
//       <p className="text-fd-muted-foreground">{description}</p>

//       {props.children}
//     </div>
//   );
// }
