

const Faq = () => {
    return (

        <div className="mt-10">
            <div className="collapse collapse-arrow bg-base-200 my-6">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    How do I get started with Task Manager?
                </div>
                <div className="collapse-content">
                    <p>Getting started with Task Manager is easy! Simply sign up for an account, and you wll be guided through the onboarding process to set up your first task list. Our user-friendly interface makes task management a breeze.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-6">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Can I add tasks?
                </div>
                <div className="collapse-content">
                    <p>Absolutely! You can add any kind task you want.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-6">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Can I delete task?
                </div>
                <div className="collapse-content">
                    <p>Yes, you can delete task.</p>
                </div>
            </div>
        </div>

    );
};

export default Faq;