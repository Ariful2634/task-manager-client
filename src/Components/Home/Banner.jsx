/* eslint-disable react/no-unescaped-entities */
// import banner from '../../assets/task banner.png'

const Banner = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/Fx4BWCv/tbanner.png')] bg-cover bg-center bg-no-repeat w-[700px] mx-auto h-[450px] relative">
                <div className="text-center">
                    <button className="btn absolute top-[420px]  bg-gradient-to-r from-sky-500 to-purple-500 text-white font-bold">Let's Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;