export type SwaiFetch = (
  relativeUrl: string,
  init?: RequestInit,
) => Promise<Response>;

export type SafeTimers = {
  setTimeout: typeof window.setTimeout;
  clearTimeout: typeof window.clearTimeout;
  setInterval: typeof window.setInterval;
  clearInterval: typeof window.clearInterval;
};

export type FormSectionComponent = React.FC<
  {
    title: string;
    tooltipMessage?: string | undefined;
    marginBottom?: 16 | 32 | undefined;
  } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>;

export type FormCellComponent = React.FC<
  {
    gap?: number | undefined;
  } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
>;

export type OfflineLayout = React.FC<{
  className?: string;
  image?: React.ReactNode;
  title?: React.ReactNode;
}>;

export type ProgressBarComponent = React.VFC<
  {
    progress: number;
  } & React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>
>;
