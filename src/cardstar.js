import './cardstar.css'
const CardStar = () => {
    return ( 
        <div className='card-parent'>
            <div className="row1">
                <div className='card1'>
                <h2>Flexible learning</h2>
                <p>The flexibility of online courses allows you to learn from anywhere in the world. There are six start dates each year.</p>
                </div>
                <div className="card1">
                    <h2>1 to 1 support</h2>
                    <p>You'll receive support from an enrollment coach, financial aid counselor, academic advisor and success coach during your journey.</p>
                </div>
                <div className="card1">
                    <h2>Online tutoring</h2>
                    <p>You can take advantage of several tutoring resources online. Online tutoring is live, free and available to all online students.</p>
                </div>
            </div>
            <div className="row2">
                <div className="card1">
                    <h2> Career services </h2>
                    <p>Boost your job search skills, build your resume and enhance your interview skills. ASU offers year-round career support.</p>
                </div>
                <div className="card1">
                    <h2>Disability support</h2>
                    <p>The Disability Resource Center provides services to qualified students with disabilities on all ASU campuses.</p>
                </div>
                <div className="card1">
                    <h2> 360 life services </h2>
                    <p>As an online student, you'll have access to a comprehensive support program that offers counseling programs, crisis intervention and more.</p>
                </div>
            </div>
            
            
        </div>
     );
}
 
export default CardStar;