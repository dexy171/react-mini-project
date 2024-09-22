import { Alert, AlertTitle } from "@mui/material";

export const EmptyList = () => {
  return (
    <Alert severity="warning">
      <AlertTitle>Empty listing</AlertTitle>
      There are no products to display.
    </Alert>
  );
};
