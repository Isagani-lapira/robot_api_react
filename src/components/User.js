
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


export default function User({name, city, company, email,phone,comment,deleteRobot}){
    function getRobotImg(name){
        return "https://robohash.org/"+name
    }

    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={getRobotImg(name)}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            City {city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Company: {company}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Email: {email}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Phone: {phone}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {comment}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={deleteRobot}>
          Delete
        </Button>
      </CardActions>
    </Card>
    // <div className="users">
    //     <img style={{height: "70%", width: "70%"}} src={getRobotImg(name)} />
    //     <p>{name}</p>
    //     <p>City: {city}</p>
    //     <p>Company: {company}</p>
    //     <p>Email: {email}</p>
    //     <p>Phone: {phone}</p>
    //     <p>{comment}</p>

    //     <Button variant="contained">Delete robot</Button>
    // </div>
    )
}