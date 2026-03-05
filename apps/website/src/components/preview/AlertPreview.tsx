import { ThemeWrapper } from "./ThemeWrapper";
import { Alert } from "biz-ui";

export default function AlertPreview() {
  return (
    <ThemeWrapper>
      <div className="flex flex-col gap-3 max-w-xl">
        <Alert variant="default" title="Default">
          This is the default alert style.
        </Alert>
        <Alert variant="info" title="Info">
          Informational message for the user.
        </Alert>
        <Alert variant="success" title="Success">
          Operation completed successfully.
        </Alert>
        <Alert variant="warning" title="Warning">
          Please review before continuing.
        </Alert>
        <Alert variant="destructive" title="Error">
          Something went wrong. Please try again.
        </Alert>
      </div>
    </ThemeWrapper>
  );
}
