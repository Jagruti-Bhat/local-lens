import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({ title, description, icon: Icon }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
    >
      <Card className="border-0 shadow-lg rounded-3xl h-full">
        <CardContent className="p-8">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
            <Icon className="text-blue-600" size={28} />
          </div>

          <h2 className="text-xl font-semibold mt-6">{title}</h2>

          <p className="text-slate-500 mt-4 leading-7">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
