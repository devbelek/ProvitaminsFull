import React from "react";
import Favorite from "./favorite";
import Basket from "./basket";
import classNames from "classnames";
import Menu from "./menu";
import Close from "./close";
import Buy from "./buy";
import ChevronRight from "./chevron-right";
import ChevronLeft from "./chevron-left";
import Plus from "./plus";
import Minus from "./minus";
import Grid from "./grid";
import List from "./list";
import Back from "./back";
import Filter from "./filter";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function IconButton(props: Props) {
  return (
    <button
      className={classNames(
        "p-3 rounded-lg hover:bg-main-light transition hover:stroke-main"
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}

IconButton.Favorite = Favorite;
IconButton.Basket = Basket;
IconButton.Menu = Menu;
IconButton.Close = Close;
IconButton.Buy = Buy;
IconButton.ChevronRight = ChevronRight;
IconButton.ChevronLeft = ChevronLeft;
IconButton.Plus = Plus;
IconButton.Minus = Minus;
IconButton.Grid = Grid;
IconButton.List = List;
IconButton.Back = Back;
IconButton.Filter = Filter;

export default IconButton;
