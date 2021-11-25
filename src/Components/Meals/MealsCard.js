import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';

import { Shop } from '@material-ui/icons';
import MyLink from '../../shared/MyLink';
import { useMeals } from '../../contexts/MealContext';
import { checkItemInFavorite} from '../../utils/check-item-favorite';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 200,
    backgroundSize: 'contain',
  },
  actions: {
    justifyContent: 'space-between',
  },
});

const MealCard = ({ meal, favorite }) => {
  const classes = useStyles();

  const { addAndDeleteMealInFavorite } = useMeals();

  const isMealInFavorite = () => {
    if (favorite) {
      return checkItemInFavorite(favorite.meals, meal.id);
    }
    return false;
  };

  const inFavorite = isMealInFavorite();

  return (
    <Card className={classes.root}>
      <MyLink to={`/meal/${meal.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={meal.image}
            title="Meals Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {meal.title}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="textSecondary"
              component="p"
            >
              {meal.description}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="textSecondary"
              component="p"
            >
              {meal.recipe}
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" component="p">
              Категория: {meal.category} 
            </Typography>
          </CardContent>
        </CardActionArea>
      </MyLink>
      <CardActions className={classes.actions}>
        <IconButton color={inFavorite ? 'secondary' : 'default'}>
          <FavoriteIcon />
        </IconButton>
        <Button
          onClick={() => addAndDeleteMealInFavorite(meal)}
          color="primary"
          variant="contained"
          startIcon={<Shop />}
        >
          Приготовить
        </Button>
      </CardActions>
    </Card>
  );
};

export default MealCard;
