import { Link } from "react-router-dom";


export default function BookTossed() {

    return (


        <div className='toosed-bckg'>
            <div className='book-postioned'>
                <div className='svgShaping'>

                    <div>
                        <svg width="259" height="239" viewBox="0 0 259 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M259 119.342C259 185.064 201.021 238.342 129.5 238.342C57.9791 238.342 0 185.064 0 119.342C0 53.6199 57.9791 0.341797 129.5 0.341797C201.021 0.341797 259 53.6199 259 119.342Z" fill="#5AB6D3" />
                            <path d="M67 53.0001H95V179H67V53.0001Z" fill="#FFF2F2" />
                            <path d="M199.5 125.921C199.5 151.878 178.01 172.921 151.5 172.921C124.99 172.921 103.5 151.878 103.5 125.921C103.5 99.9631 124.99 78.9205 151.5 78.9205C178.01 78.9205 199.5 99.9631 199.5 125.921Z" fill="#FFF2F2" />
                        </svg>


                        <h1> <strong>Book Tossed</strong> -- <Link to='/'>Home</Link> </h1>


                        <div className='trash'>
                            <svg width="983" height="1290" viewBox="0 0 983 1290" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="84" y="282" width="815" height="1008" fill="#C4C4C4" />
                                <rect y="101" width="983" height="134" fill="#C4C4C4" />
                                <rect x="342" width="300" height="52" fill="#C4C4C4" />
                                <rect x="147" y="329" width="672" height="878" fill="#E5E5E5" />
                                <path d="M372.959 673L694.865 785.506L593.906 1074.37L272 961.866L372.959 673Z" fill="#77C3DB" />
                                <rect x="353.959" y="627" width="341" height="306" transform="rotate(19.2646 353.959 627)" fill="#2D819C" />
                            </svg>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )


}