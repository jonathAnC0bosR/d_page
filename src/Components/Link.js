export default function Link({name, href}) {
    return (<>
        <a href={href} className="flex-1 text-center relative after:content-[''] after:block after:w-1/2 after:h-[2px] after:transale-x-[-50%] after:bg-white after:absolute after:left-1/4 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform">
            {name}
        </a>
    </>
    )
}