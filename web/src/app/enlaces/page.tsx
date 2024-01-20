import { Avatar } from '@nextui-org/avatar'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'

export default function Links() {
  return (
    <div className="flex w-full justify-center px-3">
      <div className="my-4 flex min-h-[80vh] w-full max-w-screen-md flex-col items-center justify-center">
        <Avatar color="primary" src="avatar_danilopgon.webp" className="h-40 w-40 animate-fade object-cover" />
        <h1 className="mt-4 animate-fade text-center text-4xl font-bold">Dani López González</h1>
        <h2 className="mb-4 mt-2 animate-fade text-center text-2xl font-bold">@danilopgon</h2>
        <div className="my-4 flex w-full flex-col items-center justify-center gap-4">
          <Button color="primary" className="w-full max-w-sm" as={Link} href="https://github.com/danilopgon">
            GitHub
          </Button>
          <Button color="primary" className="w-full max-w-sm" as={Link} href="https://www.linkedin.com/in/danilopgon/">
            LinkedIn
          </Button>
          <Button color="primary" className="w-full max-w-sm" as={Link} href="https://www.instagram.com/danilopgon/">
            Instagram
          </Button>
          <Button
            color="primary"
            className="w-full max-w-sm"
            as={Link}
            href="https://open.spotify.com/intl-es/artist/5ZsW4wbMl8qYFZ0L9xvBeu"
          >
            Mi grupo de música
          </Button>
          <Button color="primary" className="w-full max-w-sm" as={Link} href="/">
            Mi portfolio
          </Button>
        </div>
      </div>
    </div>
  )
}
