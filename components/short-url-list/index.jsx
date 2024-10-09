"use client";

import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";
import "./style.css";
import { toast } from "sonner";
import { CopiedIcon, GoUrlIcon } from "@/helpers/icons";
import { useRouter } from "next/navigation";

export default function ListShorUrl() {
  const [shortUrls, setShortUrls] = useState([]);
  const supabase = createClient();
  const router = useRouter();

  const fetchData = async () => {
    const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    console.log("user :>> ", user);
    const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/url?select=*&user_id=eq.${user?.id}&order=created_at.desc`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apiKey: apiKey,
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const responseData = await response.json();

    return setShortUrls(responseData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const copyToClipboard = (short_url) => {
    if (short_url) {
      navigator.clipboard.writeText(short_url).then(() => {
        toast.success("Short url copied");
      });
    }
  };

  const goToLink = (short_url) => {
    router.push(`/${short_url}`);
  };

  return (
    <div className="tableContainer">
      <h1>Previous URL</h1>
      <table className="urlTable">
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Long URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {shortUrls.map((x, i) => (
            <tr key={i}>
              <td>
                <a href={x.short_url} target="_blank" rel="noopener noreferrer">
                  {x.short_url}
                </a>
              </td>
              <td>{x.long_url}</td>
              <td>
                <div className="actionButtons">
                  <button onClick={() => copyToClipboard(x.short_url)}>
                    <CopiedIcon />
                  </button>
                  <button onClick={() => goToLink(x.short_url)}>
                    <GoUrlIcon />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
