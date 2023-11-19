import LeftSidebar from "@/components/leftsidebar/LeftSidebar"
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-auto">
                <LeftSidebar />
            </div>
            <div className="flex-grow p-1 md:overflow-y-auto md:p-2">{children}</div>
        </div>
    )
}

export default Layout