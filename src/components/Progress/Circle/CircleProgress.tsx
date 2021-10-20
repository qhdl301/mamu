import { FC } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { CircularProgress, Grid } from '@material-ui/core/';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
          },
      justifyContent : "center",
      alignItems: "center",
    },
  }),
);

const CircleProgress: FC = () => {
    const classes = useStyles();
    
    return (
        <Grid container spacing={3}>
            <Grid className={ classes.root } item xs={12}>
                <CircularProgress />
            </Grid>
        </Grid>
    )
}

export default CircleProgress;