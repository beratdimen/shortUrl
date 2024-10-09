"use client";
import { LogOutIcon } from "@/helpers/icons";
import { createClient } from "@/utils/supabase/client";

export default function LogoutButton() {
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload(false);
  };

  return (
    <button onClick={handleLogout}>
      <LogOutIcon />
    </button>
  );
}
