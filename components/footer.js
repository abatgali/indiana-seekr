import Image from "next/image";
import favicon from "../public/indiana.ico"


export default function Footer() {
    return (
        <>
            <footer className="border-top p-5">
                <Image src={favicon}/>
                <div className="small"> <strong>Indiana Seekr </strong> </div>
                <p>&copy; 2022</p>
            </footer>
        </>
    )
};