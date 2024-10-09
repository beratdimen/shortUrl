"use client";
import { linkToShortAction } from "@/action/short";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import "./shortForm.css";
import { useRouter } from "next/navigation";

export default function ShortUrlForm() {
  const [state, action] = useFormState(linkToShortAction, {
    message: null,
    error: null,
    short_url: null,
  });
  const router = useRouter();

  const formRef = useRef(null);
  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      formRef.current.reset();
    }

    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  const copyToClipboard = () => {
    if (state?.short_url) {
      navigator.clipboard.writeText(state.short_url).then(() => {
        toast.success("Short url copied");
      });
    }
  };

  const goToLink = () => {
    console.log("state?.long_url :>> ", state?.long_url);
    router.push(`/${state?.long_url}`);
  };
  return (
    <div className="formContainer">
      <form ref={formRef} action={action}>
        <input
          type="text"
          name="long_url"
          placeholder="kısaltmak istediğin URL"
        />
        <button>Linki Kısalt</button>
      </form>
      <div className="shortUrl">
        {state?.short_url && (
          <div className="shortUrlCard">
            <p>{state?.longUrl}</p>
            <div className="btnGroup">
              <p>{state?.short_url}</p>
              <button onClick={copyToClipboard}>Copied</button>
              <button onClick={() => goToLink()}>Go To Url</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
