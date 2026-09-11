import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import BentoCard from "@/components/BentoCard";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <BentoCard className="max-w-md text-center items-center" initial="visible">
        <span className="text-sm font-mono text-primary mb-4">// error 404</span>
        <h1 className="mb-2 text-6xl font-bold gradient-text">404</h1>
        <p className="mb-6 text-muted-foreground">
          The route <span className="font-mono text-foreground">{location.pathname}</span>{" "}
          doesn't exist.
        </p>
        <Link to="/" className="btn-hero inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </Link>
      </BentoCard>
    </div>
  );
};

export default NotFound;
