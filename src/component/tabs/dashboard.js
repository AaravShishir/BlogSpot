import React, { useEffect } from "react";
import $ from "jquery";
import constant from "../../helpers/constants";
import "../../assets/styles/tabs/dashboard.css";

const Dashboard = () => {
  const UpdateContent = () => {
    let interval = 2000;
    let i = 0;
    constant.DESCRIPTION.forEach(element => {
      setTimeout(() => {
        PrintText(element);
      }, interval * i);
      i++;
    });
  };

  const PrintText = value => {
    $("#intro-content").text(value);
  };

  useEffect(() => {
    UpdateContent();
  }, []);

  return (
    <>
      <div className="home-background">
        <div className="home-content">
          <div className="home-intro">
            <p className="pull-left">I'M </p>
            <p className="pull-right" id="intro-content"></p>
          </div>
          <div className="home-description">
            <p className=""> {constant.ONEWORDDESC}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
