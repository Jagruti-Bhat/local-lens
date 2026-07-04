import { Card, CardContent } from "@/components/ui/card";

interface Props {
  tips: string[];
}

export default function TipsSection({ tips }: Props) {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Travel Tips</h2>

      <Card>
        <CardContent className="p-6">
          <ul className="space-y-4">
            {tips.map((tip, index) => (
              <li key={index} className="flex gap-3">
                <span>✅</span>

                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
