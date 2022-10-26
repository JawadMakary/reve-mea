import React from "react";
import "./Info.css";
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
const Info = ({title,description}) => {
  return (
    <div className="info__cmp">
      <div className="info__card">
        <div className="info__icon">
        <SendToMobileIcon style={{fontSize:'30px'}}/>
        </div>
        <div className="info__data">
          <h1 className="info__header">{title}</h1>
          <span className="info__description">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
