import image from "../../assets/whatsapp-icon.webp"
import messanger from "../../assets/facebook messanger logo.webp"
import { FacebookProvider, CustomChat } from 'react-facebook';

const LiveChat = () => {
    return (
        <>
        <div className="fixed z-10 bottom-7 right-7">
            <a className="text-xl text-emerald-600" href="https://wa.me/919432001531" target="_blank" rel="noopener noreferrer" >
                <img
                    className="w-14 ml-14 rounded-lg"
                    src={image}
                    alt="text"
                />
                {/* <h1 className="text-white bg-gradient-to-r rounded-lg text-2xl font-bold">
          Quick Support
        </h1> */}
            </a>
        </div>


{/* <div className="fixed z-10 bottom-28 right-7"> */}
            {/* <a className="text-xl text-emerald-600" href="https://wa.me/919432001531" target="_blank" rel="noopener noreferrer" >
                <img
                    className="w-14 ml-14 rounded-lg"
                    src={messanger}
                    alt="text"
                /> */}
                {/* <h1 className="text-white bg-gradient-to-r rounded-lg text-2xl font-bold">
          Quick Support
        </h1> */}
            {/* </a> */}


            {/* <FacebookProvider appId="123456789" chatSupport>
        <CustomChat pageId="123456789" minimized={false}/>
      </FacebookProvider>  */}


        {/* </div> */}
        </>
    );
};

export default LiveChat;