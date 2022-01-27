import { Link } from "react-router-dom";


export default function BookTossed() {

    return (


        <div className='toosed-bckg'>
            <div className='book-postioned'>
                <div>


                    <h1> <strong>Book Tossed</strong> <Link to ='/'>Home</Link> </h1>
                 

                    <div className='trash'>
                    <svg width="983" height="1290" viewBox="0 0 983 1290" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="84" y="282" width="815" height="1008" fill="#C4C4C4"/>
<rect y="101" width="983" height="134" fill="#C4C4C4"/>
<rect x="342" width="300" height="52" fill="#C4C4C4"/>
<rect x="147" y="329" width="672" height="878" fill="#E5E5E5"/>
<path d="M372.959 673L694.865 785.506L593.906 1074.37L272 961.866L372.959 673Z" fill="#77C3DB"/>
<rect x="353.959" y="627" width="341" height="306" transform="rotate(19.2646 353.959 627)" fill="#2D819C"/>
</svg>

                    </div>


                </div>
            </div>
        </div>
    )


}