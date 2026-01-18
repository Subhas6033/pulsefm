import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <header className="p-2 text-right">
      <SignedOut>
        <SignInButton>
          <Button
            variant={"outline"}
            className="bg-black text-white hover:cursor-pointer"
          >
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: {
                width: "60px",
                height: "60px",
                borderRadius: "9999px",
                border: "2px solid red",
              },
            },
          }}
        />
      </SignedIn>
    </header>
  );
}

export default App;
