import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

export const ContinuousSliderID0 = ({title, spacing, styles, startValue}) => {
  const useStyles = styles ? styles : makeStyles({
    root: {
      width: 200,
    },
  });
  const classes = useStyles();
  const [value, setValue] = React.useState(startValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
	  {title}
      </Typography>
      <Grid container spacing={spacing}>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
      </Grid>
    </div>
  );
}
