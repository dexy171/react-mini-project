import { Alert, AlertTitle, Button } from "@mui/material";

const handleClick = () => {
  window.location.reload();
};
export const ErrorInfo = () => {
  return (
    <div>
      <Alert severity="error">
        <AlertTitle>Something went wrong...</AlertTitle>There has been an error,
        try again later.
        <div>
          <Button
            variant="contained"
            color="error"
            sx={{ marginTop: 2 }}
            onClick={handleClick}
          >
            Reload content
          </Button>
        </div>
      </Alert>
    </div>
  );
};
