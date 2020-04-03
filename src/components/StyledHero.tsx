import React from "react"
import {
  createStyles,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles"
import BackgroundImage, { IFluidObject } from "gatsby-background-image"

interface StyledHeroProps {
  isHome: boolean
  img: IFluidObject | IFluidObject[] | (IFluidObject | string)[]
}
const styles = createStyles({
  container: {
    background: (props: StyledHeroProps) =>
      props.isHome
        ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
        : "none",
    minHeight: (props: StyledHeroProps) =>
      props.isHome ? "calc(100vh - 62px)" : "50vh",
    "&:before": {
      backgroundPosition: "center !important",
      backgroundSize: "cover !important",
    },
    "&:after": {
      backgroundPosition: "center !important",
      backgroundSize: "cover !important",
    },
    opacity: "1 !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
})
const StyledHero: React.FC<StyledHeroProps & WithStyles<typeof styles>> = ({
  children,
  img,
  isHome,
  classes,
}) => {
  return (
    <BackgroundImage className={classes.container} fluid={img}>
      {children}
    </BackgroundImage>
  )
}
export default withStyles(styles)(StyledHero)
