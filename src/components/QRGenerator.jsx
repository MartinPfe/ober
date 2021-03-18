import { Box, Center, Link } from "@chakra-ui/layout";
import QRCode from "qrcode.react";
import React from "react";

const QRGenerator = ({ name, userId, restaurantId }) => {
  const url = `https://ober-dev.web.app/menu/${userId}/${restaurantId}`;

  const downloadQR = () => {
    const canvas = document.getElementById(restaurantId);
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = name + ".jpg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Box>
      <QRCode value={url} id={restaurantId} hidden="true" />
      <Center>
        <Link onClick={downloadQR}> Descargar QR </Link>
      </Center>
    </Box>
  );
};

export default QRGenerator;
