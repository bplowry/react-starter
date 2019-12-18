// For some reason, the @types/storybook__addon-storyshots package depends on webpack
// Having two versions of webpack (or a later version than CRA uses) breaks CRA
// so I've copied to here for now.

declare module '@storybook/addon-storyshots' {
  import { IStorybookStory } from '@storybook/react/dist/client/preview/types';

  export type Test = (options: {
    story: IStorybookStory;
    context: StoryContext;
    renderShallowTree: RenderTree;
    renderTree: RenderTree;
    snapshotFileName: string;
  }) => undefined | void | Promise<void>;

  export type RenderTree = (
    story: IStorybookStory,
    context: StoryContext,
    options?: SnapshotOptions
  ) => undefined | void | Promise<void>;

  export interface SnapshotOptionsObject {
    createNodeMock?: (element: any) => any;
  }

  export interface SnapshotOptionsFn {
    (story: IStorybookStory): SnapshotOptionsObject;
  }

  export type SnapshotOptions = SnapshotOptionsObject | SnapshotOptionsFn;

  export interface StoryContext {
    kind: string;
    story: string;
  }

  export function multiSnapshotWithOptions(options: SnapshotOptions): Test;

  export const shallowSnapshot: Test;

  export const snapshot: Test;

  export function snapshotWithOptions(options: SnapshotOptions): Test;

  export const renderOnly: Test;

  export function renderWithOptions(options?: SnapshotOptions): Test;

  export function getSnapshotFileName(context: StoryContext): string;

  export default function initStoryshots<Rendered>(
    // tslint:disable-next-line no-unnecessary-generics
    options?: InitOptions<Rendered>
  ): void;

  export interface InitOptions<Rendered = any> {
    configPath?: string;
    suite?: string;
    storyKindRegex?: RegExp;
    storyNameRegex?: RegExp;
    framework?: string;
    test?: Test;
    renderer?: (node: JSX.Element) => Rendered;
    serializer?: (rendered: Rendered) => any;
    integrityOptions?: {};
  }

  export {};
}
