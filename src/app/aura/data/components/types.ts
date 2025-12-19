export type ComponentData = {
  demo: React.ReactNode;
  description?: string;
  name: string;
  sourceUrl: string;
  storybookUrl?: string;
  title: string;
  variants?: { title: string; demo: React.ReactNode }[];
};
