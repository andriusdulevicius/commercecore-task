import { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

interface Props {
  path: string;
  text: string;
  backgroundColor?: string;
}

const useStyles = makeStyles({
  linkWrapper: {
    backgroundColor: 'lightgray',
    borderRadius: '3rem',
    padding: '0.5rem',
    textAlign: 'center',
    transform: 'scale(1)',
    transition: 'scale 0.1s ease-in-out',
    '&:hover': {
      backgroundColor: 'darkgray',
      cursor: 'pointer',
    },
    '&:active': {
      transform: 'scale(1.05)',
    },
  },
  link: {
    display: 'block',
    textDecoration: 'none',
    color: 'gray',
    maxWidth: '8rem',
  },
});

const CustomButton: FC<Props> = ({ path, text, backgroundColor }) => {
  const classes = useStyles();

  return (
    <Link to={path} className={classes.link}>
      <Box className={classes.linkWrapper} style={{ backgroundColor: backgroundColor }}>
        {text}
      </Box>
    </Link>
  );
};

export default CustomButton;
