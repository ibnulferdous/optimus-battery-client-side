import Box from "@mui/material/Box";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const featuresText = [
  "High-pressure casted spine grid with improved corrosion resistance capability",
  "Rugged Construction of Tubular Positive plates ensures longer life & endurance",
  "Most suitable and reliable in deep cyclic applications and higher power shortage area",
  "Long Lasting Battery Life for an unlimited flow of energy",
  "High charge acceptance for better backup",
  "Least gas generation and low maintenance",
  "Peace of mind with best-in-class warranty",
  "Nature friendly",
];

export default function ProductFeatures(params) {
  return (
    <div>
      <Typography
        variant="h6"
        component="h3"
        sx={{ fontWeight: "700", marginBottom: "15px" }}
      >
        Features
      </Typography>

      <Box>
        <List dense>
          {/* TODO- Map through feature text list */}
          {featuresText.map((text, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon>
                <CheckCircleOutlineIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
