import Button from "./Button";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Footer = () => {
    const labelStyle: string = "font-bold text-xl";
    const listStyle: string = "text-[1.1rem]";

    return (
        <>
            <footer className="bg-gray-800 text-white p-4 mt-10 ">
                <div className="w-3/4 mx-auto flex justify-between my-6">
                    <section className="flex-none">
                        <h2 className={labelStyle}>Help & Information</h2>
                        <ul className={listStyle}>
                            <li>About Us</li>
                            <li>FAQs</li>
                            <li>View Purchase History</li>
                            <li>Report Bugs</li>
                        </ul>
                    </section>
                    <section className="flex-1">
                        <form className="w-3/4 mx-auto text-center">
                            <label className={`${labelStyle} flex-1`}>New to Shopmate?</label>
                            <p className="text-sm">Subscribe to our newsletter to get updates on our latest offers!</p>
                            <div>
                                <input className="border focus:outline-none w-[18rem] py-4 border-gray-400 bg-white text-gray-700 p-2 rounded mt-2" placeholder="Enter Email Address" />
                                <Button title="Subscribe" />
                            </div>
                        </form>
                    </section>
                    <section className={listStyle}>
                        <h2 className={labelStyle}>Shopping From:</h2>
                        <span>You're in <span className="fi fi-ng rounded-[50%] mr-2"></span> | Change </span>
                        <p>Some of our international sites:</p>
                        <ul className="grid grid-cols-2 gap-1">
                            <li><span className="fi fi-us"></span> USA</li>
                            <li><span className="fi fi-br"></span> Brazil</li>
                            <li><span className="fi fi-ca"></span> Canada</li>
                            <li><span className="fi fi-au"></span> Australia</li>
                        </ul>
                    </section>
                </div>
                <div className="w-3/4 mx-auto text-center">
                    <p className="text-sm">© Copyright 2025 Shopmate Stores, Inc. All rights reserved.</p>
                    <p className="text-xs">Follow us on social media!</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;