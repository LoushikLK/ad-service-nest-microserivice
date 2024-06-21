import { FeatureSection, HeroSection } from "@/components/home";
import PublicLayout from "@/layouts/public";

export default function Home() {
  return (
    <PublicLayout>
      <HeroSection />
      <FeatureSection />
    </PublicLayout>
  );
}
