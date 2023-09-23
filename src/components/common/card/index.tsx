import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MediaCardProps } from '@/models/interfaces/types';

export function MediaCard({ image, alt, height, maxWidth, title, body }: MediaCardProps): React.ReactElement<MediaCardProps> {
    return (
        <Card sx={{ maxWidth, }}>
            <CardMedia
                component="img"
                height={height}
                image={image}
                alt={alt}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small">Demo</Button>
                <Button size="small">Github</Button>
            </CardActions>
        </Card>
    );
}
