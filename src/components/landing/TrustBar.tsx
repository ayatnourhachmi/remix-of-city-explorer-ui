import { Star } from "lucide-react";

const TrustBar = () => (
  <div className="bg-card py-3 border-b border-border">
    <div className="container-main flex items-center justify-center gap-2 text-sm">
      <span className="font-semibold text-foreground">Excellent</span>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-trustpilot text-trustpilot" />
        ))}
      </div>
      <span className="text-muted-foreground">
        324,000 reviews on <span className="font-medium text-foreground">Trustpilot</span>
      </span>
    </div>
  </div>
);

export default TrustBar;
