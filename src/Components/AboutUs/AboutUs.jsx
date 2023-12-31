

const AboutUs = () => {
    return (
        <div className="max-w-6xl mx-auto p-8 mt-8 shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
            <p className="text-lg  leading-relaxed mb-8">
                Welcome to Task Manager, your go-to task management platform designed to simplify your workflow and boost productivity. At Task Manager, we understand the challenges of managing tasks effectively, and we are here to make your work life more organized and efficient.
            </p>
            <p className="text-lg leading-relaxed mb-8">
                Our mission is to provide a user-friendly and intuitive task management solution that adapts to your unique needs. Built with React, our platform offers a seamless and responsive experience, ensuring you stay in control of your tasks whether you are at your desk or on the go.
            </p>
            <p className="text-lg  leading-relaxed mb-8">
                Key Features:
            </p>
            <ul className="list-disc list-inside text-l leading-relaxed mb-8">
                <li>Add any task you want.</li>
                <li>You can easily update task if you want.</li>
                <li>You can delete the task after you complete your task.</li>
                <li>Deadline to keep you on track.</li>
            </ul>
            <p className="text-lg  leading-relaxed mb-8">
                Whether you are a student, a developer, or part of a large team, Task Manager is here to help you stay organized and focused on what matters most. Join us on the journey to better task management and enhanced productivity.
            </p>
            <p className="text-lg  leading-relaxed">
                Get started today and experience the power of organized productivity with Task Manager.
            </p>
        </div>
    );
};

export default AboutUs;