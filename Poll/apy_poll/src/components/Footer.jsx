import { Card, CardContent, Typography } from "@mui/material";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


const Footer = () => {
    return (
        <Card sx={{ maxWidth: 300, margin: "20px", padding: "10px" }}>
            <CardContent>
                <Typography variant="h5">MUI Card</Typography>
                <Typography variant="body2">이것은 MUI 카드입니다!</Typography>
                <Badge badgeContent={4} color="primary">
                    <MailIcon color="action" />
                </Badge>
            </CardContent>
        </Card>
    );
};

export default Footer;
