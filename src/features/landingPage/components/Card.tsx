import { AiOutlineMore } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui";
import AUserProfile from "../../../assets/image/blue-tyga.png";
import OrangeBlackChairIMG from "../../../assets/image/Orange&BlackChair.png";
import Star from "../../../assets/star.svg";
import Love from "../../../assets/love.svg";
import Comment from "../../../assets/comment.svg";
import Navigate from "../../../assets/navigate.svg";

const Card = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex px-4">
          <div>
            <img src={AUserProfile} />
          </div>
          <div className="ml-3">
            <p className="font-medium">Blue Tyga</p>
            <p className="text-[#888888] text-sm -mt-1">Distributor</p>
          </div>
        </div>
        <div className="flex items-center">
          <Button
            type="secondary"
            className="w-max px-4 py-2 h-max mr-3 font-medium"
          >
            Follow
          </Button>
          <AiOutlineMore />
        </div>
      </div>
      <div>
        <img
          src={OrangeBlackChairIMG}
          onClick={() => navigate("/description")}
          className="cursor-pointer w-full"
        />
      </div>

      <div className="flex justify-between">
        <div>
          <p className="font-medium text-lg mt-3 mb-2">
            Orange & Black Luxury Chair
          </p>
          <div className="flex items-center gap-x-1 mb-4">
            {Array(5)
              .fill("1")
              .map((_, i) => (
                <img key={i} src={Star} className="w-5 h-5" />
              ))}
          </div>
          <div className="flex items-center space-x-3">
            <img src={Love} className="w-5 h-5 cursor-pointer" />
            <img src={Comment} className="w-5 h-5 cursor-pointer" />
            <img src={Navigate} className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
        <div>
          <p className="font-medium text-lg mt-3 mb-2 text-green text-end">
            $349.99
          </p>
          <div>
            <Button className="w-max h-max py-2 px-4">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
