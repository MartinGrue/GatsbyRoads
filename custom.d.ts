declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
 }
 declare module "*.jpeg" {
  const value: string;
  export default value;
}
 declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}