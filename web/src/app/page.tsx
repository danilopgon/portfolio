import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center align-middle p-24">
      <div className="w-full lg:w-2/3">
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="danilopgon"
            className="object-cover w-full"
            src="https://danilopgon.com/wp-content/uploads/2020/09/encabezado-retocado-definitivo-2-arreglado.jpg"
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">
              danilopgon's portfolio template
            </p>
            <Link href="https://github.com/danilopgon/portfolio-2023">
              <Button>Repository</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
