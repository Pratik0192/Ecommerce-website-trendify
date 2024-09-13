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
  const { avatar, review } = props;

  const getDateFromTimestamp = (date) => {
    let timestamp = new Date(date);
    let monthName = timestamp.toLocaleString("en-US", { month: "long" });
    //let dateString = timestamp.getDate() +" "+ monthName +" "+ timestamp.getFullYear();
    let dateArray = timestamp.toUTCString().split(" ");
    let dateString = dateArray[1] + " " + dateArray[2] + " " + dateArray[3]; 
    //console.log(dateString);
    return dateString;
  }

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={review.userName}
          secondary={
            <React.Fragment>
              <Stack direction="row" spacing={2}>
                <Rating name="read-only" value={review.rating} size="small" readOnly />
                <h4 className="rating-title">{review.title}</h4>
              </Stack>
              Reviewed in India on {getDateFromTimestamp(review.date)}
              {review.verified_purchase &&
                <Typography
                  sx={{ display: 'block', color: 'red', fontWeight: 600, fontSize: 12, marginBottom: 1 }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Verified Purchase
                </Typography>
              }
              {review.comment}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default ReviewListItem;