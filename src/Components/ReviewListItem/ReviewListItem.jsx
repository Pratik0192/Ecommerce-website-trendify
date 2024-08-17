import React from 'react';
import './ReviewListItem.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';



const ReviewListItem = (props) => {
  const { avatar, userName, reviewText } = props;

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={userName}
          secondary={
            <React.Fragment>
              <Stack direction="row" spacing={2}>
                <Rating name="read-only" value={5} size="small" readOnly />
                <h4 className="rating-title">The iPhone 14 Pro Max: An Epitome of Excellence</h4>
              </Stack>
              {"Reviewed in India on 28 July 2023"}
              <Typography
                sx={{ display: 'block', color: 'red', fontWeight: 600, fontSize: 12, marginBottom: 1 }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Verified Purchase
              </Typography>
              {reviewText}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default ReviewListItem;