import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

const ProductImage = ({ images, model }) => {
  const [imageUrl, setImageUrl] = useState(images[0]);

  useEffect(() => {
    setImageUrl(images[0]);
  }, [images]);

  return (
    <>
      <Paper variant="outlined" square>
        <Image
          src={imageUrl.startsWith("https") ? imageUrl : `/images/${imageUrl}`}
          alt={`${model} battery for ips/ups/inverter`}
          width={550}
          height={550}
          priority={true}
          quality={100}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Paper>
      <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
        <Stack direction="row" spacing={2}>
          {images.map((image) => (
            <Paper
              variant="outlined"
              square
              key={image}
              sx={{
                "&:hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              <IconButton
                aria-label="Image button"
                sx={{
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                }}
                onClick={() => setImageUrl(image)}
              >
                <Image
                  src={image.startsWith("https") ? image : `/images/${image}`}
                  alt={`${model} battery for ips/ups/inverter`}
                  width={50}
                  height={50}
                  priority={true}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </IconButton>
            </Paper>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default ProductImage;
