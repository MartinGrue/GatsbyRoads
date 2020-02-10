export const sizes = {
  widths: {
    xs: "576px",
    s: "767.98px",
    m: "992px",
    l: "1199.98px",
  } as { [key: string]: string },
  up(size: "xs" | "s" | "m" | "l") {
    return `@media (min-width: ${this.widths[size]})`
  },
  down(size: "xs" | "s" | "m" | "l") {
    return `@media (max-width: ${this.widths[size]})`
  },
}
