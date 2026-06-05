'use client'

import { PulseFitHero } from "@/components/ui/pulse-fit-hero";

export default function PreviewPage() {
  return (
    <PulseFitHero
      logo="PulseFit"
      navigation={[
        { label: "Features" },
        { label: "Programs", hasDropdown: true },
        { label: "Testimonials" },
        { label: "Pricing" },
        { label: "Contact" },
      ]}
      ctaButton={{
        label: "Get Free Trial",
        onClick: () => {},
      }}
      title="Train smarter. Anywhere. Anytime."
      subtitle="Guided fitness sessions tailored to your goals — whether it's strength, endurance, or flexibility. Streamlined, motivating, and accessible 24/7."
      primaryAction={{
        label: "Start training",
        onClick: () => {},
      }}
      secondaryAction={{
        label: "Browse programs",
        onClick: () => {},
      }}
      disclaimer="*No credit card required"
      socialProof={{
        avatars: [
          "https://i.pravatar.cc/150?img=1",
          "https://i.pravatar.cc/150?img=2",
          "https://i.pravatar.cc/150?img=3",
          "https://i.pravatar.cc/150?img=4",
        ],
        text: "Join over 10,000+ people",
      }}
      programs={[
        {
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
          category: "BEGINNER",
          title: "Jumping challenge",
        },
        {
          image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop",
          category: "INTERMEDIATE",
          title: "Core stability flow",
        },
        {
          image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=500&fit=crop",
          category: "ADVANCED",
          title: "Trail sprint challenge",
        },
        {
          image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop",
          category: "ALL LEVELS",
          title: "Full-body bootcamp",
        },
        {
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop",
          category: "RECOVERY",
          title: "Mobility & Recovery",
        },
      ]}
    />
  );
}
