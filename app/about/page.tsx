import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <CardTitle>Hi, I'm Tinysolver</CardTitle>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMe;
