import React from "react"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { useForm } from "react-hook-form"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "300px",
    alignContent: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const AddEmail = () => {
  const classes = useStyles()
  const { register, handleSubmit, errors} = useForm()
  const onSubmit = (data) => {
    alert(data.email)
  }

  return (
    <div className={classes.paper}>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        World leading space agency
      </Typography>

      <form id="form" className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          variant="outlined"
          type="email"
          margin="normal"
          fullWidth
          required
          id="email"
          label="Enter your email address"
          name="email"
          inputRef={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          autoComplete="email"
        />
        <Button
          type="submit"
          id="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={errors.email}
          className={classes.submit}
        >
          Get Started
        </Button>
      </form>
    </div>
  )
}

export default AddEmail
