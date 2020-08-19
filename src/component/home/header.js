import React from "react"
import { AppBar, makeStyles, Toolbar } from "@material-ui/core"
import Link from "@material-ui/core/Link"
import Logo from "../../images/spacx.png"
import Typography from "@material-ui/core/Typography"
import './styles.css'

console.log(Logo)

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 0,
    left: 0,
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: "fixed",
    background: "#eeeeee",

  },
  navLink: {
    margin: theme.spacing(1, 1.5),
    position: "left",
  },
  logo: {
    color: "blue",
    maxWidth: "130px",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  navCla: {
    position: "left",
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <header id="header">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className="toolBar">
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <img
              id="header-img"
              src={Logo}
              alt="Logo"
              className={classes.logo}
            />
          </Typography>
          <nav id="nav-bar" className="navCla">
            <Link
              variant="button"
              color="textPrimary"
              href="#features"
              className={classes.navLink}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#vidStream"
              className={classes.navLink}
            >
              How it works
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#pricing"
              className={classes.navLink}
            >
              Pricing
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
