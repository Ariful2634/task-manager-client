import Marquee from "react-fast-marquee";
import student from "../../assets/three-serious-students-studying-using-tablet-computer (1).jpg"
import developer from "../../assets/sofware-developer-thinking-while-touching-beard-while-typing-laptop-sitting-desk-with-multiple-screens-parsing-code-focused-database-admin-working-with-team-coding-background (1).jpg"
import banker from "../../assets/high-angle-view-male-accountant-checking-financial-document (1).jpg"
import sportsman from "../../assets/muscular-athletic-man-looks-smartphone-screen-downloads-songs-playlist-training-holds-bottle-with-fresh-water-wears-casual-t-shirt-has-regular-workout-poses-outdoors-healthy-lifestyle (1).jpg"

const Feature = () => {
    return (
        <div>
            <h2 className="text-transparent text-center mt-16 mb-8 bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 text-3xl font-bold">Targetted Audience</h2>
            <Marquee>
                <div className="mr-20">
                    <img className="w-[200px]  rounded shadow" src={student} alt="" />
                    <h2 className="text-center font-bold mt-1 text-blue-600">Student</h2>
                </div>
                <div className="mr-20">
                    <img className="w-[200px] h-[132px] rounded shadow" src={developer} alt="" />
                    <h2 className="text-center font-bold mt-1 text-blue-600">Developer</h2>
                </div>
                <div className="mr-20">
                    <img className="w-[200px]  rounded shadow" src={banker} alt="" />
                    <h2 className="text-center font-bold mt-1 text-blue-600">Banker</h2>
                </div>
                <div>
                    <img className="w-[200px]  rounded shadow" src={sportsman} alt="" />
                    <h2 className="text-center font-bold mt-1 text-blue-600">Sports Man</h2>
                </div>
            </Marquee>
        </div>
    );
};

export default Feature;