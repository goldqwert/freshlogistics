import React from "react";

const Block = ({ width, ...props }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        height: "100%",
        width: width,
        padding: "16px",
        boxShadow: "0px 0px 3px 0px #888888",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        flexWrap: "wrap",
      }}
    >
      {props.children}
    </div>
  );
};

export default Block;
