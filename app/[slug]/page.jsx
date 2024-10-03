"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SlugPage({ params }) {
  const { slug } = params;
  const [products, setProducts] = useState([]);
  const [isShortUrl, setIsShortUrl] = useState(false);
  const router = useRouter();

  const fetchData = async () => {
    const apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpc2V1a2pzeHJhaXFtcWdkbGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MTAwMDcsImV4cCI6MjA0MzE4NjAwN30.Sc5m779kgEvy9SLsQvKOutFTHa-qtCeWuxkncKQKPeE";
    const url = "https://xiseukjsxraiqmqgdlcs.supabase.co/rest/v1/url?select=*";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apiKey: apiKey,
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const responseData = await response.json();

    const data = responseData.find((x) => x.long_url === slug);
    const isShortUrl = responseData.find((x) => x.short_url === slug);

    console.log("products :>> ", responseData);
    console.log("data :>> ", data);
    if (!isShortUrl) {
      setTimeout(() => {
        router.push(`/${data?.short_url}`);
      }, 5000);
    } else {
      setIsShortUrl(true);
    }

    console.log("data :>> ", responseData);
    return setProducts(responseData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      Bu sayfa {slug} sayfasıdır.
      {isShortUrl ? "" : "5 saniye sonra yönlendirilecektir"}
    </div>
  );
}
