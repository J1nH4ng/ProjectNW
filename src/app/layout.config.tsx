import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="https://q1.qlogo.cn/g?b=qq&nk=2838080432&s=640"
          alt="Logo"
          width={32}
          height={32}
        />
        Next Wiki
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
