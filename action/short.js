import { z } from "zod";

export async function KayitAction(values) {
  let errors = {};

  
  if (values.step === 1) {
    errors = {
      longUrl: !values.longUrl ? "URL boş olamaz" : validateUrl(values.longUrl), 
    };
  }

  const hasErrors = Object.values(errors).some((error) => error !== null);
  if (hasErrors) {
    return errors;
  }

  await insertData(values.longUrl, makeid(7));
  return { success: true };
}

function validateUrl(url) {
  const urlControl = (url) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = `https://${url}`;
    }
    return url;
  };

  const validation = z.string().url().safeParse(urlControl(url));
  return validation.success ? null : "Geçersiz URL";
}

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

// Veriyi database'e ekleme işlemi
async function insertData(long, short) {
  const url = "https://xiseukjsxraiqmqgdlcs.supabase.co/rest/v1/url";
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpc2V1a2pzeHJhaXFtcWdkbGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MTAwMDcsImV4cCI6MjA0MzE4NjAwN30.Sc5m779kgEvy9SLsQvKOutFTHa-qtCeWuxkncKQKPeE";

  const payload = {
    long_url: long,
    short_url: short,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      apikey: apiKey,
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Veritabanına ekleme başarısız oldu");
  }

  return response.json();
}
