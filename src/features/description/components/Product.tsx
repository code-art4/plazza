import { useState } from "react";
import Chair1Lg from "../../../assets/image/chair-1-large.png";
import { Button, TextArea } from "../../../components/ui";

const Product = () => {
  const [message, setMessage] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  const handleMessageChange = (e: any) => {
    console.log("hh");
    // 👇️ access textarea value
    setMessage(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="w-[55%]">
      <div className="w-full">
        <img src={Chair1Lg} className="w-full h-[35rem]" />
      </div>

      <div className="mt-4">
        <TextArea
          label="comment"
          placeholder="Add comment..."
          // value={message}
          // onClick={(e) => handleMessageChange(e)}
        />

        <div className="mt-4 flex items-start">
          <p
            className="mr-auto text-green font-medium cursor-pointer"
            onClick={() => setShowMsg(true)}
          >
            View Comments
          </p>
          {showMsg && <div></div>}
          <Button className="w-max px-7">Comment</Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
