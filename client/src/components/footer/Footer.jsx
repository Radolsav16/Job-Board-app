import { Link } from "react-router"

export default function Footer(){
   
    return(
        <footer className="text-sm leading-6 mt-8 px-3">
    <div className="pt-10 pl-10 pr-10 pb-8 border-t border-slate-200 sm:flex justify-between text-slate-500">
        <Link className="cursor-pointer">
          <img
            src="/job-board-logo.png"
            alt="Next Hire"
            className="h-20 w-auto"
          />
        </Link>


        <div className="mb-6 sm:mb-0 sm:flex">
            <p>Copyright © 2025</p>
            <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200">
              <a
                    className="hover:text-slate-900 text-blue-700" href="/">todorovradoslav6@gmail.com</a>
            </p>
        </div>
        <div className="flex space-x-10 text-slate-400">
            <a href="/job-board-logo"
                className="hover:text-slate-500">
                <span className="sr-only">GitHub</span><svg width="25" height="24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M12.846 0c-6.63 0-12 5.506-12 12.303 0 5.445 3.435 10.043 8.205 11.674.6.107.825-.262.825-.585 0-.292-.015-1.261-.015-2.291-3.015.569-3.795-.754-4.035-1.446-.135-.354-.72-1.446-1.23-1.738-.42-.23-1.02-.8-.015-.815.945-.015 1.62.892 1.845 1.261 1.08 1.86 2.805 1.338 3.495 1.015.105-.8.42-1.338.765-1.645-2.67-.308-5.46-1.37-5.46-6.075 0-1.338.465-2.446 1.23-3.307-.12-.308-.54-1.569.12-3.26 0 0 1.005-.323 3.3 1.26.96-.276 1.98-.415 3-.415s2.04.139 3 .416c2.295-1.6 3.3-1.261 3.3-1.261.66 1.691.24 2.952.12 3.26.765.861 1.23 1.953 1.23 3.307 0 4.721-2.805 5.767-5.475 6.075.435.384.81 1.122.81 2.276 0 1.645-.015 2.968-.015 3.383 0 .323.225.707.825.585a12.047 12.047 0 0 0 5.919-4.489 12.537 12.537 0 0 0 2.256-7.184c0-6.798-5.37-12.304-12-12.304Z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</footer>
    )
}