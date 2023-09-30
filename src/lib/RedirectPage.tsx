import { useRouter } from "next/navigation";
import { useEffect } from "react";

function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/menu`);
  }, [router]);
  return null;
}

export default RedirectPage;
